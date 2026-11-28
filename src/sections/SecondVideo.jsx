import { useRef } from "react";
import { Users, Sparkles } from "lucide-react";
import { useSmoothVideoScrub } from "../utils/useSmoothVideoScrub";

const SecondVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Buttery-smooth hardware-accelerated scroll-scrubbed video
  useSmoothVideoScrub(videoRef, containerRef, {
    start: "top top",
    end: "+=140%",
    pin: true,
    scrub: 0.5,
  });

  return (
    <section ref={containerRef} className="lucia relative h-dvh w-full overflow-hidden bg-black z-20">
      <video 
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        src="/videos/output2.mp4"
        className="size-full object-cover second-vd will-change-transform"
        style={{ 
          objectPosition: "15% 0%" 
        }}
      />

      {/* Deep cinematic vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-black/40 to-black/75 z-25" />

      {/* Top Chapter Badge */}
      <div className="absolute top-16 md:top-24 right-4 sm:right-8 md:right-14 z-30 pointer-events-none text-right">
        <div className="comic-badge text-[10px] sm:text-xs md:text-sm px-3.5 py-1.5 uppercase font-black inline-flex items-center gap-1.5 bg-[#ffd23f] text-black shadow-[3px_3px_0px_#000]">
          <Sparkles className="w-3.5 h-3.5" />
          STAGE 02 // ASSEMBLE THE SYNDICATE
        </div>
      </div>

      {/* Prominent Center Hackathon Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-30 pointer-events-none select-none">
        
        {/* Kicker Pill */}
        <div className="mb-2 sm:mb-3">
          <span className="comic-badge text-[10px] sm:text-xs md:text-sm px-3.5 py-1.5 uppercase font-black bg-[#e63946] text-white shadow-[3px_3px_0px_#000] inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#fff9cb]" />
            SQUAD FORMATION PROTOCOL (2–4 MEMBERS)
          </span>
        </div>

        {/* Grand Bold Headline */}
        <h2 className="font-round-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.92] drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)] max-w-5xl">
          2 TO 4 MINDS. <br />
          <span className="text-[#ffd23f] drop-shadow-[0_0_35px_rgba(255,210,63,0.85)]">
            ONE SHARED VISION.
          </span>
        </h2>

        {/* Tagline */}
        <p className="text-pink text-xs sm:text-base md:text-xl font-round-bold uppercase font-extrabold tracking-widest mt-3 sm:mt-4 drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] max-w-3xl">
          CROSS-COLLEGE SQUADS WELCOME • BUILD FAST • SHIP FASTER
        </p>

        {/* Tech Domain Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-4 sm:mt-6 max-w-4xl">
          <span className="bg-black/85 backdrop-blur-md border border-white/20 text-[#fff9cb] px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-bold shadow-lg">
            🤖 AI & AGENTIC SYSTEMS
          </span>
          <span className="bg-black/85 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-bold shadow-lg">
            ⚡ FULL-STACK WEB & APPS
          </span>
          <span className="bg-black/85 backdrop-blur-md border border-white/20 text-cyan-300 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-bold shadow-lg">
            🛡️ CLOUD & CYBERSECURITY
          </span>
          <span className="bg-black/85 backdrop-blur-md border border-white/20 text-[#ffb0c4] px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-bold shadow-lg">
            ⛓️ WEB3 & OPEN INNOVATION
          </span>
        </div>

        {/* Bottom Tagline */}
        <p className="text-neutral-300 text-[10px] sm:text-xs font-mono uppercase tracking-widest mt-4 drop-shadow-md">
          ★ 1-ON-1 INDUSTRY MENTORSHIP • 24/7 DEDICATED WAR ROOMS
        </p>
      </div>
    </section>
  );
};

export default SecondVideo;
