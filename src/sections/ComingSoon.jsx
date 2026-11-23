import CountdownTimer from "../components/CountdownTimer";
import { ExternalLink, Trophy, Clock, Users, Zap, MapPin } from "lucide-react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";

const ComingSoon = ({ onOpenRegister }) => {
  return (
    <section className="entrance-message pointer-events-auto relative overflow-hidden">
      {/* Background Ambient Video Playback */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 scale-105"
          src="/videos/output1.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07060f] via-[#07060f]/75 to-[#07060f]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,57,70,0.18)_0%,transparent_75%)]" />
      </div>

      <div className="h-full col-center justify-center px-3 xs:px-4 pt-16 md:pt-20 pb-8 text-center relative z-20 max-w-4xl mx-auto">
        
        {/* Top Highlight Badge: 36-Hour National Level Hackathon */}
        <div className="inline-block mb-2">
          <span className="comic-badge text-[10px] xs:text-xs md:text-sm px-3 xs:px-4 py-1.5 uppercase font-black inline-flex items-center gap-1.5 sm:gap-2 bg-[#ffd23f] text-black shadow-[3px_3px_0px_#000]">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e63946] fill-[#e63946]" />
            36-HOUR NATIONAL LEVEL HACKATHON • 24-25 SEPT 2026
          </span>
        </div>

        {/* Grand Headline Title */}
        <div className="my-1 md:my-2">
          <h1 className="gradient-title !leading-[0.92] drop-shadow-[0_6px_25px_rgba(230,57,70,0.6)]">
            HACK WITH<br />MUMBAI 4.0
          </h1>
        </div>

        {/* Venue & Event Highlights (Punchy, Clean, Non-AI) */}
        <div className="flex items-center justify-center gap-2 flex-wrap my-1.5 sm:my-2 max-w-2xl mx-auto">
          <div className="bg-[#e63946]/20 border border-[#e63946]/60 text-white px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-bold tracking-wide shadow-sm">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffb0c4] shrink-0" />
            <span>VENUE: <strong className="text-[#fff9cb]">BVUDET NM CAMPUS</strong> (NAVI MUMBAI)</span>
          </div>

          <div className="bg-black/60 border border-neutral-700 text-neutral-300 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide">
            <span>ORGANISED BY <strong className="text-white">HACK WITH INDIA</strong></span>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full my-2 sm:my-3">
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#ffb0c4] mb-1.5 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#e63946] animate-ping" />
            <span>HACKATHON COMMENCEMENT COUNTDOWN</span>
          </div>
          <CountdownTimer targetDate="2026-09-24T10:00:00" />
        </div>

        {/* Primary Call to Action — Redirect to Unstop */}
        <div className="my-2.5 sm:my-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-md mx-auto">
          <a
            href={HACKATHON_DETAILS.unstopUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onOpenRegister?.("team")}
            className="w-full sm:w-auto comic-box bg-[#e63946] hover:bg-[#d62839] text-white px-6 md:px-8 py-3 sm:py-3.5 font-round-bold text-xs sm:text-sm md:text-base font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[5px_5px_0px_#fff9cb] transition-transform hover:scale-105 active:scale-95"
          >
            <span className="w-2 h-2 rounded-full bg-[#fff9cb] animate-ping" />
            <span>REGISTER ON UNSTOP</span>
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
          </a>

          {/* Single Team Pass Tag (Strictly 2-5 Members) */}
          <div className="comic-box-sm bg-[#fff9cb] text-black px-3.5 py-2 sm:py-2.5 rounded-md flex items-center justify-center gap-1.5 shadow-[3px_3px_0px_#000] text-center">
            <Users className="w-3.5 h-3.5 text-[#e63946]" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-tight">TEAM SQUAD (2–5 MEMBERS):</span>
            <span className="text-xs sm:text-sm font-black text-[#e63946]">₹200 TOTAL</span>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8 mt-3 text-xs md:text-sm font-bold text-gray-300 border-t border-neutral-800/80 pt-3">
          <div className="flex items-center gap-1.5 text-yellow">
            <Trophy className="w-4 h-4 text-[#ffd23f]" />
            <span>₹1,50,000 PODIUM PRIZES</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#ffb0c4]">
            <Clock className="w-4 h-4 text-[#ffb0c4]" />
            <span>36 HOURS LIVE ARENA</span>
          </div>
          <div className="flex items-center gap-1.5 text-cyan-300">
            <MapPin className="w-4 h-4 text-cyan-300" />
            <span>BVUDET NM CAMPUS</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComingSoon;
