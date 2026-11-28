"use client"

import { useEffect, useRef } from "react"
import type { CSSProperties, ReactNode } from "react"
import * as THREE from "three"
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js"

// #region glass
export type Pt = [number, number]

/** Deterministic pseudo-random numbers, so a crack pattern can be tested. */
export function rng(seed: number) {
  let s = seed >>> 0 || 1
  return () => {
    s ^= s << 13
    s ^= s >>> 17
    s ^= s << 5
    return ((s >>> 0) % 100000) / 100000
  }
}

/** Clip a polygon to the rectangle [0,w]×[0,h] (Sutherland–Hodgman). */
export function clipRect(poly: Pt[], w: number, h: number) {
  const edges: [(p: Pt) => boolean, (a: Pt, b: Pt) => Pt][] = [
    [(p) => p[0] >= 0, (a, b) => { const t = (0 - a[0]) / (b[0] - a[0]); return [0, a[1] + t * (b[1] - a[1])] }],
    [(p) => p[0] <= w, (a, b) => { const t = (w - a[0]) / (b[0] - a[0]); return [w, a[1] + t * (b[1] - a[1])] }],
    [(p) => p[1] >= 0, (a, b) => { const t = (0 - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), 0] }],
    [(p) => p[1] <= h, (a, b) => { const t = (h - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), h] }],
  ]
  let out = poly
  for (const [inside, cut] of edges) {
    const src = out
    out = []
    for (let i = 0; i < src.length; i++) {
      const a = src[i], b = src[(i + 1) % src.length]
      const ia = inside(a), ib = inside(b)
      if (ia) out.push(a)
      if (ia !== ib) out.push(cut(a, b))
    }
    if (!out.length) break
  }
  return out
}

/** Shoelace area of a polygon. */
export function area(poly: Pt[]) {
  let s = 0
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length]
    s += a[0] * b[1] - b[0] * a[1]
  }
  return Math.abs(s) / 2
}

/** Shards of a w×h pane struck at (cx, cy): rings around the impact cut by jittered spokes,
 * small near the impact and large at the edges, clipped to the pane. They tile the pane. */
export function shatter(w: number, h: number, cx: number, cy: number, seed = 7) {
  const r = rng(seed)
  const spokes = 14
  const reach = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy)) * 1.05
  const rings = [0, 0.045, 0.1, 0.17, 0.26, 0.37, 0.5, 0.67, 1].map((k) => k * reach)
  const base = r() * Math.PI * 2
  const ang = rings.map(() =>
    Array.from({ length: spokes }, (_, i) => base + ((i + 0.5 * (r() - 0.5)) / spokes) * Math.PI * 2)
  )
  const at = (ri: number, si: number): Pt => {
    const a = ang[ri][si]
    const last = ri === rings.length - 1
    const rad = last ? (rings[ri] / Math.cos(Math.PI / spokes)) * 1.15 : rings[ri] * (ri === 0 ? 0 : 0.88 + r() * 0.24)
    return [cx + Math.cos(a) * rad, cy + Math.sin(a) * rad]
  }
  const pts = rings.map((_, ri) => {
    const row = Array.from({ length: spokes }, (_, si) => at(ri, si))
    row.push(row[0])
    return row
  })
  const shards: Pt[][] = []
  for (let ri = 0; ri < rings.length - 1; ri++)
    for (let si = 0; si < spokes; si++) {
      const poly =
        ri === 0
          ? [pts[0][0], pts[1][si], pts[1][si + 1]]
          : [pts[ri][si], pts[ri + 1][si], pts[ri + 1][si + 1], pts[ri][si + 1]]
      const c = clipRect(poly, w, h)
      if (c.length >= 3 && area(c) > 1e-5) shards.push(c)
    }
  return shards
}

