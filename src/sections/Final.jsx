import { useRef } from "react";
import { Trophy, ExternalLink, Sparkles } from "lucide-react";
import { useSmoothVideoScrub } from "../utils/useSmoothVideoScrub";
import { HACKATHON_DETAILS } from "../constants/hackathonData";

const Final = () => {
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
    <section ref={containerRef} className="final relative h-dvh w-full overflow-hidden bg-black z-20">
      <video 
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        src="/videos/output3.mp4"
        className="size-full object-cover will-change-transform"
      />

      {/* Deep cinematic vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-black/40 to-black/75 z-25" />

      {/* Top Chapter Badge */}
      <div className="absolute top-16 md:top-24 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center">
        <div className="comic-badge text-[10px] sm:text-xs md:text-sm px-4 py-1.5 uppercase font-black inline-flex items-center gap-1.5 bg-[#e63946] text-white shadow-[3px_3px_0px_#fff9cb]">
          <Sparkles className="w-3.5 h-3.5" />
          STAGE 03 // THE GRAND FINALE • PODIUM CEREMONY
        </div>
      </div>

      {/* Prominent Center Hackathon Overlay & Unstop Action */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-30">
        
        {/* Kicker Pill */}
        <div className="mb-2 sm:mb-3 pointer-events-none">
          <span className="comic-badge text-[10px] sm:text-xs md:text-sm px-3.5 py-1.5 uppercase font-black bg-[#ffd23f] text-black shadow-[3px_3px_0px_#000] inline-flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-[#e63946]" />
            ONE UNIFIED NATIONAL LEADERBOARD
          </span>
        </div>

        {/* Grand Bold Headline */}
        <h2 className="font-round-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.92] drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)] max-w-5xl pointer-events-none">
          CLAIM THE <br />
          <span className="text-[#e63946] drop-shadow-[0_0_35px_rgba(230,57,70,0.85)]">
            CHAMPIONSHIP PODIUM
          </span>
        </h2>

        {/* Prize Pool Tagline */}
        <p className="text-yellow text-xs sm:text-base md:text-2xl font-round-bold uppercase font-extrabold tracking-widest mt-3 sm:mt-4 drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] max-w-3xl pointer-events-none">
          ₹1,50,000 CASH PRIZES • 1ST: ₹75K • 2ND: ₹50K • 3RD: ₹25K
        </p>

        {/* Podium Breakdown Cards */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-4 sm:mt-6 max-w-3xl pointer-events-none">
          <div className="bg-[#e63946] border-2 border-black text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black shadow-[4px_4px_0px_#000] flex items-center gap-1.5">
            <span>👑</span>
            <span>1ST: ₹75,000 + TROPHY</span>
          </div>
          <div className="bg-[#fff9cb] border-2 border-black text-black px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black shadow-[4px_4px_0px_#000] flex items-center gap-1.5">
            <span>🥈</span>
            <span>2ND: ₹50,000 + MEDALS</span>
          </div>
          <div className="bg-[#fff9cb] border-2 border-black text-black px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black shadow-[4px_4px_0px_#000] flex items-center gap-1.5">
            <span>🥉</span>
            <span>3RD: ₹25,000 + AWARDS</span>
          </div>
        </div>

        {/* Interactive CTA to register on Unstop */}
        <div className="mt-6 sm:mt-8 pointer-events-auto">
          <a
            href={HACKATHON_DETAILS.unstopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="comic-box bg-[#e63946] hover:bg-[#d62839] text-white px-7 sm:px-10 py-3.5 sm:py-4 font-round-bold text-sm sm:text-base md:text-xl font-black uppercase tracking-wider inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-[6px_6px_0px_#fff9cb] transition-transform hover:scale-105 active:scale-95"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <span>REGISTER SQUAD ON UNSTOP</span>
            <ExternalLink className="w-5 h-5 stroke-[3]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Final;
