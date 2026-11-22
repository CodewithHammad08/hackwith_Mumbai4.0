import CountdownTimer from "../components/CountdownTimer";
import { ArrowRight, Trophy, Clock, Users, Zap, Sparkles } from "lucide-react";

const ComingSoon = ({ onOpenRegister }) => {
  return (
    <section className="entrance-message pointer-events-auto">
      <div className="h-full col-center justify-center px-4 pt-16 md:pt-20 pb-8 text-center relative z-20 max-w-4xl mx-auto">
        
        {/* Top Comic Organizer Badge */}
        <div className="inline-block mb-2 animate-bounce">
          <span className="comic-badge text-xs md:text-sm px-4 py-1.5 uppercase font-black inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#e63946]" />
            ORGANISED BY HACK WITH INDIA
          </span>
        </div>

        {/* 36-Hour National Hackathon Sub-pill */}
        <div className="text-xs md:text-sm font-round-bold uppercase tracking-widest text-[#ffb0c4] font-bold mb-1">
          36-HOUR NATIONAL HACKATHON • 24-25 SEPTEMBER 2026
        </div>

        {/* Grand Headline Title */}
        <div className="my-1 md:my-2">
          <h1 className="gradient-title !leading-[0.92] drop-shadow-[0_6px_25px_rgba(230,57,70,0.6)]">
            HACK WITH<br />MUMBAI 4.0
          </h1>
        </div>

        {/* Taglines */}
        <div className="space-y-1 mb-2 max-w-2xl">
          <p className="text-sm md:text-xl font-round-bold text-[#fff9cb] uppercase tracking-wide font-extrabold drop-shadow-md">
            "WHEN DOES REAL GENIUS CAUSE REPERCUSSION?"
          </p>
          <p className="text-xs md:text-sm text-[#fff9cb] font-round-bold uppercase font-bold tracking-wide hidden sm:block">
            CHOOSE ANY DOMAIN • ONE UNIFIED ₹2,00,000 GRAND PRIZE
          </p>
          <p className="text-[11px] md:text-xs text-gray-300 font-sans tracking-normal hidden sm:block">
            AI/ML • FULL-STACK WEB • MOBILE APPS • CLOUD & CYBER • WEB3 • OPEN INNOVATION
          </p>
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full my-2">
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-pink mb-1 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#e63946] animate-ping" />
            HACKATHON COMMENCEMENT COUNTDOWN
          </div>
          <CountdownTimer targetDate="2026-09-24T10:00:00" />
        </div>

        {/* Primary Call to Action — Registration Coming Soon */}
        <div className="my-2.5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onOpenRegister?.("solo")}
            className="comic-box bg-[#e63946] hover:bg-[#d62839] text-white px-6 md:px-8 py-3.5 font-round-bold text-xs md:text-sm font-black uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-[5px_5px_0px_#fff9cb] transition-transform hover:scale-105 active:scale-95"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#fff9cb] animate-ping" />
            <span>REGISTRATION COMING SOON — GET NOTIFIED</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

        {/* Pricing Tiers Preview */}
        <div className="flex items-center justify-center gap-3 my-1">
          <div 
            onClick={() => onOpenRegister?.("solo")}
            className="comic-box-sm bg-[#fff9cb] text-black px-3.5 py-1.5 rounded-md cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="text-[11px] font-black uppercase">SOLO DEV: </span>
            <span className="text-xs font-black text-[#e63946]">₹100</span>
          </div>

          <div 
            onClick={() => onOpenRegister?.("team")}
            className="comic-box-sm bg-[#fff9cb] text-black px-3.5 py-1.5 rounded-md cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="text-[11px] font-black uppercase">TEAM SQUAD (2-4): </span>
            <span className="text-xs font-black text-[#e63946]">₹200</span>
          </div>
        </div>

        {/* Value Badges Bar */}
        <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8 mt-3 text-xs md:text-sm font-bold text-gray-300 border-t border-neutral-800/80 pt-3">
          <div className="flex items-center gap-1.5 text-yellow">
            <Trophy className="w-4 h-4 text-[#ffd23f]" />
            <span>₹2,00,000 PRIZE POOL</span>
          </div>
          <div className="flex items-center gap-1.5 text-pink">
            <Clock className="w-4 h-4 text-pink" />
            <span>36 HOURS NON-STOP</span>
          </div>
          <div className="flex items-center gap-1.5 text-cyan-300">
            <Zap className="w-4 h-4 text-cyan-300" />
            <span>ORGANISED BY HACK WITH INDIA</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComingSoon;