/** Timeline of one strike, t seconds after the click. */
export function strike(t: number) {
  const crack = t < 0 ? 0 : Math.min(1, t / 0.32)
  const burst = t < 0.42 ? 0 : Math.min(1, (t - 0.42) / 1.8)
  const reform = t < 1.95 ? 0 : Math.min(1, (t - 1.95) / 0.55)
  return { crack, burst, reform, done: t >= 2.5 }
}
// #endregion

export type GlassImage = { src: string; alt?: string }

export type HangingGlassGalleryProps = {
  images?: GlassImage[]
  eyebrow?: string
  title?: ReactNode
  caption?: string
  /** Pan the row and strike a pane now and then on its own until someone interacts. */
  autoPlay?: boolean
  height?: string
  className?: string
  style?: CSSProperties
  /** Fired whenever the count of unique covered portraits updates. */
  onCoverageChange?: (covered: number, total: number) => void
  /** Fired once all unique portraits have appeared cleanly in rotation. */
  onAllCovered?: () => void
}

export const GTA_GALLERY_IMAGES: GlassImage[] = [
  { src: "/images/intro/gta-01.webp", alt: "Lucia Caminos artwork" },
  { src: "/images/intro/gta-02.webp", alt: "Tommy Vercetti Vice City portrait" },
  { src: "/images/intro/gta-03.webp", alt: "Lucia outdoor close-up portrait" },
  { src: "/images/intro/gta-04.webp", alt: "Franklin Clinton Los Santos portrait" },
  { src: "/images/intro/gta-05.webp", alt: "Jason Duval portrait" },
  { src: "/images/intro/gta-06.webp", alt: "GTA protagonist portrait" },
  { src: "/images/intro/gta-07.webp", alt: "Trevor Philips desert portrait" },
  { src: "/images/intro/gta-08.webp", alt: "Carl CJ Johnson Grove Street portrait" },
]

const FRAMES = [
  { x: 0, y: 0.1, z: 0, s: 1 },
  { x: 3.7, y: 0.9, z: -3.2, s: 0.55 },
  { x: 6.4, y: -0.2, z: -1.2, s: 0.85 },
  { x: 9.6, y: 0.7, z: -4.2, s: 0.5 },
  { x: 12.2, y: 0, z: -0.6, s: 0.95 },
  { x: 15.4, y: 0.8, z: -2.8, s: 0.6 },
]
const SPAN = 18.4
const PANE = { w: 2.7, h: 3.5, d: 0.3, rim: 0.2, round: 0.16 }
const PANE_ASPECT = PANE.w / PANE.h

/** Apply object-fit: cover UV scaling so landscape/square GTA art never stretches on vertical panes. */
function fitTextureCover(tex: THREE.Texture) {
  const img = tex.image as { width?: number; height?: number } | undefined
  if (!img?.width || !img?.height) return
  const imgAspect = img.width / img.height
  tex.wrapS = THREE.ClampToEdgeWrapping
  tex.wrapT = THREE.ClampToEdgeWrapping
  if (imgAspect > PANE_ASPECT) {
    const rx = PANE_ASPECT / imgAspect
    tex.repeat.set(rx, 1)
    tex.offset.set((1 - rx) / 2, 0)
  } else {
    const ry = imgAspect / PANE_ASPECT
    tex.repeat.set(1, ry)
    tex.offset.set(0, (1 - ry) * 0.68)
  }
  tex.needsUpdate = true
}

/** A rounded rectangle centred on 0,0. */
function roundedRect(w: number, h: number, r: number, path: THREE.Shape | THREE.Path = new THREE.Shape()) {
  const x = -w / 2, y = -h / 2
  path.moveTo(x + r, y)
  path.lineTo(x + w - r, y)
  path.quadraticCurveTo(x + w, y, x + w, y + r)
  path.lineTo(x + w, y + h - r)
  path.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  path.lineTo(x + r, y + h)
  path.quadraticCurveTo(x, y + h, x, y + h - r)
  path.lineTo(x, y + r)
  path.quadraticCurveTo(x, y, x + r, y)
  return path
}

