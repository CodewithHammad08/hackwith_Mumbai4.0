import { useRef } from "react";
import { Zap, Sparkles, MapPin } from "lucide-react";
import { useSmoothVideoScrub } from "../utils/useSmoothVideoScrub";

const FirstVideo = () => {
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
    <section ref={containerRef} className="first-vd-wrapper relative h-dvh w-full overflow-hidden bg-black z-20">
      <video 
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        src="/videos/output1.mp4"
        className="size-full object-cover first-vd will-change-transform"
      />

      {/* Deep cinematic vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-black/40 to-black/75 z-25" />

      {/* Top Chapter Badge */}
      <div className="absolute top-16 md:top-24 left-4 sm:left-8 md:left-14 z-30 pointer-events-none">
        <div className="comic-badge text-[10px] sm:text-xs md:text-sm px-3.5 py-1.5 uppercase font-black inline-flex items-center gap-1.5 bg-[#e63946] text-white shadow-[3px_3px_0px_#fff9cb]">
          <Sparkles className="w-3.5 h-3.5" />
          STAGE 01 // ARENA COMMENCEMENT • HACK WITH INDIA
        </div>
      </div>

      {/* Prominent Center Hackathon Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-30 pointer-events-none select-none">
        
        {/* Kicker Pill */}
        <div className="mb-2 sm:mb-3">
          <span className="comic-badge text-[10px] sm:text-xs md:text-sm px-3.5 py-1.5 uppercase font-black bg-[#ffd23f] text-black shadow-[3px_3px_0px_#000] inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#e63946] fill-[#e63946]" />
            36-HOUR NATIONAL LEVEL HACKATHON
          </span>
        </div>

        {/* Grand Bold Headline */}
        <h2 className="font-round-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.92] drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)] max-w-5xl">
          WHEN CODE MEETS <br />
          <span className="text-[#e63946] drop-shadow-[0_0_35px_rgba(230,57,70,0.85)]">
            PURE ADRENALINE
          </span>
        </h2>

        {/* Venue & Date Tagline */}
        <p className="text-[#fff9cb] text-xs sm:text-base md:text-xl font-round-bold uppercase font-extrabold tracking-widest mt-3 sm:mt-4 drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] max-w-3xl flex items-center justify-center gap-2 flex-wrap">
          <MapPin className="w-4 h-4 text-[#e63946] inline shrink-0" />
          <span>BVUDET NM CAMPUS, NAVI MUMBAI</span>
          <span className="text-white/60">•</span>
          <span>24–25 SEPTEMBER 2026</span>
        </p>
      </div>
    </section>
  );
};

export default FirstVideo;
