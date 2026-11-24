import { useState, useRef } from "react";
import { ArrowUpRight, Lock, Unlock, X, Menu } from "lucide-react";
import AudioToggle from "../components/AudioToggle";
import { HACKATHON_DETAILS } from "../constants/hackathonData";

const NavBar = ({ onOpenRegister }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsNavOpen(true);
  };

  const handleMouseLeave = () => {
    if (isPinned) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsNavOpen(false);
    }, 500);
  };

  const handleTogglePin = (e) => {
    e.stopPropagation();
    setIsPinned((prev) => !prev);
    setIsNavOpen(true);
  };

  // Smooth scroll using Lenis
  const handleLinkClick = (e, href) => {
    if (e) e.preventDefault();
    if (!isPinned) setIsNavOpen(false);
    setMobileMenuOpen(false);

    if (href && href.startsWith("#")) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        if (typeof window !== "undefined" && window.lenis) {
          window.lenis.scrollTo(targetEl, {
            offset: -85,
            duration: 1.45,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleLogoClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setMobileMenuOpen((prev) => !prev);
    } else {
      setIsNavOpen((prev) => !prev);
    }
  };

  // Left links: ordered from outer to inner (delays reveal from center outward)
  const leftLinks = [
    { label: "ABOUT", href: "#about", delay: "0.38s" },
    { label: "DOMAINS", href: "#domains", delay: "0.26s" },
    { label: "TIMELINE", href: "#timeline", delay: "0.14s" },
  ];

  // Right links: ordered from inner to outer (delays reveal from center outward)
  const rightLinks = [
    { label: "PRIZES", href: "#prizes", delay: "0.14s" },
    { label: "RULEBOOK", href: "#rulebook", delay: "0.20s" },
    { label: "EDITIONS", href: "#past-events", delay: "0.26s" },
    { label: "FAQ", href: "#rules", delay: "0.32s" },
  ];

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          MOBILE TOP FLOATING BAR (SMOOTH & ULTRA COMPACT FOR PHONES)
      ───────────────────────────────────────────────────────────── */}
      <div className="flex md:hidden fixed top-3 left-3 right-3 z-[100] items-center justify-between bg-[rgba(10,8,22,0.85)] backdrop-blur-xl border border-white/20 rounded-full px-3 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(230,26,86,0.4)]">
        <div
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-[#18171b] border-2 border-[#e61a56] shadow-[0_0_10px_rgba(230,26,86,0.6)] flex items-center justify-center shrink-0">
            <img
              src="/images/hackwithindia-bvudet-logo.jpg"
              alt="Logo"
              className="w-full h-full object-contain p-0.5 rounded-full"
            />
          </div>
          <span className="text-[11px] font-round-bold font-black text-white uppercase tracking-tight">
            HWM 4.0
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={HACKATHON_DETAILS.unstopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e61a56] text-white text-[10px] font-round-bold font-black uppercase px-3 py-1.5 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(230,26,86,0.6)]"
          >
            <span>UNSTOP</span>
            <ArrowUpRight className="w-3 h-3 stroke-[3]" />
          </a>

          <AudioToggle />

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 rounded-full bg-white/10 text-white border border-white/15 cursor-pointer"
            aria-label="Open mobile menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CINEMATIC SLOW-MOTION FLOATING GLASS DOCK (DESKTOP / TABLET)
          - Opens slowly (~0.92s) with custom easeOutQuint physics.
          - Items blossom sequentially from center outward!
          - Logo is locked in center circle (never leaves).
          - Lenis-powered buttery smooth navigation.
      ───────────────────────────────────────────────────────────── */}
      <header
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transition: isNavOpen
            ? "width 0.92s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.92s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.6s ease, box-shadow 0.8s ease"
            : "width 0.65s cubic-bezier(0.25, 1, 0.5, 1), border-radius 0.65s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.4s ease, box-shadow 0.5s ease",
          willChange: "width, transform",
        }}
        className={`hidden md:flex fixed left-1/2 -translate-x-1/2 z-[100] select-none pointer-events-auto overflow-hidden ${
          isNavOpen
            ? "top-5 md:top-6 w-[95vw] lg:w-[92vw] max-w-6xl rounded-2xl md:rounded-full bg-[rgba(10,8,22,0.82)] backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.22),0_24px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(230,26,86,0.35)] py-2 px-3 md:px-6 items-center justify-between"
            : "top-5 md:top-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[rgba(10,8,22,0.75)] backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_10px_25px_rgba(0,0,0,0.6),0_0_22px_rgba(230,26,86,0.5)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_14px_35px_rgba(0,0,0,0.75),0_0_32px_rgba(230,26,86,0.9)] hover:scale-105 items-center justify-center cursor-pointer"
        }`}
      >
        {/* ── TOP SPECULAR GLASS LIGHT BEAM (Expands slowly with dock) ── */}
        <div
          style={{
            transition: isNavOpen
              ? "all 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s"
              : "all 0.35s ease 0s",
          }}
          className={`absolute top-0 left-1/2 -translate-x-1/2 h-[1px] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none ${
            isNavOpen ? "w-2/3 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* ── BOTTOM NEON LIGHT BEAM (Glows and expands slowly with dock) ── */}
        <div
          style={{
            transition: isNavOpen
              ? "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.18s"
              : "all 0.35s ease 0s",
          }}
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#e61a56] to-transparent pointer-events-none ${
            isNavOpen ? "w-3/4 opacity-100 shadow-[0_0_14px_#e61a56]" : "w-0 opacity-0"
          }`}
        />

        {/* ── LEFT WING (Staggers from center outward to the LEFT) ── */}
        <div
          role="navigation"
          aria-label="Navigation Links Left"
          style={{
            transition: isNavOpen
              ? "max-width 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.05s, opacity 0.5s ease"
              : "max-width 0.45s ease 0s, opacity 0.25s ease",
          }}
          className={`hidden md:flex flex-1 items-center justify-end gap-2.5 lg:gap-5 text-center ${
            isNavOpen
              ? "opacity-100 max-w-md pointer-events-auto pr-3 lg:pr-5 border-r border-white/10"
              : "opacity-0 max-w-0 pointer-events-none overflow-hidden p-0 border-none"
          }`}
        >
          {leftLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleLinkClick(e, l.href)}
              style={{
                transition: isNavOpen
                  ? `all 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${l.delay}`
                  : "all 0.2s ease 0s",
              }}
              className={`text-xs lg:text-[13px] font-round-bold font-black uppercase tracking-wider px-3 lg:px-4 py-1.5 rounded-full hover:bg-white/[0.12] hover:text-[#fff9cb] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] transition-colors whitespace-nowrap text-center cursor-pointer ${
                isNavOpen
                  ? "opacity-100 translate-x-0 scale-100 text-white/85"
                  : "opacity-0 -translate-x-4 scale-95 text-transparent"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* ── CENTER LOGO EMBLEM (ALWAYS LOCKED IN CENTER CIRCLE!) ── */}
        <div
          onClick={handleLogoClick}
          className="relative flex items-center justify-center cursor-pointer group shrink-0 select-none px-1.5 z-10"
          title="Hack With India • BVUDET Navi Mumbai"
        >
          {/* Circular Frame for Logo (Cleanly bounded, never overflows) */}
          <div
            style={{
              transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className={`rounded-full overflow-hidden flex items-center justify-center relative bg-[#18171b] border-2 border-[#e61a56] shadow-[0_0_16px_rgba(230,26,86,0.55)] group-hover:border-[#ff2a6d] group-hover:shadow-[0_0_24px_rgba(230,26,86,0.85)] ${
              isNavOpen
                ? "w-10 h-10 md:w-11 md:h-11 shadow-[0_0_20px_rgba(230,26,86,0.7)]"
                : "w-10 h-10 md:w-12 md:h-12 hover:scale-105"
            }`}
          >
            {/* Logo Image cleanly fitted inside circle without leaving bounds */}
            <img
              src="/images/hackwithindia-bvudet-logo.jpg"
              alt="Hack With India - BVUDET Navi Mumbai"
              className="w-full h-full object-contain p-0.5 rounded-full transition-transform duration-500 group-hover:scale-105"
            />

            {/* Glowing Beacon Indicator when collapsed */}
            {!isNavOpen && (
              <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e61a56] opacity-80" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e61a56] border border-white" />
              </span>
            )}
          </div>
        </div>

        {/* ── RIGHT WING (Staggers from center outward to the RIGHT) ── */}
        <div
          style={{
            transition: isNavOpen
              ? "max-width 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.05s, opacity 0.5s ease"
              : "max-width 0.45s ease 0s, opacity 0.25s ease",
          }}
          className={`hidden md:flex flex-1 items-center justify-start gap-2 lg:gap-3 text-center ${
            isNavOpen
              ? "opacity-100 max-w-lg pointer-events-auto pl-3 lg:pl-5 border-l border-white/10"
              : "opacity-0 max-w-0 pointer-events-none overflow-hidden p-0 border-none"
          }`}
        >
          {rightLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleLinkClick(e, l.href)}
              style={{
                transition: isNavOpen
                  ? `all 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${l.delay}`
                  : "all 0.2s ease 0s",
              }}
              className={`text-xs lg:text-[13px] font-round-bold font-black uppercase tracking-wider px-3 lg:px-4 py-1.5 rounded-full hover:bg-white/[0.12] hover:text-[#fff9cb] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] transition-colors whitespace-nowrap text-center cursor-pointer ${
                isNavOpen
                  ? "opacity-100 translate-x-0 scale-100 text-white/85"
                  : "opacity-0 translate-x-4 scale-95 text-transparent"
              }`}
            >
              {l.label}
            </a>
          ))}

          {/* Ambient Synth Drone Toggle (delay: 0.36s) */}
          <div
            style={{
              transition: isNavOpen
                ? "all 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.36s"
                : "all 0.2s ease 0s",
            }}
            className={isNavOpen ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-4 scale-95"}
          >
            <AudioToggle />
          </div>

          {/* Registration Coming Soon Button with Glass Highlight (delay: 0.46s) */}
          <div
            style={{
              transition: isNavOpen
                ? "all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.46s"
                : "all 0.2s ease 0s",
            }}
            className={isNavOpen ? "opacity-100 translate-x-0 scale-100 ml-1" : "opacity-0 translate-x-6 scale-95 ml-0"}
          >
            <button
              type="button"
              onClick={() => {
                if (!isPinned) setIsNavOpen(false);
                onOpenRegister?.("team");
              }}
              className="bg-[#e61a56] hover:bg-[#d4154d] text-white px-3.5 py-1.5 md:px-4 md:py-2 rounded-full font-round-bold font-black text-xs md:text-sm uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(230,26,86,0.6)] border border-white/20 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-[#fff9cb] animate-ping" />
              <span>REGISTER ON UNSTOP</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>

          {/* Pin/Lock Button (delay: 0.54s) */}
          <div
            style={{
              transition: isNavOpen
                ? "all 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.54s"
                : "all 0.2s ease 0s",
            }}
            className={isNavOpen ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-4 scale-95"}
          >
            <button
              type="button"
              onClick={handleTogglePin}
              title={isPinned ? "Navbar Pinned Open (Click to Unpin)" : "Pin Navbar Open"}
              className={`p-1.5 md:p-2 rounded-full border text-xs transition-colors cursor-pointer ${
                isPinned
                  ? "bg-[#fff9cb] text-black border-white font-black"
                  : "bg-white/[0.08] text-gray-300 hover:text-white border-white/15 hover:bg-white/[0.15]"
              }`}
            >
              {isPinned ? <Lock className="w-3.5 h-3.5 text-black" /> : <Unlock className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Close Navbar Button (delay: 0.58s) */}
          <div
            style={{
              transition: isNavOpen
                ? "all 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.58s"
                : "all 0.2s ease 0s",
            }}
            className={isNavOpen ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-4 scale-95"}
          >
            <button
              type="button"
              onClick={() => {
                setIsPinned(false);
                setIsNavOpen(false);
              }}
              className="p-1.5 md:p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-gray-300 hover:text-white border border-white/15 transition-colors cursor-pointer"
              aria-label="Close Navbar"
            >
              <X className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE FULL-SCREEN GLASS DRAWER (FOR PHONES & TOUCH SCREENS)
      ───────────────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[120] md:hidden flex flex-col justify-center px-8 py-20 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white cursor-pointer p-2"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Hack With India BVUDET Navi Mumbai Official Logo & Title */}
          <div className="mb-6 pb-4 border-b border-white/10 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-[#18171b] border-2 border-[#e61a56] shadow-[0_0_25px_rgba(230,26,86,0.7)] mb-3 flex items-center justify-center">
              <img
                src="/images/hackwithindia-bvudet-logo.jpg"
                alt="Hack With India - BVUDET Navi Mumbai"
                className="w-full h-full object-contain p-1 rounded-full"
              />
            </div>
            <span className="text-sm font-round-bold font-black uppercase tracking-wider text-white">
              HACK WITH INDIA
            </span>
            <span className="text-xs uppercase tracking-widest text-[#ff2a6d] font-black mt-1">
              BVUDET NAVI MUMBAI • HACK WITH MUMBAI 4.0
            </span>
          </div>

          <div className="space-y-3 mb-8 text-center">
            {[...leftLinks, ...rightLinks].map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
                className="block text-2xl font-round-bold font-black text-white hover:text-pink uppercase py-2 border-b border-white/5 transition-colors text-center"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister?.("team");
              }}
              className="w-full bg-[#e61a56] hover:bg-[#d4154d] text-white font-round-bold font-black text-sm uppercase tracking-wider py-3.5 rounded-full text-center cursor-pointer shadow-[0_0_20px_rgba(230,26,86,0.6)] border border-white/20"
            >
              REGISTER SQUAD ON UNSTOP ↗
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest">
              ORGANISED BY HACK WITH INDIA • BVUDET NAVI MUMBAI
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