const CSS =
  ".hgg-root{position:relative;display:grid;width:100%;overflow:hidden;" +
  "background:radial-gradient(115% 85% at 50% 24%,rgba(106,61,240,.22) 0%,rgba(255,138,61,.12) 34%,#0e0917 64%,#06050b 100%);" +
  "color:#f6efe2;grid-template:minmax(0,1fr) auto/minmax(0,1fr);" +
  "--g:clamp(20px,4vw,56px);isolation:isolate;touch-action:pan-y}" +
  ".hgg-canvas{grid-area:1/1/3/2;width:100%;height:100%;display:block;cursor:grab;z-index:0}" +
  ".hgg-canvas:active{cursor:grabbing}" +
  ".hgg-copy{grid-area:2/1/3/2;z-index:1;display:flex;align-items:flex-end;justify-content:space-between;gap:24px;padding:72px var(--g) var(--g);pointer-events:none;" +
  "background:linear-gradient(to top,rgba(7,5,13,.94) 0%,rgba(13,9,22,.74) 48%,rgba(13,9,22,0) 100%)}" +
  ".hgg-text{display:grid;gap:8px;max-width:780px}" +
  ".hgg-eyebrow{font:700 11px/1.2 'Inter',ui-sans-serif,system-ui,sans-serif;letter-spacing:.26em;text-transform:uppercase;color:#ff8a3d}" +
  ".hgg-title{margin:0;font:400 clamp(38px,5.8vw,86px)/.92 'Anton',Impact,'Arial Narrow',sans-serif;text-transform:uppercase;letter-spacing:.01em;text-shadow:3px 3px 0 #6a3df0,6px 6px 0 rgba(0,0,0,.85)}" +
  ".hgg-caption{margin:0;font:500 13px/1.45 'Inter',ui-sans-serif,system-ui,sans-serif;color:rgba(246,239,226,.76);max-width:42ch}" +
  ".hgg-count{font:700 12px/1 'JetBrains Mono',ui-monospace,monospace;letter-spacing:.18em;color:rgba(255,138,61,.9);white-space:nowrap}" +
  ".hgg-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}" +
  "@media (max-width:640px){.hgg-count{display:none}}" +
  "@media (prefers-reduced-motion:reduce){.hgg-canvas{cursor:default}}"

