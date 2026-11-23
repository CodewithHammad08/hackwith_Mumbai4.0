import { useState } from "react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";
import { Sparkles, ArrowRight, Layers, Trophy, CheckCircle, Zap } from "lucide-react";

const Domains = ({ onOpenRegister }) => {
  const [activeFilter, setActiveFilter] = useState("ALL DOMAINS");

  const filterTabs = [
    "ALL DOMAINS",
    "AI & ML",
    "WEB DEVELOPMENT",
    "APP DEVELOPMENT",
    "CLOUD & CYBER",
    "BLOCKCHAIN",
    "OPEN INNOVATION"
  ];

  const filteredDomains = activeFilter === "ALL DOMAINS" 
    ? (HACKATHON_DETAILS.domains || []) 
    : (HACKATHON_DETAILS.domains || []).filter(d => 
        (d.category && d.category.toUpperCase().includes(activeFilter)) || 
        (Array.isArray(d.tags) && d.tags.some(tag => tag.toUpperCase().includes(activeFilter)))
      );

  return (
    <section id="domains" className="relative py-28 px-6 md:px-16 z-30 overflow-hidden">
      {/* Anchor for backward compatibility */}
      <span id="tracks" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <span className="comic-badge text-xs md:text-sm px-4 py-1.5 uppercase font-black inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#e63946]" />
              OPEN INNOVATION • ORGANISED BY HACK WITH INDIA
            </span>
          </div>
          <h2 className="font-round-bold text-4xl md:text-7xl font-black uppercase tracking-tight text-white drop-shadow-lg">
            CHOOSE ANY DOMAIN
          </h2>
          <p className="text-pink text-base md:text-2xl font-round-bold uppercase tracking-wider mt-2 font-bold">
            BUILD IN ANY DOMAIN YOU WANT • THE PRIZE IS ONLY ONE!
          </p>
        </div>

        {/* Unified Prize Callout Banner */}
        <div className="max-w-4xl mx-auto mb-12 comic-box bg-[#fff9cb] text-black p-5 md:p-6 rounded-2xl shadow-[6px_6px_0px_#e63946]">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-[#e63946] text-white rounded-xl shrink-0">
              <Trophy className="w-7 h-7" />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-[10px] md:text-xs font-black uppercase text-[#e63946] tracking-widest block">
                NO TRACK RESTRICTIONS • ONE UNIFIED PRIZE POOL
              </span>
              <h3 className="font-round-bold text-lg md:text-xl font-black uppercase leading-tight mt-0.5">
                Every Domain Competes on One Single National Leaderboard
              </h3>
              <p className="text-xs md:text-sm font-sans text-neutral-800 mt-1 leading-relaxed">
                You have <strong>100% freedom</strong> to choose <strong>any domain</strong> or combine multiple technologies together. There are no segregated track budgets — every project contends head-to-head for the <strong>₹1,50,000 Podium Prize Pool</strong>!
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-round-bold font-black uppercase tracking-wider rounded-md border-2 border-black transition-all cursor-pointer ${
                activeFilter === tab
                  ? "bg-[#fff9cb] text-black shadow-[4px_4px_0px_#e63946] -translate-y-0.5"
                  : "bg-[#181622] text-gray-400 hover:text-white hover:bg-[#232032]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Domains Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDomains.map((domain) => (
            <div
              key={domain.id}
              className="comic-box bg-[#fff9cb] text-black p-6 md:p-7 rounded-xl flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-300 shadow-[6px_6px_0px_#000]"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between mb-4">
                  <span className="comic-badge text-[11px] px-2.5 py-1 font-black bg-[#e63946] text-white border-black">
                    {domain.number}
                  </span>
                  <span className="text-[10px] md:text-xs font-mono font-black bg-black text-[#fff9cb] px-2.5 py-1 rounded">
                    ★ {domain.prize}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#e63946] flex items-center gap-1.5">
                    <span>{domain.icon}</span>
                    <span>{domain.badge}</span>
                  </span>
                  <h3 className="font-round-bold text-2xl font-black uppercase leading-tight mt-1 text-black">
                    {domain.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-neutral-800 leading-relaxed font-sans mb-4">
                  {domain.description}
                </p>

                <div className="bg-black/5 p-3.5 rounded-lg border border-black/20 mb-4">
                  <span className="text-[10px] font-black uppercase text-neutral-700 block mb-1">
                    DOMAIN SCOPE & CHALLENGE:
                  </span>
                  <p className="text-xs font-bold text-black italic">
                    "{domain.challenge}"
                  </p>
                </div>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {(domain.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold bg-white text-black px-2 py-0.5 border border-black rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onOpenRegister?.("team")}
                  className="w-full comic-box-sm bg-[#e63946] hover:bg-[#d62839] text-white py-3 px-4 font-round-bold text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-transform active:translate-y-0.5 shadow-[3px_3px_0px_#000]"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>CHOOSE THIS DOMAIN (COMING SOON)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Single Prize Banner */}
        <div className="mt-14 comic-box bg-[#1c1829] border-3 border-black p-6 md:p-8 rounded-xl text-center shadow-[8px_8px_0px_#e63946]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="comic-badge text-xs px-3 py-1 font-black bg-[#ffd23f] text-black">
                ONE OVERALL CHAMPIONSHIP • ₹1,50,000 PODIUM PRIZE POOL
              </span>
              <h4 className="font-round-bold text-2xl md:text-3xl font-black uppercase text-white mt-2">
                HACK IN ANY DOMAIN. WIN THE ULTIMATE PRIZE.
              </h4>
              <p className="text-xs md:text-sm text-gray-300 mt-1 max-w-xl">
                Whether you build an autonomous AI agent, a full-stack SaaS, a cross-platform mobile app, or a hardware hack — all domains compete equally for the grand cash prize, trophies, and direct VC incubation!
              </p>
            </div>

            <button
              onClick={() => onOpenRegister?.("team")}
              className="comic-box bg-[#fff9cb] hover:bg-white text-black font-round-bold font-black text-sm uppercase px-6 py-3.5 whitespace-nowrap cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-[4px_4px_0px_#000]"
            >
              PRE-REGISTER SQUAD (₹200)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Domains;
