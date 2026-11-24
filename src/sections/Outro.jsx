import { ArrowRight, Sparkles } from "lucide-react";

const Outro = ({ onOpenRegister }) => {
  return (
    <section className="final-message relative w-full py-16 sm:py-24 px-4 bg-[#0a0814] border-t-2 border-black/80 pointer-events-auto z-30">
      <div className="min-h-full col-center justify-center gap-6 text-center max-w-3xl mx-auto">
        
        {/* Organizer Badge */}
        <div className="inline-block animate-bounce">
          <span className="comic-badge text-xs sm:text-sm px-4 py-1.5 uppercase font-black inline-flex items-center gap-2 bg-[#ffd23f] text-black shadow-[3px_3px_0px_#000]">
            <Sparkles className="w-4 h-4 text-[#e63946]" />
            ORGANISED BY HACK WITH INDIA
          </span>
        </div>

        {/* Clean Grand Headline with Reduced Text Clutter */}
        <div>
          <h2 className="gradient-title !leading-[0.92] drop-shadow-[0_4px_25px_rgba(230,57,70,0.6)]">
            HACK WITH<br />MUMBAI 4.0
          </h2>
          <p className="text-pink text-sm sm:text-base md:text-xl font-round-bold uppercase tracking-widest mt-3 font-bold">
            36-HOUR NATIONAL HACKATHON • 24-25 SEPTEMBER 2026
          </p>
          <div className="text-yellow text-lg sm:text-2xl md:text-3xl font-round-bold uppercase font-black mt-1">
            ₹1,50,000 PODIUM PRIZES
          </div>
        </div>

        {/* Single Focused Call-to-Action */}
        <div className="w-full max-w-md px-2 mt-2">
          <button
            onClick={() => onOpenRegister?.("team")}
            className="w-full comic-box bg-[#e63946] hover:bg-[#d62839] text-white px-6 py-4 font-round-bold text-base sm:text-lg md:text-xl font-black uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer shadow-[6px_6px_0px_#fff9cb] hover:scale-105 active:scale-95 transition-transform"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <span>REGISTER SQUAD ON UNSTOP</span>
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button>
          
          <div className="text-xs text-neutral-400 font-mono mt-2.5">
            Strictly 2–5 Members Per Squad • All Tech Domains Welcome
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="text-xs text-neutral-500 font-sans mt-3 space-y-0.5">
          <p className="font-semibold">BVUDET NM Campus, Navi Mumbai • Unstop Official Portal</p>
          <p>© 2026 Hack With India. All rights reserved.</p>
        </div>

      </div>
    </section>
  );
};

export default Outro;
