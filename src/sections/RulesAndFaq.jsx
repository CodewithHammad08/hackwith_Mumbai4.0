import { useState } from "react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";
import { ShieldCheck, HelpCircle, ChevronDown, Check, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

const RulesAndFaq = ({ onOpenRegister }) => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="rules" className="relative py-28 px-6 md:px-16 z-30 overflow-hidden bg-black/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <span className="comic-badge text-xs md:text-sm px-4 py-1.5 uppercase font-black inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#e63946]" />
              FAIR PLAY & PROTOCOLS • HACK WITH INDIA
            </span>
          </div>
          <h2 className="font-round-bold text-4xl md:text-7xl font-black uppercase tracking-tight text-white drop-shadow-md">
            RULES & GUIDELINES
          </h2>
          <p className="text-pink text-base md:text-xl font-round-bold uppercase tracking-wider mt-2 max-w-xl mx-auto font-bold">
            HACK WITH MUMBAI 4.0 • EVERYTHING YOU NEED TO KNOW
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Rules Card - Comic Styled */}
          <div className="lg:col-span-5 comic-box bg-[#fff9cb] text-black p-6 md:p-8 rounded-xl flex flex-col justify-between shadow-[8px_8px_0px_#e63946]">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                <span className="comic-badge text-xs px-2.5 py-1 bg-[#e63946] text-white">
                  CODE PROTOCOL
                </span>
                <span className="text-xs font-mono font-bold text-neutral-800">
                  NATIONAL EDITION
                </span>
              </div>

              <h3 className="font-round-bold text-2xl font-black uppercase leading-tight mb-4">
                HACKATHON RULES
              </h3>

              <div className="space-y-3.5 text-xs md:text-sm font-sans">
                {HACKATHON_DETAILS.rules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="bg-black text-[#fff9cb] w-5 h-5 rounded-full flex items-center justify-center font-mono text-[11px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-neutral-900 leading-snug">
                      {rule}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-black">
              <div className="flex items-center justify-between text-xs font-black uppercase mb-3">
                <span>TEAM PASS (2–5 MEMBERS): <strong>₹200</strong></span>
                <span className="text-[#e63946]">ANY DOMAIN • UNIFIED PRIZE</span>
              </div>
              <button
                onClick={() => onOpenRegister?.("team")}
                className="w-full comic-box-sm bg-[#e63946] hover:bg-[#d62839] text-white py-3 px-4 font-round-bold text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-transform active:translate-y-0.5 shadow-[3px_3px_0px_#000]"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>PRE-REGISTER & ACCEPT RULES (COMING SOON)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* FAQ Accordion (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
            <h3 className="font-round-bold text-2xl md:text-3xl font-black uppercase text-yellow mb-2">
              FREQUENTLY ASKED QUESTIONS
            </h3>

            {HACKATHON_DETAILS.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="comic-box-sm bg-[#171522] border-2 border-neutral-700 rounded-lg overflow-hidden transition-all shadow-[4px_4px_0px_#000]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm md:text-base font-round-bold font-bold text-white hover:text-pink transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-pink shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs md:text-sm text-gray-300 font-sans leading-relaxed border-t border-neutral-800">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Partners & Sponsors Ribbon */}
        <div className="comic-box bg-[#13111c] border-2 border-neutral-800 p-6 rounded-xl text-center shadow-[6px_6px_0px_#000]">
          <span className="text-xs font-bold uppercase tracking-widest text-pink block mb-4">
            ORGANISED & SUPPORTED BY INDUSTRY LEADERS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {HACKATHON_DETAILS.sponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex flex-col items-center">
                <span className="font-round-bold text-base md:text-xl font-black text-white hover:text-yellow transition-colors">
                  {sponsor.name}
                </span>
                <span className="text-[10px] uppercase font-bold text-neutral-400">
                  {sponsor.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RulesAndFaq;
