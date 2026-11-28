import { useState, useRef, useEffect } from "react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";
import { Sparkles, ArrowRight, Trophy, Radio } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const previewPills = [
  { label: "AI & ML", sub: "Intelligent Systems", accent: "#05d9e8" },
  { label: "WEB / APP DEV", sub: "Modern Full-Stack", accent: "#ffd23f" },
  { label: "BLOCKCHAIN", sub: "Web3 & Smart Contracts", accent: "#ff3d8b" },
  { label: "CLOUD & CYBER", sub: "Infra & Security", accent: "#6a3df0" },
];

// ─── Main Domains Section with 3D GTA Car Wipe Reveal ────────────────────────
const Domains = ({ onOpenRegister }) => {
  const [activeFilter, setActiveFilter] = useState("ALL DOMAINS");

  const sectionRef = useRef(null);
  const bgWrapRef = useRef(null);
  const bgImgRef = useRef(null);
  const curtainRef = useRef(null);
  const skylineRef = useRef(null);
  const palmsRef = useRef(null);
  const stripeRef = useRef(null);
  const speedLinesRef = useRef(null);
  const carRef = useRef(null);
  const carBodyRef = useRef(null);
  const headlightRef = useRef(null);
  const brakeLightRef = useRef(null);
  const nitroRef = useRef(null);
  const wheelFrontRef = useRef(null);
  const wheelRearRef = useRef(null);
  const headlineRef = useRef(null);
  const pillsRef = useRef(null);
  const hudRef = useRef(null);
  const overlayTextRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const curtain = curtainRef.current;
      const stripe = stripeRef.current;
      const car = carRef.current;
      const carBody = carBodyRef.current;
      if (!section || !curtain || !car || !carBody) return;

      // Initial 3D rig states before #domains enters viewport
      gsap.set(car, {
        xPercent: -50,
        x: "100vw",
        y: 0,
        transformPerspective: 1200,
      });
      gsap.set(carBody, {
        transformPerspective: 1200,
        rotateY: -14,
        rotateZ: -1.6,
        scale: 0.9,
        transformOrigin: "50% 75%",
      });
      gsap.set(curtain, { xPercent: 0, autoAlpha: 1, transformPerspective: 1400 });
      if (stripe) gsap.set(stripe, { backgroundPositionX: "0px" });
      if (nitroRef.current) gsap.set(nitroRef.current, { opacity: 0, scaleX: 0.2 });
      if (headlightRef.current) gsap.set(headlightRef.current, { opacity: 0.45 });
      if (brakeLightRef.current) gsap.set(brakeLightRef.current, { opacity: 0.85, scale: 1.15 });
      if (speedLinesRef.current) gsap.set(speedLinesRef.current, { opacity: 0 });

      // 1. Entrance phase: Car drifts/brakes in 3D from right onto Vice Blvd,
      //    skyline & palms glide in parallax, GTA HUD + 3D extruded title lock in.
      const tlEnter = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 95%",
          end: "top top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      tlEnter.to(
        car,
        { xPercent: -50, x: "0vw", ease: "power3.out", duration: 1 },
        0
      );

      // Braking suspension & 3D yaw settle as car parks
      tlEnter.to(
        carBody,
        {
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          ease: "power2.out",
          duration: 1,
        },
        0
      );

      // Wheel counter-clockwise spin while driving right -> left
      tlEnter.to(
        [wheelFrontRef.current, wheelRearRef.current],
        { rotation: -540, ease: "power2.out", duration: 1 },
        0
      );

      // Far skyline & closer palm trees move at distinct speeds for true 3D depth
      if (skylineRef.current) {
        tlEnter.fromTo(
          skylineRef.current,
          { xPercent: 4 },
          { xPercent: 0, ease: "none", duration: 1 },
          0
        );
      }
      if (palmsRef.current) {
        tlEnter.fromTo(
          palmsRef.current,
          { xPercent: 10 },
          { xPercent: 0, ease: "none", duration: 1 },
          0
        );
      }

      if (stripe) {
        tlEnter.to(
          stripe,
          { backgroundPositionX: "-900px", ease: "power2.out", duration: 1 },
          0
        );
      }

      tlEnter.fromTo(
        headlineRef.current,
        { y: -45, rotateX: 24, opacity: 0, transformPerspective: 900 },
        { y: 0, rotateX: 0, opacity: 1, ease: "power3.out", duration: 0.75 },
        0.2
      );

      tlEnter.fromTo(
        hudRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out", duration: 0.6 },
        0.25
      );

      if (pillsRef.current) {
        tlEnter.fromTo(
          pillsRef.current.children,
          { y: 24, rotateX: -25, opacity: 0, transformPerspective: 800 },
          {
            y: 0,
            rotateX: 6,
            opacity: 1,
            stagger: 0.08,
            ease: "back.out(1.4)",
            duration: 0.55,
          },
          0.35
        );
      }

      // 2. Pinned GTA Cutscene Launch & Horizontal Curtain Wipe:
      //    Headlights flare, car squats back with blue/violet nitro boost,
      //    and tears left across Vice Blvd — wiping open #domains right behind it.
      const tlWipe = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Phase A (0–0.24): Headlight high-beam flare, brake lights off, rear squat prep
      tlWipe.to(
        car,
        {
          xPercent: -50,
          x: "1.5vw",
          ease: "power1.inOut",
          duration: 0.24,
          immediateRender: false,
        },
        0
      );

      tlWipe.to(
        carBody,
        {
          rotateZ: 1.4,
          rotateY: 6,
          scale: 1.02,
          ease: "power2.inOut",
          duration: 0.24,
          immediateRender: false,
        },
        0
      );

      tlWipe.to(
        headlightRef.current,
        { opacity: 0.95, scaleX: 1.18, duration: 0.2, immediateRender: false },
        0.02
      );
      tlWipe.to(
        brakeLightRef.current,
        { opacity: 0.15, duration: 0.15, immediateRender: false },
        0.05
      );
      tlWipe.fromTo(
        overlayTextRef.current,
        { opacity: 0, scale: 0.88, y: 10 },
        { opacity: 1, scale: 1, y: 0, ease: "power2.out", duration: 0.18 },
        0.03
      );

      // Phase B (0.24–1.0): Full-throttle Nitro Launch & 3D Horizontal Wipe
      tlWipe.to(
        nitroRef.current,
        { opacity: 1, scaleX: 1.35, duration: 0.18, immediateRender: false },
        0.22
      );

      tlWipe.to(
        speedLinesRef.current,
        { opacity: 0.85, duration: 0.2, immediateRender: false },
        0.24
      );

      tlWipe.to(
        car,
        {
          xPercent: -50,
          x: "-150vw",
          ease: "power2.in",
          duration: 0.76,
          immediateRender: false,
        },
        0.24
      );

      tlWipe.to(
        carBody,
        {
          rotateZ: 2.6,
          rotateY: 14,
          scale: 1.08,
          ease: "power2.in",
          duration: 0.76,
          immediateRender: false,
        },
        0.24
      );

      tlWipe.to(
        [wheelFrontRef.current, wheelRearRef.current],
        {
          rotation: -1980,
          ease: "power2.in",
          duration: 0.76,
          immediateRender: false,
        },
        0.24
      );

      // Parallax skyline + palms accelerate rightward relative to forward car speed
      if (skylineRef.current) {
        tlWipe.to(
          skylineRef.current,
          { xPercent: -10, ease: "none", duration: 0.76, immediateRender: false },
          0.24
        );
      }
      if (palmsRef.current) {
        tlWipe.to(
          palmsRef.current,
          { xPercent: -24, ease: "none", duration: 0.76, immediateRender: false },
          0.24
        );
      }

      if (stripe) {
        tlWipe.to(
          stripe,
          {
            backgroundPositionX: "-3400px",
            ease: "power2.in",
            duration: 0.76,
            immediateRender: false,
          },
          0.24
        );
      }

      // Curtain wipes cleanly off-screen left with slight 3D tilt edge
      tlWipe.to(
        curtain,
        {
          xPercent: -104,
          ease: "power2.inOut",
          duration: 0.76,
        },
        0.24
      );

      tlWipe.to(
        overlayTextRef.current,
        { opacity: 0, y: -8, duration: 0.14, immediateRender: false },
        0.24
      );

      // 3. Scrollable Sunset Muscle Car Backdrop across the entire #domains section:
      //    Waits until tlWipe unpins, then translates smoothly down the section
      //    so the full sunset car backdrop stays visible from header to bottom CTA.
      const bgWrap = bgWrapRef.current;
      const bgImg = bgImgRef.current;
      if (bgWrap) {
        gsap.set(bgWrap, { y: 0 });
        if (bgImg) gsap.set(bgImg, { yPercent: -4, scale: 1.08 });

        const tlBgScroll = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: () =>
              tlWipe.scrollTrigger ? tlWipe.scrollTrigger.end : "top top",
            end: () => {
              const wipeEnd = tlWipe.scrollTrigger
                ? tlWipe.scrollTrigger.end
                : 0;
              const travel = Math.max(1, section.offsetHeight - window.innerHeight);
              return wipeEnd + travel;
            },
            scrub: true,
            refreshPriority: -1,
            invalidateOnRefresh: true,
          },
        });

        tlBgScroll.to(
          bgWrap,
          {
            y: () => Math.max(0, section.offsetHeight - bgWrap.offsetHeight),
            ease: "none",
            immediateRender: false,
          },
          0
        );

        if (bgImg) {
          tlBgScroll.to(
            bgImg,
            {
              yPercent: 4,
              ease: "none",
              immediateRender: false,
            },
            0
          );
        }
      }
    },
    { scope: sectionRef }
  );

  // Recalculate downstream ScrollTriggers cleanly whenever domain filter changes height
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(raf);
  }, [activeFilter]);

  const filterTabs = [
    "ALL DOMAINS",
    "AI & ML",
    "WEB DEVELOPMENT",
    "APP DEVELOPMENT",
    "CLOUD & CYBER",
    "BLOCKCHAIN",
    "OPEN INNOVATION",
  ];

  const filteredDomains =
    activeFilter === "ALL DOMAINS"
      ? HACKATHON_DETAILS.domains || []
      : (HACKATHON_DETAILS.domains || []).filter(
          (d) =>
            (d.category && d.category.toUpperCase().includes(activeFilter)) ||
            (Array.isArray(d.tags) &&
              d.tags.some((tag) => tag.toUpperCase().includes(activeFilter)))
        );

  return (
    <section
      id="domains"
      ref={sectionRef}
      className="relative py-20 md:py-24 px-6 md:px-16 z-30 overflow-hidden bg-[#0b0914]"
    >
      {/* Anchor for backward compatibility */}
      <span id="tracks" className="absolute -top-20" />

      {/* ── Scrollable GTA Los Santos Sunset Muscle Car Backdrop (z-0, behind CarReveal z-40) ── */}
      <div
        ref={bgWrapRef}
        className="absolute top-0 left-0 right-0 h-[110dvh] min-h-[680px] z-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          ref={bgImgRef}
          src="/images/domains-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-[50%_58%] will-change-transform"
          draggable="false"
        />
        {/* Subtle golden-sunset vignette + top/bottom edge blends without blurring the car */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,9,20,0.82) 0%, rgba(11,9,20,0.34) 24%, rgba(11,9,20,0.42) 72%, rgba(11,9,20,0.9) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 54% 48%, rgba(255,170,70,0.08) 0%, rgba(11,9,20,0.52) 82%)",
          }}
        />
      </div>

      {/* ── GTA Vice City 3D Car Reveal Wipe Curtain ── */}
      <div
        ref={curtainRef}
        className="absolute top-0 left-0 w-full h-dvh z-40 overflow-hidden bg-[#080512] flex flex-col items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        {/* 1. Vice City Sunset / Night Sky */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #070511 0%, #140a28 38%, #341145 64%, #7a1855 78%, #160c24 100%)",
            }}
          />

          {/* Retro GTA Synthwave Sun */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-[25%] w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full opacity-80"
            style={{
              background:
                "linear-gradient(180deg, #ffd23f 0%, #ff6b35 45%, #ff2a85 88%, transparent 100%)",
              boxShadow:
                "0 0 90px rgba(255, 61, 139, 0.55), 0 0 160px rgba(255, 138, 61, 0.35)",
              maskImage:
                "repeating-linear-gradient(to bottom, #000 0px, #000 14px, transparent 14px, transparent 19px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to bottom, #000 0px, #000 14px, transparent 14px, transparent 19px)",
            }}
          />

          {/* Atmospheric ambient haze */}
          <div className="absolute bottom-[23%] left-0 right-0 h-36 bg-gradient-to-t from-[#ff3d8b]/30 via-[#6a3df0]/15 to-transparent" />
        </div>

        {/* 2. Far Parallax City Skyline (Mumbai / Vice City Towers) */}
        <div
          ref={skylineRef}
          className="absolute bottom-[23%] -left-[8%] -right-[8%] h-48 sm:h-56 z-5 opacity-85"
        >
          <svg
            viewBox="0 0 1600 220"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1b1035" />
                <stop offset="100%" stopColor="#090614" />
              </linearGradient>
            </defs>
            {/* Skyscrapers Silhouette */}
            <path
              d="M0,220 L0,145 L45,145 L45,95 L95,95 L95,130 L140,130 L140,65 L185,65 L185,115 L235,115 L235,45 L285,45 L285,120 L330,120 L330,85 L395,85 L395,140 L450,140 L450,55 L505,55 L505,110 L560,110 L560,75 L615,75 L615,135 L680,135 L680,40 L740,40 L740,105 L790,105 L790,70 L860,70 L860,125 L920,125 L920,50 L980,50 L980,115 L1045,115 L1045,82 L1110,82 L1110,142 L1175,142 L1175,48 L1235,48 L1235,110 L1305,110 L1305,65 L1365,65 L1365,128 L1430,128 L1430,85 L1505,85 L1505,135 L1600,135 L1600,220 Z"
              fill="url(#skylineGrad)"
            />
            {/* Glowing Neon Skyscraper Rooftop Accents */}
            <rect x="235" y="45" width="50" height="3" fill="#05d9e8" opacity="0.9" />
            <rect x="680" y="40" width="60" height="3" fill="#ff3d8b" opacity="0.9" />
            <rect x="920" y="50" width="60" height="3" fill="#ffd23f" opacity="0.85" />
            <rect x="1175" y="48" width="60" height="3" fill="#05d9e8" opacity="0.9" />
            <rect x="140" y="65" width="45" height="2.5" fill="#ff3d8b" opacity="0.75" />
            {/* Tiny Lit Tower Windows */}
            <g fill="#05d9e8" opacity="0.55">
              <rect x="250" y="62" width="4" height="6" />
              <rect x="264" y="62" width="4" height="6" />
              <rect x="250" y="78" width="4" height="6" />
              <rect x="695" y="58" width="5" height="7" />
              <rect x="712" y="58" width="5" height="7" />
              <rect x="712" y="76" width="5" height="7" />
              <rect x="1190" y="66" width="5" height="7" />
              <rect x="1208" y="84" width="5" height="7" />
            </g>
            <g fill="#ffd23f" opacity="0.55">
              <rect x="466" y="75" width="4" height="6" />
              <rect x="480" y="92" width="4" height="6" />
              <rect x="938" y="72" width="5" height="7" />
              <rect x="954" y="90" width="5" height="7" />
            </g>
          </svg>
        </div>

        {/* 3. Midground Parallax Palm Trees */}
        <div
          ref={palmsRef}
          className="absolute bottom-[22%] -left-[12%] -right-[12%] h-44 z-10 opacity-90"
        >
          <svg
            viewBox="0 0 1600 180"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            {[110, 360, 640, 1020, 1340, 1510].map((cx, i) => (
              <g key={i} transform={`translate(${cx}, 180)`} fill="#0b0716">
                {/* Curved Trunk */}
                <path d="M-4,0 Q6,-65 2,-130 L8,-130 Q14,-65 4,0 Z" />
                {/* Palm Fronds */}
                <path d="M5,-130 Q-32,-148 -58,-122 Q-25,-132 5,-124 Z" />
                <path d="M5,-130 Q-18,-168 -48,-160 Q-18,-150 5,-126 Z" />
                <path d="M5,-130 Q38,-166 66,-142 Q32,-146 5,-126 Z" />
                <path d="M5,-130 Q46,-142 64,-112 Q32,-124 5,-124 Z" />
                <path d="M5,-130 Q6,-176 -8,-172 Q2,-152 5,-126 Z" />
              </g>
            ))}
          </svg>
        </div>

        {/* 4. True CSS 3D Perspective Boulevard */}
        <div
          className="absolute bottom-0 left-0 right-0 z-15 overflow-hidden"
          style={{ height: "25%", perspective: "700px" }}
        >
          {/* Neon Horizon Guardrail */}
          <div className="relative z-20 h-[4px] w-full bg-gradient-to-r from-[#05d9e8] via-[#ff3d8b] to-[#ffd23f] shadow-[0_0_20px_#ff3d8b]" />

          {/* Tilted 3D Asphalt Plane */}
          <div
            className="w-full h-[180%] origin-top"
            style={{
              transform: "rotateX(52deg) scaleX(1.25)",
              background:
                "linear-gradient(180deg, #161126 0%, #0d0b16 35%, #07060d 100%)",
              boxShadow: "inset 0 24px 60px rgba(255, 61, 139, 0.25)",
            }}
          >
            {/* Subtle 3D Perspective Asphalt Grid Overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(5,217,232,0.35) 1px, transparent 1px), linear-gradient(rgba(255,61,139,0.25) 1px, transparent 1px)",
                backgroundSize: "90px 28px",
              }}
            />

            {/* Cyan Left/Right Curb Reflections */}
            <div className="absolute top-[10%] left-0 right-0 h-[3px] bg-[#05d9e8]/55 blur-[1px]" />

            {/* Scrolling Center Highway Yellow Dashes */}
            <div
              ref={stripeRef}
              className="absolute top-[34%] left-0 right-0 h-[8px]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #ffd23f 0px, #ffd23f 85px, transparent 85px, transparent 190px)",
                backgroundSize: "190px 8px",
                filter: "drop-shadow(0 0 10px rgba(255,210,63,0.75))",
              }}
            />
          </div>
        </div>

        {/* 5. GTA Tactical HUD Chrome (Top-Left Radar + Top-Right Wanted/Cash) */}
        <div
          ref={hudRef}
          className="absolute inset-x-4 sm:inset-x-8 top-16 sm:top-20 z-35 flex items-start justify-between pointer-events-none opacity-0"
        >
          {/* Mini Radar (hidden on narrow phones to keep view spacious) */}
          <div className="hidden md:flex flex-col gap-1.5 bg-[#090812]/85 border-2 border-white/25 rounded-md p-2 shadow-[4px_4px_0px_#000] backdrop-blur-md">
            <div className="relative w-28 h-20 bg-[#121626] border border-[#05d9e8]/40 rounded-sm overflow-hidden">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #05d9e8 1px, transparent 1px), linear-gradient(#05d9e8 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                }}
              />
              {/* GPS Route Line */}
              <svg viewBox="0 0 112 80" className="absolute inset-0 w-full h-full">
                <polyline
                  points="10,65 42,65 55,38 96,24"
                  fill="none"
                  stroke="#ff3d8b"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="96" cy="24" r="4" fill="#ffd23f" />
                <polygon points="46,50 56,42 54,56" fill="#05d9e8" />
              </svg>
              <span className="absolute bottom-1 left-1.5 text-[8px] font-mono font-bold text-[#05d9e8] tracking-widest">
                N // SECTOR 04
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold text-gray-300 tracking-wider uppercase text-center">
              VICE BLVD • ARENA
            </span>
          </div>

          {/* Right HUD: Wanted Stars + Cash + Vice FM */}
          <div className="ml-auto flex flex-col items-end gap-1.5 text-right">
            <div className="flex items-center gap-1 bg-black/70 border border-white/20 px-2.5 py-1 rounded backdrop-blur-md">
              {[...Array(5)].map((_, idx) => (
                <span
                  key={idx}
                  className="text-sm sm:text-base text-[#ffd23f] drop-shadow-[0_0_8px_rgba(255,210,63,0.9)]"
                >
                  ★
                </span>
              ))}
            </div>
            <div className="font-anton text-xl sm:text-2xl tracking-wider text-[#4ade80] drop-shadow-[2px_2px_0px_#000] leading-none">
              ₹1,50,000
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#151226]/85 border border-[#ff3d8b]/50 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#ffb0c4]">
              <Radio className="w-3 h-3 text-[#ff3d8b] animate-pulse" />
              <span>HWI 4.0 FM • OVERDRIVE</span>
            </div>
          </div>
        </div>

        {/* 6. 3D Extruded Headline & Elevated Domain Preview Cards (Zero Overlap with Car) */}
        <div
          ref={headlineRef}
          className="absolute top-[6%] sm:top-[7%] left-0 right-0 z-30 flex flex-col items-center text-center px-4 opacity-0"
          style={{ perspective: "900px" }}
        >
          <div className="inline-block mb-2">
            <span className="tag !rotate-0 mb-0 text-[11px] md:text-xs px-3.5 py-1 uppercase font-bold inline-flex items-center gap-2 bg-[#ffd23f] text-black shadow-[4px_4px_0px_#000]">
              <Sparkles className="w-3.5 h-3.5 text-[#e63946]" />
              STAGE 02 // UNLOCKING THE ARENA
            </span>
          </div>

          <h2
            className="d text-5xl sm:text-6xl md:text-8xl tracking-tight text-white uppercase leading-[0.9]"
            style={{
              textShadow:
                "3px 3px 0px #ff3d8b, 6px 6px 0px #6a3df0, 9px 9px 0px #000",
            }}
          >
            THE{" "}
            <span
              className="g"
              style={{
                filter: "drop-shadow(4px 4px 0px #000)",
              }}
            >
              DOMAINS
            </span>
          </h2>

          <p className="font-inter text-[#ffd23f] text-[11px] sm:text-sm md:text-base font-extrabold uppercase tracking-[0.2em] mt-2 drop-shadow-[2px_2px_0px_#000]">
            SHIFT INTO OVERDRIVE • PICK YOUR BATTLEFIELD
          </p>

          {/* 3D Tilted GTA Weapon-Wheel Style Domain Cards */}
          <div
            ref={pillsRef}
            className="hidden sm:grid grid-cols-4 gap-3 mt-4 max-w-3xl w-full"
            style={{ perspective: "800px" }}
          >
            {previewPills.map((item) => (
              <div
                key={item.label}
                className="bg-[#120f21]/90 backdrop-blur-md border-2 border-black px-3 py-2 rounded-md text-left relative overflow-hidden"
                style={{
                  boxShadow: `4px 4px 0px #000, 0 0 18px ${item.accent}44`,
                  borderTop: `3px solid ${item.accent}`,
                }}
              >
                <span
                  className="block font-round-bold text-xs font-black tracking-wider"
                  style={{ color: item.accent }}
                >
                  {item.label}
                </span>
                <span className="block font-inter text-[10px] text-gray-300 mt-0.5">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* High-Speed Action Streaks Layer (visible during Nitro Launch) */}
        <div
          ref={speedLinesRef}
          className="absolute inset-0 z-25 pointer-events-none opacity-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 28px, rgba(5,217,232,0.12) 28px, rgba(5,217,232,0.12) 30px, transparent 30px, transparent 58px, rgba(255,61,139,0.14) 58px, rgba(255,61,139,0.14) 60px)",
          }}
        />

        {/* Scroll Mouse Prompt */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
          <div className="flex flex-col items-center gap-1 opacity-60">
            <div className="w-5 h-8 rounded-full border-2 border-white/40 flex justify-center pt-1">
              <div className="w-1 h-2 rounded-full bg-[#ffd23f] animate-bounce" />
            </div>
          </div>
        </div>

        {/* Glowing Neon Plasma Wipe Edge */}
        <div className="absolute top-0 right-0 bottom-0 w-2 bg-gradient-to-b from-[#05d9e8] via-[#ff3d8b] to-[#ffd23f] shadow-[0_0_30px_#ff3d8b,0_0_60px_#05d9e8] z-50" />
      </div>

      {/* ── 3D Supercar Rig Layer (Drives across Vice Blvd above the curtain) ── */}
      <div
        className="absolute top-0 left-0 w-full h-dvh z-50 pointer-events-none overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        <div
          ref={carRef}
          className="absolute select-none"
          style={{
            bottom: "16%",
            left: "50%",
            width: "clamp(320px, 56vw, 760px)",
          }}
        >
          {/* Ground Contact Shadow + Dynamic Neon Underglow Puddle */}
          <div
            className="absolute bottom-[4%] left-[8%] right-[6%] h-7 rounded-full blur-md"
            style={{ background: "rgba(0,0,0,0.88)" }}
          />
          <div
            className="absolute bottom-[-4px] left-[12%] right-[10%] h-7 rounded-full blur-xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,217,232,0.75) 0%, rgba(255,61,139,0.75) 55%, rgba(106,61,240,0.8) 100%)",
            }}
          />

          {/* 3D Tilt/Suspension Rig */}
          <div
            ref={carBodyRef}
            className="relative w-full"
            style={{
              transformStyle: "preserve-3d",
              filter:
                "drop-shadow(0 18px 40px rgba(0,0,0,0.9)) drop-shadow(0 0 22px rgba(5,217,232,0.28))",
            }}
          >
            {/* Xenon Headlight Beam Cone (projects left ahead of nose) */}
            <div
              ref={headlightRef}
              className="absolute pointer-events-none origin-right"
              style={{
                left: "-42%",
                top: "30%",
                width: "50%",
                height: "48%",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(5,217,232,0.14) 55%, rgba(224,250,255,0.65) 100%)",
                clipPath: "polygon(100% 34%, 0% 0%, 0% 100%, 100% 60%)",
                filter: "blur(6px)",
              }}
            />

            {/* Red Brake Tail-Light Flare (active while braking in) */}
            <div
              ref={brakeLightRef}
              className="absolute pointer-events-none rounded-full blur-md"
              style={{
                left: "93%",
                top: "49%",
                width: "7%",
                height: "16%",
                background:
                  "radial-gradient(circle, rgba(255,40,60,0.95) 0%, rgba(230,57,70,0) 75%)",
              }}
            />

            {/* Twin Nitro Exhaust Plasma Jet (fires during high-speed wipe launch) */}
            <div
              ref={nitroRef}
              className="absolute pointer-events-none origin-left"
              style={{
                left: "95%",
                top: "68%",
                width: "34%",
                height: "15%",
                background:
                  "linear-gradient(90deg, #ffffff 0%, #05d9e8 28%, #6a3df0 65%, transparent 100%)",
                clipPath: "polygon(0% 25%, 100% 0%, 82% 50%, 100% 100%, 0% 75%)",
                filter: "blur(3px) drop-shadow(0 0 18px #05d9e8)",
              }}
            />

            {/* Bugatti Cutout Image */}
            <img
              src="/images/blue-car-reveal.png"
              alt="Blue supercar"
              className="w-full h-auto object-contain relative z-10"
              draggable="false"
            />

            {/* Subtle Wheel Motion-Blur Spoke Rings aligned to measured hubs */}
            <div
              ref={wheelFrontRef}
              className="absolute z-20 rounded-full pointer-events-none"
              style={{
                left: "16.5%",
                top: "49%",
                width: "16.2%",
                aspectRatio: "1 / 1",
                border: "2px dashed rgba(255,255,255,0.22)",
                boxShadow: "inset 0 0 10px rgba(5,217,232,0.22)",
              }}
            />
            <div
              ref={wheelRearRef}
              className="absolute z-20 rounded-full pointer-events-none"
              style={{
                left: "77.2%",
                top: "43%",
                width: "17.4%",
                aspectRatio: "1 / 1",
                border: "2px dashed rgba(255,255,255,0.22)",
                boxShadow: "inset 0 0 10px rgba(255,61,139,0.22)",
              }}
            />
          </div>
        </div>

        {/* Scroll Prompt Beneath Parked Car */}
        <div
          ref={overlayTextRef}
          className="absolute pointer-events-none opacity-0"
          style={{ bottom: "9%", left: 0, right: 0, textAlign: "center" }}
        >
          <span
            className="font-round-bold text-[11px] md:text-sm uppercase tracking-[0.42em] text-[#ffd23f] font-black"
            style={{ textShadow: "0 0 24px #ffd23f, 2px 2px 0px #000" }}
          >
            ↓ SCROLL TO LAUNCH &amp; REVEAL DOMAINS ↓
          </span>
        </div>
      </div>

      {/* ── Stationary Domains Content (lined up seamlessly right behind/after car wipe) ── */}
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <span className="tag !rotate-0 mb-0 text-xs md:text-sm px-4 py-1.5 uppercase font-bold inline-flex items-center gap-2 bg-[#ffd23f] text-black border-2 border-black shadow-[4px_4px_0px_#e63946]">
              <Sparkles className="w-4 h-4 text-[#e63946]" />
              OPEN INNOVATION • ORGANISED BY HACK WITH INDIA
            </span>
          </div>
          <div className="mb-2">
            <small className="font-inter text-[11px] md:text-xs tracking-[0.32em] text-[#ffd23f] px-3.5 py-1 rounded-full bg-black/70 border border-[#ffd23f]/35 backdrop-blur-xs inline-block font-bold uppercase shadow-md">
              DIMENSION / DOMAINS
            </small>
          </div>
          <h2
            className="d text-4xl md:text-7xl tracking-tight text-white"
            style={{
              textShadow:
                "0 6px 28px rgba(0,0,0,0.92), 3px 3px 0px rgba(0,0,0,0.75)",
            }}
          >
            CHOOSE ANY{" "}
            <span className="bg-gradient-to-r from-[#ffd23f] via-[#ff6b35] to-[#ff3d8b] bg-clip-text text-transparent drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]">
              DOMAIN
            </span>
          </h2>
          <p
            className="font-inter text-[#ffe9b3] text-xs md:text-lg font-extrabold uppercase tracking-[0.16em] mt-3 inline-block px-4 py-1.5 rounded-full bg-black/55 border border-white/15 backdrop-blur-xs"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
          >
            BUILD IN ANY DOMAIN YOU WANT • THE PRIZE IS ONLY ONE!
          </p>
        </div>

        {/* Unified Prize Callout Banner */}
        <div className="max-w-4xl mx-auto mb-10 bg-[#120e1e]/85 backdrop-blur-md text-white p-5 md:p-6 rounded-2xl border-2 border-[#ffd23f]/65 shadow-[6px_6px_0px_#e63946] relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ffd23f] via-[#ff6b35] to-[#e63946]" />
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3.5 bg-gradient-to-br from-[#ffd23f] to-[#ff6b35] text-black rounded-xl border-2 border-black shrink-0 shadow-[3px_3px_0px_#000]">
              <Trophy className="w-7 h-7" />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-[10px] md:text-xs font-black uppercase text-[#ffd23f] tracking-widest block">
                NO TRACK RESTRICTIONS • ONE UNIFIED PRIZE POOL
              </span>
              <h3 className="font-round-bold text-lg md:text-xl font-black uppercase leading-tight mt-0.5 text-white">
                Every Domain Competes on One Single National Leaderboard
              </h3>
              <p className="text-xs md:text-sm font-sans text-zinc-200 mt-1 leading-relaxed">
                You have <strong className="text-[#ffd23f]">100% freedom</strong> to choose{" "}
                <strong className="text-white">any domain</strong> or combine multiple technologies
                together. There are no segregated track budgets — every project
                contends head-to-head for the{" "}
                <strong className="text-[#ffd23f]">₹1,50,000 Podium Prize Pool</strong>!
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-round-bold font-black uppercase tracking-wider rounded-lg border-2 transition-all cursor-pointer ${
                activeFilter === tab
                  ? "bg-gradient-to-r from-[#ffd23f] to-[#ff8c38] text-black border-black shadow-[4px_4px_0px_#e63946] -translate-y-0.5"
                  : "bg-[#120e1e]/80 backdrop-blur-md text-zinc-200 border-white/20 hover:border-[#ffd23f]/60 hover:text-white hover:bg-[#1d1730]/90"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Domains Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredDomains.map((domain) => (
            <div
              key={domain.id}
              className="bg-[#120e1e]/82 backdrop-blur-md text-white p-6 md:p-7 rounded-2xl border-2 border-[#ffd23f]/35 hover:border-[#ffd23f] flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-300 shadow-[0_14px_34px_rgba(0,0,0,0.58),4px_4px_0px_#000]"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] px-2.5 py-1 font-black uppercase tracking-wider rounded bg-[#e63946] text-white border border-black shadow-[2px_2px_0px_#000]">
                    {domain.number}
                  </span>
                  <span className="text-[10px] md:text-xs font-mono font-black bg-[#ffd23f] text-black px-2.5 py-1 rounded border border-black">
                    ★ {domain.prize}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#ffd23f] flex items-center gap-1.5">
                    <span>{domain.icon}</span>
                    <span>{domain.badge}</span>
                  </span>
                  <h3 className="font-round-bold text-2xl font-black uppercase leading-tight mt-1 text-white group-hover:text-[#ffe48c] transition-colors">
                    {domain.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-sans mb-4">
                  {domain.description}
                </p>

                <div className="bg-black/45 p-3.5 rounded-xl border border-[#ffd23f]/20 mb-4">
                  <span className="text-[10px] font-black uppercase text-[#ff8c38] tracking-wider block mb-1">
                    DOMAIN SCOPE &amp; CHALLENGE:
                  </span>
                  <p className="text-xs font-semibold text-zinc-100 italic">
                    &ldquo;{domain.challenge}&rdquo;
                  </p>
                </div>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {(domain.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold bg-white/10 text-[#ffe9b3] px-2.5 py-0.5 border border-white/15 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onOpenRegister?.("team")}
                  className="w-full bg-gradient-to-r from-[#e63946] to-[#ff5733] hover:from-[#d62839] hover:to-[#e63946] text-white py-3 px-4 rounded-lg border-2 border-black font-round-bold text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-transform active:translate-y-0.5 shadow-[3px_3px_0px_#000]"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>CHOOSE THIS DOMAIN (COMING SOON)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Single Prize Banner */}
        <div className="mt-14 bg-[#120e1e]/88 backdrop-blur-md border-2 border-[#ffd23f]/65 p-6 md:p-8 rounded-2xl text-center shadow-[8px_8px_0px_#e63946]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="comic-badge text-xs px-3 py-1 font-black bg-[#ffd23f] text-black border border-black">
                ONE OVERALL CHAMPIONSHIP • ₹1,50,000 PODIUM PRIZE POOL
              </span>
              <h4 className="font-round-bold text-2xl md:text-3xl font-black uppercase text-white mt-2.5">
                HACK IN ANY DOMAIN. WIN THE ULTIMATE PRIZE.
              </h4>
              <p className="text-xs md:text-sm text-zinc-300 mt-1 max-w-xl">
                Whether you build an autonomous AI agent, a full-stack SaaS, a
                cross-platform mobile app, or a hardware hack — all domains
                compete equally for the grand cash prize, trophies, and direct
                VC incubation!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;
