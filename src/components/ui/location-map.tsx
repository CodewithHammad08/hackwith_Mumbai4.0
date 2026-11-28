"use client"

import { useState, useRef } from "react"
import type { MouseEvent } from "react"
import { Map as MapIcon, ExternalLink } from "lucide-react"

export interface LocationMapProps {
  location?: string
  coordinates?: string
  eyebrow?: string
  mapsUrl?: string
  className?: string
  onToggle?: (expanded: boolean) => void
}

const BUILDINGS = [
  { x: "18%", y: "14%", w: "14%", h: "16%", tone: "rgba(255,255,255,0.05)" },
  { x: "37%", y: "10%", w: "18%", h: "20%", tone: "rgba(255,255,255,0.07)" },
  { x: "66%", y: "20%", w: "15%", h: "22%", tone: "rgba(255,255,255,0.06)" },
  { x: "20%", y: "42%", w: "16%", h: "18%", tone: "rgba(255,255,255,0.055)" },
  { x: "60%", y: "48%", w: "20%", h: "16%", tone: "rgba(255,255,255,0.05)" },
  { x: "42%", y: "66%", w: "14%", h: "14%", tone: "rgba(255,255,255,0.045)" },
]

export function LocationMap({
  location = "BVUDET, Navi Mumbai",
  coordinates = "19.0305° N, 73.0590° E",
  eyebrow = "CURRENT LOCATION",
  mapsUrl = "https://maps.app.goo.gl/3Fkd49yz2BPXfqBw7",
  className = "",
  onToggle,
}: LocationMapProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const toggleExpand = () => {
    setIsExpanded((prev) => {
      const next = !prev
      onToggle?.(next)
      return next
    })
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({
      rotateX: Number((-y * 12).toFixed(2)),
      rotateY: Number((x * 14).toFixed(2)),
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Subtle Eyebrow Label */}
      <span className="font-inter text-[11px] font-semibold tracking-[0.26em] uppercase text-white/55 mb-3.5">
        {eyebrow}
      </span>

      {/* Interactive 3D Map Card */}
      <div
        style={{ perspective: "950px" }}
        className="flex items-center justify-center"
      >
        <div
          ref={cardRef}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          aria-label={`${location} interactive location card. Click to ${isExpanded ? "collapse" : "expand"}.`}
          onClick={toggleExpand}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              toggleExpand()
            }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${
              isHovered && !isExpanded ? 1.025 : 1
            })`,
            transitionProperty: "width, height, transform, border-color, box-shadow",
            transitionDuration: "520ms, 520ms, 180ms, 280ms, 280ms",
            transitionTimingFunction:
              "cubic-bezier(0.22, 1, 0.36, 1), cubic-bezier(0.22, 1, 0.36, 1), ease-out, ease, ease",
          }}
          className={`relative overflow-hidden rounded-2xl border bg-[#141715]/95 backdrop-blur-md cursor-pointer will-change-transform ${
            isExpanded
              ? "w-[330px] sm:w-[376px] h-[304px] border-white/20 shadow-[0_28px_70px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.06)]"
              : "w-[252px] sm:w-[272px] h-[146px] border-white/15 hover:border-emerald-400/40 shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
          }`}
        >
          {/* Ambient Emerald Map Glow */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: isExpanded ? 1 : 0.35,
              background:
                "radial-gradient(circle at 50% 45%, rgba(52,211,153,0.14) 0%, rgba(16,185,129,0.04) 38%, transparent 72%)",
            }}
          />

          {/* Procedural Street Grid & City Blocks (Expanded State) */}
          <div
            className={`pointer-events-none absolute inset-0 transition-all duration-500 ${
              isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Primary Horizontal & Vertical Roads */}
            <div className="absolute inset-x-0 top-[24%] h-[2px] bg-white/[0.11]" />
            <div className="absolute inset-x-0 top-[52%] h-[2.5px] bg-white/[0.14]" />
            <div className="absolute inset-x-0 top-[76%] h-[2px] bg-white/[0.09]" />
            <div className="absolute inset-y-0 left-[26%] w-[2px] bg-white/[0.10]" />
            <div className="absolute inset-y-0 left-[54%] w-[2.5px] bg-white/[0.14]" />
            <div className="absolute inset-y-0 left-[80%] w-[2px] bg-white/[0.09]" />

            {/* Secondary Street Grid */}
            <div className="absolute inset-x-0 top-[12%] h-px bg-white/[0.04]" />
            <div className="absolute inset-x-0 top-[38%] h-px bg-white/[0.04]" />
            <div className="absolute inset-x-0 top-[64%] h-px bg-white/[0.04]" />
            <div className="absolute inset-y-0 left-[14%] w-px bg-white/[0.04]" />
            <div className="absolute inset-y-0 left-[40%] w-px bg-white/[0.04]" />
            <div className="absolute inset-y-0 left-[68%] w-px bg-white/[0.04]" />

            {/* Architectural Footprint Blocks */}
            {BUILDINGS.map((b, idx) => (
              <div
                key={idx}
                className="absolute rounded-md border border-white/[0.06] transition-colors duration-300"
                style={{
                  left: b.x,
                  top: b.y,
                  width: b.w,
                  height: b.h,
                  backgroundColor: b.tone,
                }}
              />
            ))}
          </div>

          {/* Left Center Marker Tick (seen in reference transition) */}
          <div
            className={`pointer-events-none absolute left-0 top-[47%] h-[2px] w-3.5 bg-white/30 transition-opacity duration-300 ${
              isExpanded ? "opacity-80" : "opacity-0"
            }`}
          />

          {/* Top Bar: Map Icon (collapsed) + LIVE Indicator */}
          <div className="relative z-20 flex items-center justify-between px-4 pt-4">
            <div
              className={`flex items-center justify-center transition-all duration-300 ${
                isExpanded
                  ? "opacity-0 -translate-x-2 pointer-events-none"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <MapIcon className="w-4 h-4 text-emerald-400" strokeWidth={2.2} />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 border border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-inter text-[10px] font-semibold tracking-[0.14em] text-zinc-200 uppercase">
                LIVE
              </span>
            </div>
          </div>

          {/* Center Animated Map Pin (Expanded State) */}
          <div
            className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center pb-6 transition-all duration-500 ${
              isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute h-10 w-10 rounded-full bg-emerald-400/25 animate-ping" />
              <span className="absolute h-16 w-16 rounded-full bg-emerald-400/10 blur-md" />
              <svg
                width="30"
                height="36"
                viewBox="0 0 24 30"
                fill="none"
                className="relative drop-shadow-[0_6px_14px_rgba(16,185,129,0.55)] transition-transform duration-300"
                style={{
                  transform: isHovered ? "translateY(-3px) scale(1.06)" : "translateY(0) scale(1)",
                }}
              >
                <path
                  d="M12 1C6.2 1 1.5 5.7 1.5 11.5C1.5 19.2 12 29 12 29C12 29 22.5 19.2 22.5 11.5C22.5 5.7 17.8 1 12 1Z"
                  fill="#34D399"
                />
                <circle cx="12" cy="11.5" r="3.6" fill="#0F1412" />
              </svg>
            </div>
          </div>

          {/* Bottom Location Text & Coordinates */}
          <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 pt-8 bg-gradient-to-t from-[#101311] via-[#101311]/85 to-transparent flex items-end justify-between gap-2">
            <div className="min-w-0 text-left">
              <p className="font-inter text-sm sm:text-[15px] font-semibold text-white tracking-tight truncate">
                {location}
              </p>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? "max-h-6 opacity-100 mt-1" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="font-mono text-[11px] text-zinc-400 tracking-wide">
                  {coordinates}
                </p>
              </div>
            </div>

            {isExpanded && mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="Open venue in Google Maps"
                className="inline-flex items-center gap-1 rounded-md bg-white/10 hover:bg-emerald-400 hover:text-black text-zinc-200 px-2 py-1 text-[10px] font-inter font-semibold uppercase tracking-wider border border-white/15 transition-colors shrink-0"
              >
                <span>Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Bottom Accent Underline on Collapsed Hover */}
          <div
            className={`pointer-events-none absolute inset-x-4 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/75 to-transparent transition-opacity duration-300 ${
              !isExpanded && isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Bottom Interaction Hint */}
      <span className="font-inter text-[11px] font-medium tracking-wide text-white/50 mt-3 transition-opacity">
        {isExpanded ? "Click to minimize" : "Click to expand"}
      </span>
    </div>
  )
}

export default LocationMap