export default function HangingGlassGallery({
  images = GTA_GALLERY_IMAGES,
  eyebrow = "LOS SANTOS ARCHIVE · HACK WITH INDIA",
  title = "WELCOME TO MUMBAI 4.0",
  caption = "Tap any suspended glass pane to shatter it into Los Santos reflections. Drag to pan the skyline.",
  autoPlay = true,
  height = "100svh",
  className,
  style,
  onCoverageChange,
  onAllCovered,
}: HangingGlassGalleryProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const countRef = useRef<HTMLSpanElement | null>(null)
  const onCoverageRef = useRef(onCoverageChange)
  const onAllCoveredRef = useRef(onAllCovered)
  onCoverageRef.current = onCoverageChange
  onAllCoveredRef.current = onAllCovered
  const list = images.length ? images : GTA_GALLERY_IMAGES

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    if (!root || !canvas) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    let gl: THREE.WebGLRenderer
    try {
      gl = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" })
    } catch {
      return
    }
    gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    gl.outputColorSpace = THREE.SRGBColorSpace
    gl.setClearColor(0x000000, 0)
    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = 1.08

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x0c0816, 8.5, 19)

    // Studio environment for beveled acrylic specular highlights + GTA purple/orange rim accents
    const pmrem = new THREE.PMREMGenerator(gl)
    const roomEnv = new RoomEnvironment()
    const envTarget = pmrem.fromScene(roomEnv, 0.04)
    roomEnv.dispose()
    scene.environment = envTarget.texture

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60)
    camera.position.set(0, 0.1, 6.1)

    scene.add(new THREE.AmbientLight(0xf3ecff, 1.25))
    const key = new THREE.DirectionalLight(0xffb380, 2.2)
    key.position.set(-3.5, 5, 6)
    scene.add(key)

    const purpleRim = new THREE.PointLight(0x8b5cf6, 18, 22)
    purpleRim.position.set(4.5, 2.6, 2.5)
    scene.add(purpleRim)

    const orangeRim = new THREE.PointLight(0xff7a2f, 15, 22)
    orangeRim.position.set(-4.6, -1.2, 2.2)
    scene.add(orangeRim)

    const loader = new THREE.TextureLoader()
    loader.setCrossOrigin("anonymous")
    const textures = list.map((im) => {
      const t = loader.load(im.src, fitTextureCover)
      t.colorSpace = THREE.SRGBColorSpace
      t.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy())
      return t
    })
    const n = textures.length
    const disposables: { dispose(): void }[] = []
    const keep = <T extends { dispose(): void }>(x: T) => (disposables.push(x), x)

    const outerW = PANE.w + PANE.rim * 2
    const outerH = PANE.h + PANE.rim * 2
    const ringShape = roundedRect(outerW, outerH, PANE.round) as THREE.Shape
    ringShape.holes.push(roundedRect(PANE.w, PANE.h, 0.02, new THREE.Path()) as THREE.Path)
    const bevel = { bevelEnabled: true, bevelSize: 0.035, bevelThickness: 0.035, bevelSegments: 3 }
    const ringGeo = keep(new THREE.ExtrudeGeometry(ringShape, { depth: PANE.d, ...bevel, curveSegments: 6 }))
    ringGeo.translate(0, 0, -PANE.d / 2)
    const ringMat = keep(
      new THREE.MeshPhysicalMaterial({
        color: 0xf7f2ff,
        metalness: 0,
        roughness: 0.03,
        transparent: true,
        opacity: 0.17,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
        envMapIntensity: 3.2,
        depthWrite: false,
      })
    )
    const rimGeo = keep(new THREE.EdgesGeometry(ringGeo, 28))
    const rimMat = keep(new THREE.LineBasicMaterial({ color: 0xffe4cc, transparent: true, opacity: 0.48 }))
    const sheetGeo = keep(new THREE.ShapeGeometry(roundedRect(outerW, outerH, PANE.round) as THREE.Shape, 6))
    const sheetMat = keep(
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0.02,
        transparent: true,
        opacity: 0.08,
        clearcoat: 1,
        envMapIntensity: 2.3,
        depthWrite: false,
      })
    )
    const photoGeo = keep(new THREE.PlaneGeometry(PANE.w, PANE.h))
    const clampGeo = keep(new THREE.BoxGeometry(0.32, 0.42, PANE.d + 0.2))
    const clampMat = keep(
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 0.04,
        transparent: true,
        opacity: 0.28,
        clearcoat: 1,
        envMapIntensity: 3,
        depthWrite: false,
      })
    )
    const clampEdgeGeo = keep(new THREE.EdgesGeometry(clampGeo))
    const capGeo = keep(new THREE.CylinderGeometry(0.05, 0.05, 0.14, 12))
    const capMat = keep(new THREE.MeshStandardMaterial({ color: 0xd8dce3, metalness: 0.9, roughness: 0.25 }))
    const wireMat = keep(new THREE.LineBasicMaterial({ color: 0xb59ef0, transparent: true, opacity: 0.34 }))
    const crackMat = keep(new THREE.LineBasicMaterial({ color: 0xffd7ba, transparent: true, opacity: 0 }))
    const sideMat = keep(
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0x3b1e5a,
        metalness: 0,
        roughness: 0.04,
        transparent: true,
        opacity: 0.8,
        clearcoat: 1,
        envMapIntensity: 2.5,
      })
    )

    type Frame = {
      group: THREE.Group
      photo: THREE.Mesh
      photoMat: THREE.MeshBasicMaterial
      glass: THREE.Group
      img: number
      sway: number
      lean: number
      prevX: number
      hit?: {
        t0: number
        shards: THREE.Mesh[]
        vel: THREE.Vector3[]
        spin: THREE.Vector3[]
        crack: THREE.LineSegments
        next: number
        faceMat: THREE.MeshBasicMaterial
      }
    }

    // Track which unique portraits have been visibly presented in rotation
    const seen = new Set<number>()
    let allCoveredFired = false

    // Reserve FIFO queue holds images not currently visible on any frame so no image repeats concurrently
    const reserveQueue: number[] = []
    for (let idx = FRAMES.length; idx < n; idx++) reserveQueue.push(idx)

    const takeNextUniqueImg = (currentImg: number) => {
      // Prioritize unseen portraits first so every portrait gets rotated in cleanly
      const unseenPos = reserveQueue.findIndex((idx) => !seen.has(idx))
      if (unseenPos !== -1) {
        const [picked] = reserveQueue.splice(unseenPos, 1)
        reserveQueue.push(currentImg)
        return picked
      }
      const queued = reserveQueue.shift()
      if (queued !== undefined) {
        reserveQueue.push(currentImg)
        return queued
      }
      const active = new Set(frames.map((other) => (other.hit ? other.hit.next : other.img)))
      return (
        Array.from({ length: n }, (_, k) => (currentImg + 1 + k) % n).find((k) => !active.has(k)) ??
        (currentImg + 1) % n
      )
    }

    const frames: Frame[] = FRAMES.map((f, i) => {
      const group = new THREE.Group()
      group.scale.setScalar(f.s)
      const img = i % n
      const photoMat = keep(new THREE.MeshBasicMaterial({ map: textures[img] }))
      const photo = new THREE.Mesh(photoGeo, photoMat)
      photo.userData.frame = i
      group.add(photo)

      const glass = new THREE.Group()
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.renderOrder = 2
      glass.add(ring)
      glass.add(new THREE.LineSegments(rimGeo, rimMat))
      for (const z of [PANE.d / 2 + 0.036, -PANE.d / 2 - 0.036]) {
        const sheet = new THREE.Mesh(sheetGeo, sheetMat)
        sheet.position.z = z
        sheet.renderOrder = 3
        glass.add(sheet)
      }
      group.add(glass)

      const top = outerH / 2
      for (const sx of [-1, 1]) {
        const x = sx * PANE.w * 0.34
        const clamp = new THREE.Mesh(clampGeo, clampMat)
        clamp.position.set(x, top - 0.08, 0)
        clamp.renderOrder = 4
        group.add(clamp)
        const clampEdges = new THREE.LineSegments(clampEdgeGeo, rimMat)
        clampEdges.position.copy(clamp.position)
        group.add(clampEdges)
        const cap = new THREE.Mesh(capGeo, capMat)
        cap.position.set(x, top + 0.2, 0)
        group.add(cap)
        const wg = keep(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(x, top + 0.27, 0),
            new THREE.Vector3(x * 0.55, 40, 0),
          ])
        )
        group.add(new THREE.Line(wg, wireMat))
      }
      scene.add(group)
      const initX = ((((f.x) % SPAN) + SPAN * 1.5) % SPAN) - SPAN / 2
      return { group, photo, photoMat, glass, img, sway: i * 1.7, lean: 0, prevX: initX }
    })

    const strikeFrame = (fr: Frame, u: number, v: number, t0: number) => {
      if (fr.hit || reduce.matches) return
      const cx = u * PANE.w, cy = v * PANE.h
      const polys = shatter(PANE.w, PANE.h, cx, cy, Math.floor(t0 * 1000))
      const next = takeNextUniqueImg(fr.img)
      const faceMat = new THREE.MeshBasicMaterial({ map: textures[fr.img], transparent: true })
      const crackPts: THREE.Vector3[] = []
      const shards = polys.map((poly) => {
        const shape = new THREE.Shape(poly.map(([x, y]) => new THREE.Vector2(x, y)))
        const g = new THREE.ExtrudeGeometry(shape, { depth: PANE.d * 0.85, bevelEnabled: false })
        const uv = g.getAttribute("uv") as THREE.BufferAttribute
        const pos = g.getAttribute("position") as THREE.BufferAttribute
        for (let k = 0; k < uv.count; k++) uv.setXY(k, pos.getX(k) / PANE.w, pos.getY(k) / PANE.h)
        uv.needsUpdate = true
        let mx = 0, my = 0
        for (const [x, y] of poly) {
          mx += x
          my += y
        }
        mx /= poly.length
        my /= poly.length
        g.translate(-mx, -my, -PANE.d * 0.4)
        const m = new THREE.Mesh(g, [faceMat, sideMat])
        m.position.set(mx - PANE.w / 2, my - PANE.h / 2, 0.02)
        m.userData.home = m.position.clone()
        for (let k = 0; k < poly.length; k++) {
          const a = poly[k], b = poly[(k + 1) % poly.length]
          crackPts.push(
            new THREE.Vector3(a[0] - PANE.w / 2, a[1] - PANE.h / 2, 0.1),
            new THREE.Vector3(b[0] - PANE.w / 2, b[1] - PANE.h / 2, 0.1)
          )
        }
        m.visible = false
        fr.group.add(m)
        return m
      })
      const crackGeo = new THREE.BufferGeometry().setFromPoints(crackPts)
      const crack = new THREE.LineSegments(crackGeo, crackMat)
      fr.group.add(crack)
      const r = rng(Math.floor(t0 * 997) + 3)
      const vel = shards.map((m) => {
        const dx = m.position.x - (cx - PANE.w / 2), dy = m.position.y - (cy - PANE.h / 2)
        const dist = Math.hypot(dx, dy) + 0.15
        const push = 1.5 / (0.45 + dist)
        return new THREE.Vector3(
          (dx / dist) * push * (0.6 + r() * 0.7),
          (dy / dist) * push * (0.5 + r() * 0.7) + 0.35,
          (0.5 + r() * 1.4) * (1.6 / (0.6 + dist))
        )
      })
      const spin = shards.map(() => new THREE.Vector3((r() - 0.5) * 5, (r() - 0.5) * 5, (r() - 0.5) * 3.5))
      fr.hit = { t0, shards, vel, spin, crack, next, faceMat }
    }

    let W = 1, H = 1
    let narrow = false
    const ro = new ResizeObserver(([e]) => {
      W = Math.max(1, e.contentRect.width)
      H = Math.max(1, e.contentRect.height)
      gl.setSize(W, H, false)
      camera.aspect = W / H
      camera.fov = camera.aspect < 0.8 ? 58 : 42
      camera.position.z = camera.aspect < 0.8 ? 8.4 : camera.aspect < 1.2 ? 7.4 : 6.1
      narrow = camera.aspect < 1.1
      camera.updateProjectionMatrix()
    })
    ro.observe(canvas)

    const ray = new THREE.Raycaster()
    const ndc = new THREE.Vector2(9, 9)
    const st = {
      pan: 0,
      vel: 0,
      drag: false,
      downX: 0,
      lastX: 0,
      moved: 0,
      touched: false,
      nextAuto: 1.6,
      hover: -1,
      px: 0,
      py: 0,
      cx: 0,
      cy: 0,
    }
    const pick = (x: number, y: number) => {
      ndc.set((x / W) * 2 - 1, -(y / H) * 2 + 1)
      ray.setFromCamera(ndc, camera)
      const hits = ray.intersectObjects(frames.map((f) => f.photo), false)
      return hits.length && hits[0].uv ? { i: hits[0].object.userData.frame as number, u: hits[0].uv.x, v: hits[0].uv.y } : null
    }
    const down = (e: PointerEvent) => {
      st.drag = true
      st.touched = true
      st.downX = st.lastX = e.clientX
      st.moved = 0
      canvas.setPointerCapture(e.pointerId)
    }
    const move = (e: PointerEvent) => {
      const p = pick(e.offsetX, e.offsetY)
      st.hover = p ? p.i : -1
      st.px = (e.offsetX / W) * 2 - 1
      st.py = (e.offsetY / H) * 2 - 1
      canvas.style.cursor = p && !st.drag ? "pointer" : ""
      if (!st.drag) return
      const dx = e.clientX - st.lastX
      st.lastX = e.clientX
      st.moved += Math.abs(dx)
      st.pan -= dx * 0.012
      st.vel = -dx * 0.6
    }
    const up = (e: PointerEvent) => {
      st.drag = false
      if (st.moved < 6) {
        const p = pick(e.offsetX, e.offsetY)
        if (p) strikeFrame(frames[p.i], p.u, p.v, clock)
      }
    }
    const cancel = () => {
      st.drag = false
    }
    canvas.addEventListener("pointerdown", down)
    canvas.addEventListener("pointermove", move)
    canvas.addEventListener("pointerup", up)
    canvas.addEventListener("pointercancel", cancel)

    let clock = 0
    let last = performance.now()
    let raf = 0
    let visible = true
    const frame = () => {
      const now = performance.now()
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      clock += dt
      const still = reduce.matches
      if (!st.drag) {
        st.vel *= Math.exp(-dt * 3)
        st.pan += (still ? 0 : (st.touched ? 0.14 : narrow ? 0.14 : 0.22) * dt) + st.vel * dt * 0.02
      }
      st.cx += ((still ? 0 : st.px) - st.cx) * Math.min(1, dt * 3)
      st.cy += ((still ? 0 : st.py) - st.cy) * Math.min(1, dt * 3)
      camera.position.x = st.cx * 0.35
      camera.position.y = 0.1 - st.cy * 0.2
      camera.lookAt(camera.position.x * 0.5, 0.1, -2)

      let nearest = 0, nearestD = Infinity
      let front = 0, frontD = Infinity
      const tanHalfFov = Math.tan((camera.fov * Math.PI) / 360)
      frames.forEach((fr, i) => {
        const f = FRAMES[i]
        const x = ((((f.x - st.pan * 3) % SPAN) + SPAN * 1.5) % SPAN) - SPAN / 2
        // When a pane wraps past the far fog boundary, swap only if its current portrait was already seen
        if (Math.abs(x - fr.prevX) > SPAN * 0.5 && !fr.hit && reserveQueue.length > 0 && seen.has(fr.img)) {
          fr.img = takeNextUniqueImg(fr.img)
          fr.photoMat.map = textures[fr.img]
        }
        fr.prevX = x

        // Mark portrait covered once its pane is cleanly visible inside the camera frustum
        const halfSpan = (camera.position.z - f.z) * tanHalfFov * camera.aspect * 0.85
        if (!fr.hit && Math.abs(x) <= halfSpan && !seen.has(fr.img)) {
          seen.add(fr.img)
          onCoverageRef.current?.(seen.size, n)
        }
        const sw = still ? 0 : Math.sin(clock * 0.7 + fr.sway)
        fr.lean += ((st.hover === i && !fr.hit ? 1 : 0) - fr.lean) * (still ? 1 : Math.min(1, dt * 6))
        const yaw = (-0.5 + x * -0.04 + sw * 0.06) * (1 - fr.lean * 0.85)
        fr.group.position.set(x, f.y + sw * 0.04, f.z + fr.lean * 0.45)
        fr.group.rotation.set(0.04 * sw, yaw, 0.02 * sw * (1 - fr.lean))
        const d = Math.abs(x) + Math.abs(f.z) * 0.6
        if (d < nearestD && !fr.hit) {
          nearestD = d
          nearest = i
        }
        if (d < frontD) {
          frontD = d
          front = i
        }
        if (fr.hit) {
          const s = strike(still ? 2.6 : clock - fr.hit.t0)
          const h = fr.hit
          crackMat.opacity = Math.max(0.0001, s.crack * (1 - s.burst * 4))
          h.crack.visible = s.burst < 0.25
          if (s.burst > 0) {
            fr.photoMat.map = textures[h.next]
            fr.glass.visible = s.reform > 0
            fr.glass.scale.setScalar(0.96 + 0.04 * s.reform)
            const k = s.burst
            const tt = k * 1.8
            const travel = (1 - Math.exp(-2.6 * tt)) / 2.6
            const fade = 1 - Math.max(0, (k - 0.62) / 0.38)
            h.shards.forEach((m, j) => {
              m.visible = k < 1
              const home = m.userData.home as THREE.Vector3
              m.position.set(
                home.x + h.vel[j].x * travel * 2.2,
                home.y + h.vel[j].y * travel * 2.2 - 1.5 * tt * tt * 0.5,
                home.z + h.vel[j].z * travel * 2.4
              )
              m.rotation.set(h.spin[j].x * travel * 2, h.spin[j].y * travel * 2, h.spin[j].z * travel * 2)
              ;(m.material as THREE.Material[])[0].opacity = fade
            })
            sideMat.opacity = 0.8 * fade
          } else {
            h.shards.forEach((m) => (m.visible = false))
          }
          if (s.done) {
            h.shards.forEach((m) => {
              fr.group.remove(m)
              m.geometry.dispose()
            })
            fr.group.remove(h.crack)
            h.crack.geometry.dispose()
            h.faceMat.dispose()
            fr.img = h.next
            fr.hit = undefined
            fr.glass.visible = true
            fr.glass.scale.setScalar(1)
            sideMat.opacity = 0.8
          }
        }
      })

      if (autoPlay && !st.touched && !still && clock > st.nextAuto && seen.size < n) {
        st.nextAuto = clock + 4.0
        strikeFrame(frames[nearest], 0.46, 0.58, clock)
      }
      if (!allCoveredFired && seen.size >= n && !frames.some((other) => Boolean(other.hit))) {
        allCoveredFired = true
        onAllCoveredRef.current?.()
      }
      if (countRef.current) {
        countRef.current.textContent = String(front + 1).padStart(2, "0") + " / " + String(FRAMES.length).padStart(2, "0")
      }
      gl.render(scene, camera)
      raf = visible ? requestAnimationFrame(frame) : 0
    }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible && !raf) {
        last = performance.now()
        raf = requestAnimationFrame(frame)
      }
    })
    io.observe(canvas)
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
      canvas.removeEventListener("pointerdown", down)
      canvas.removeEventListener("pointermove", move)
      canvas.removeEventListener("pointerup", up)
      canvas.removeEventListener("pointercancel", cancel)
      frames.forEach((f) => {
        f.hit?.shards.forEach((m) => {
          f.group.remove(m)
          m.geometry.dispose()
        })
        if (f.hit?.crack) {
          f.group.remove(f.hit.crack)
          f.hit.crack.geometry.dispose()
        }
        f.hit?.faceMat.dispose()
      })
      disposables.forEach((d) => d.dispose())
      envTarget.dispose()
      pmrem.dispose()
      textures.forEach((t) => t.dispose())
      gl.dispose()
    }
  }, [list, autoPlay])

  return (
    <div ref={rootRef} className={"hgg-root" + (className ? " " + className : "")} style={{ minHeight: height, height, ...style }}>
      <style>{CSS}</style>
      <canvas ref={canvasRef} className="hgg-canvas" aria-hidden="true" />
      {eyebrow || title || caption ? (
        <div className="hgg-copy">
          <div className="hgg-text">
            {eyebrow ? <span className="hgg-eyebrow">{eyebrow}</span> : null}
            {title ? <h2 className="hgg-title">{title}</h2> : null}
            {caption ? <p className="hgg-caption">{caption}</p> : null}
          </div>
          <span className="hgg-count" ref={countRef}>01 / 06</span>
        </div>
      ) : null}
      <ul className="hgg-sr">
        {list.map((im, i) => (
          <li key={i}>{im.alt ?? "Image " + (i + 1)}</li>
        ))}
      </ul>
    </div>
  )
}
