import { ArrowRight, Trophy, Users, ShieldCheck, Sparkles } from "lucide-react";

const Outro = ({ onOpenRegister }) => {
  return (
    <section className="final-message relative w-full py-20 px-4 bg-[#0a0814] border-t-2 border-black/80 pointer-events-auto z-30">
      <div className="min-h-full col-center justify-center gap-6 text-center max-w-4xl mx-auto">
        
        {/* Organizer Badge */}
        <div className="inline-block animate-bounce">
          <span className="comic-badge text-xs md:text-sm px-4 py-1.5 uppercase font-black inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#e63946]" />
            ORGANISED BY HACK WITH INDIA
          </span>
        </div>

        {/* Grand Headline */}
        <div>
          <h2 className="gradient-title !leading-[0.92] drop-shadow-[0_4px_25px_rgba(230,57,70,0.6)]">
            HACK WITH<br />MUMBAI 4.0
          </h2>
          <p className="text-pink text-sm sm:text-base md:text-2xl font-round-bold uppercase tracking-widest mt-2 font-bold">
            36-HOUR NATIONAL HACKATHON • 24-25 SEPTEMBER 2026
          </p>
          <div className="text-yellow text-lg sm:text-xl md:text-3xl font-round-bold uppercase font-black mt-1">
            ₹1,50,000 PODIUM PRIZES (1ST: ₹75K, 2ND: ₹50K, 3RD: ₹25K)
          </div>
          <p className="text-xs text-neutral-300 font-bold uppercase tracking-wider mt-1">
            CHOOSE ANY DOMAIN • ALL DOMAINS COMPETE TOGETHER
          </p>
        </div>

        {/* Registration Tiers Box Grid */}
        <div className="w-full max-w-xl my-2 px-2">
          <div 
            onClick={() => onOpenRegister?.("team")}
            className="comic-box bg-[#fff9cb] text-black p-4 sm:p-5 rounded-xl cursor-pointer hover:scale-105 active:scale-95 transition-transform shadow-[5px_5px_0px_#000] text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase text-[#e63946] flex items-center gap-1.5">
                <Users className="w-4 h-4" /> TEAM SQUAD PASS (2–5 MEMBERS)
              </span>
              <span className="text-xl sm:text-2xl font-round-bold font-black text-[#e63946]">₹200</span>
            </div>
            <p className="text-xs text-neutral-800 font-bold mb-3">
              2 to 5 Hackers per Team • Arena Access • Dedicated Mentor War Room • Eligible for ₹1,50,000 Grand Prize Pool
            </p>
            <div className="flex items-center justify-between text-[11px] font-mono font-bold text-neutral-600 border-t border-black/20 pt-2">
              <span>★ ALL DOMAINS COMPETE TOGETHER</span>
              <span className="text-[#e63946] font-black">REGISTER SQUAD ON UNSTOP →</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-md px-2">
          <button
            onClick={() => onOpenRegister?.("team")}
            className="w-full comic-box bg-[#e63946] hover:bg-[#d62839] text-white px-6 py-3.5 sm:py-4 font-round-bold text-sm sm:text-base md:text-xl font-black uppercase tracking-wider flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer shadow-[6px_6px_0px_#fff9cb] hover:scale-105 active:scale-95 transition-transform"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <span>REGISTER SQUAD ON UNSTOP</span>
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Footer info */}
        <div className="text-xs text-neutral-400 font-sans mt-4 space-y-1">
          <p className="font-bold">BVUDET NM CAMPUS, NAVI MUMBAI • 24-25 SEPTEMBER 2026</p>
          <p>© 2026 Hack With India. All rights reserved. Built with passion for builders nationwide.</p>
        </div>

      </div>
    </section>
  );
};

export default Outro;
