import { useState } from "react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";
import { ShieldCheck, HelpCircle, ChevronDown, Check, ExternalLink, Sparkles } from "lucide-react";

const RulesAndFaq = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="rules" className="relative py-16 md:py-28 px-4 sm:px-6 md:px-16 z-30 overflow-hidden bg-black/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-3">
            <span className="tag !rotate-0 mb-0 text-xs md:text-sm px-4 py-1.5 uppercase font-bold inline-flex items-center gap-2 bg-[#ffd23f] text-black shadow-[3px_3px_0px_#000]">
              <ShieldCheck className="w-4 h-4 text-[#e63946]" />
              FAIR PLAY & PROTOCOLS • HACK WITH INDIA
            </span>
          </div>
          <h2 className="d text-3xl sm:text-5xl md:text-7xl tracking-tight text-white drop-shadow-md">
            <small className="font-inter text-xs md:text-sm tracking-[0.3em] text-[#ff3d8b] mb-2 block font-bold">MISSION PROTOCOLS</small>
            RULES &amp; <span className="g">GUIDELINES</span>
          </h2>
          <p className="font-inter text-pink text-sm md:text-lg font-bold uppercase tracking-[0.14em] mt-2 max-w-xl mx-auto">
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
              <div className="flex items-center justify-between text-xs font-black uppercase">
                <span>TEAM PASS: <strong>2–4 MEMBERS</strong></span>
                <span className="text-[#e63946]">ANY DOMAIN • UNIFIED PRIZE</span>
              </div>
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

        {/* Past Sponsors Strip */}
        <div className="comic-box bg-[#13111c] border-2 border-neutral-800 p-6 rounded-xl text-center shadow-[6px_6px_0px_#000]">
          <span className="text-xs font-bold uppercase tracking-widest text-pink block mb-5">
            PAST SPONSORS • ORGANISED BY HACK WITH INDIA
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {HACKATHON_DETAILS.sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className={`px-3.5 py-2 rounded-lg border border-black/30 flex items-center justify-center h-12 sm:h-14 w-28 sm:w-32 transition-transform hover:scale-105 ${
                  sponsor.theme === "dark" ? "bg-[#1b1729]" : "bg-[#f8f7f2]"
                }`}
                title={`${sponsor.name} — Past Sponsor`}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RulesAndFaq;
