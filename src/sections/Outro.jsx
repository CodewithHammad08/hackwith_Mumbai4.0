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
          <h2 className="d gl text-[2.6rem] xs:text-[3.2rem] sm:text-[4.6rem] md:text-[5.8rem] lg:text-[7rem] leading-[0.92] text-white">
            HACK WITH<br /><span className="g">MUMBAI 4.0</span>
          </h2>
          <p className="font-inter text-pink text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.14em] mt-3">
            36-HOUR NATIONAL HACKATHON • 24-25 SEPTEMBER 2026
          </p>
          <div className="d text-yellow text-2xl sm:text-3xl md:text-4xl mt-2">
            ₹1,50,000 PODIUM PRIZES
          </div>
        </div>

        {/* Single Focused Call-to-Action */}
        <div className="w-full max-w-md px-2 mt-2">
          <button
            onClick={() => onOpenRegister?.("team")}
            className="w-full comic-box bg-[#e63946] hover:bg-[#d62839] text-white px-6 py-4 font-inter text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer shadow-[6px_6px_0px_#fff9cb] hover:scale-105 active:scale-95 transition-transform"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <span>REGISTER SQUAD ON UNSTOP</span>
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button>
          
          <div className="text-xs text-neutral-400 font-mono mt-2.5">
            Strictly 2–4 Members Per Squad • All Tech Domains Welcome
          </div>
        </div>

        {/* Minimal Footer from HTML spec */}
        <div className="text-xs text-neutral-400 font-inter tracking-[0.15em] uppercase mt-5 space-y-1">
          <p className="font-bold text-neutral-300">END CREDITS · HACK WITH INDIA · BVUDET NM</p>
          <p className="text-[11px] text-neutral-500">BVUDET NM Campus, Navi Mumbai • Unstop Official Portal</p>
          <p className="text-[10px] text-neutral-600">© 2026 Hack With India. All rights reserved.</p>
        </div>

      </div>
    </section>
  );
};

export default Outro;
