import { Trophy, Check, ExternalLink } from "lucide-react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";

const Prizes = ({ onOpenRegister }) => {
  return (
    <section id="prizes" className="relative py-24 px-6 md:px-16 z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <span className="comic-badge text-xs md:text-sm px-4 py-1.5 uppercase font-black inline-flex items-center gap-2 bg-[#ffd23f] text-black">
              <Trophy className="w-4 h-4 text-[#e63946]" />
              NATIONAL BOUNTY MATRIX • HACK WITH INDIA
            </span>
          </div>
          <h2 className="font-round-bold text-5xl md:text-8xl font-black uppercase tracking-tight text-yellow drop-shadow-[0_4px_16px_rgba(255,249,203,0.3)]">
            ₹1,50,000 PODIUM
          </h2>
          <p className="text-[#ffb0c4] text-base md:text-xl font-bold uppercase tracking-wider mt-2 max-w-2xl mx-auto">
            1ST: ₹75K • 2ND: ₹50K • 3RD: ₹25K
          </p>
          <div className="mt-3 inline-block bg-[#1c1829] border border-neutral-700 px-4 py-1.5 rounded-full text-xs text-neutral-300">
            ★ <strong className="text-yellow">One Unified Grand Prize:</strong> No separate domain restrictions — every squad (2–5 members) contends on one national leaderboard!
          </div>
        </div>

        {/* Podium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end mb-16">
          
          {/* 2nd Place (Left) */}
          <div className="comic-box bg-[#fff9cb] text-black p-6 rounded-xl flex flex-col justify-between order-2 md:order-1 hover:-translate-y-2 transition-transform duration-300 shadow-[6px_6px_0px_#000]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="comic-badge text-xs px-2.5 py-0.5 bg-[#ffb0c4] text-black">
                  2ND PLACE
                </span>
                <span className="text-xs font-mono font-black bg-black text-white px-2 py-0.5 rounded">
                  PODIUM SILVER
                </span>
              </div>
              <h3 className="font-round-bold text-2xl font-black uppercase leading-tight">
                FIRST RUNNER-UP
              </h3>
              <div className="text-4xl font-round-bold font-black text-[#e63946] my-2">
                ₹50,000
              </div>
              <ul className="space-y-2 text-xs font-bold text-neutral-800 my-4 border-t border-black/20 pt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-700 shrink-0" />
                  <span>₹50,000 Direct Cash Prize</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-700 shrink-0" />
                  <span>Silver Trophy & Winner Certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-700 shrink-0" />
                  <span>₹25,000 Cloud & API Credits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-700 shrink-0" />
                  <span>Summer Internship Interview Fast-Track</span>
                </li>
              </ul>
            </div>
            <a
              href={HACKATHON_DETAILS.unstopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full comic-box-sm bg-black hover:bg-neutral-800 text-white py-2.5 px-3 text-xs font-round-bold font-black uppercase tracking-wider cursor-pointer mt-2 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>REGISTER SQUAD ON UNSTOP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 1st Place (Center - Highlighted) */}
          <div className="comic-box bg-[#e63946] text-white p-7 md:p-8 rounded-xl flex flex-col justify-between order-1 md:order-2 md:-translate-y-4 shadow-[8px_8px_0px_#fff9cb] hover:-translate-y-6 transition-transform duration-300">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="comic-badge text-xs px-3 py-1 bg-[#ffd23f] text-black">
                  👑 NATIONAL CHAMPION
                </span>
                <span className="text-xs font-mono font-black bg-white text-black px-2.5 py-0.5 rounded">
                  GRAND PRIZE
                </span>
              </div>
              <h3 className="font-round-bold text-3xl md:text-4xl font-black uppercase leading-tight text-white">
                GRAND CHAMPION
              </h3>
              <div className="text-5xl md:text-6xl font-round-bold font-black text-[#fff9cb] my-3 drop-shadow-md">
                ₹75,000
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm font-bold text-white/95 my-5 border-t border-white/30 pt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ffd23f] shrink-0" />
                  <span>₹75,000 Direct Cash Prize</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ffd23f] shrink-0" />
                  <span>Grand Championship Cup + Medals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ffd23f] shrink-0" />
                  <span>Direct VC Incubation Pitch Opportunity</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ffd23f] shrink-0" />
                  <span>₹50,000 Cloud Infrastructure Grant</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#ffd23f] shrink-0" />
                  <span>Official Hack With India Wall of Fame</span>
                </li>
              </ul>
            </div>
            <a
              href={HACKATHON_DETAILS.unstopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full comic-box bg-[#fff9cb] hover:bg-white text-black py-3 px-4 text-sm font-round-bold font-black uppercase tracking-wider cursor-pointer shadow-[4px_4px_0px_#000] mt-2 flex items-center justify-center gap-2 transition-colors"
            >
              <span>REGISTER SQUAD TO WIN ₹75,000</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* 3rd Place (Right) */}
          <div className="comic-box bg-[#fff9cb] text-black p-6 rounded-xl flex flex-col justify-between order-3 hover:-translate-y-2 transition-transform duration-300 shadow-[6px_6px_0px_#000]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="comic-badge text-xs px-2.5 py-0.5 bg-yellow text-black">
                  3RD PLACE
                </span>
                <span className="text-xs font-mono font-black bg-black text-white px-2 py-0.5 rounded">
                  PODIUM BRONZE
                </span>
              </div>
              <h3 className="font-round-bold text-2xl font-black uppercase leading-tight">
                SECOND RUNNER-UP
              </h3>
              <div className="text-4xl font-round-bold font-black text-[#e63946] my-2">
                ₹25,000
              </div>
              <ul className="space-y-2 text-xs font-bold text-neutral-800 my-4 border-t border-black/20 pt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-700 shrink-0" />
                  <span>₹25,000 Direct Cash Prize</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-700 shrink-0" />
                  <span>Bronze Memento & Badges</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-700 shrink-0" />
                  <span>₹15,000 Cloud Credits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-700 shrink-0" />
                  <span>Exclusive Swag Kit & Goodies</span>
                </li>
              </ul>
            </div>
            <a
              href={HACKATHON_DETAILS.unstopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full comic-box-sm bg-black hover:bg-neutral-800 text-white py-2.5 px-3 text-xs font-round-bold font-black uppercase tracking-wider cursor-pointer mt-2 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>REGISTER SQUAD (2-5 MEMBERS)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Special Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HACKATHON_DETAILS.specialBounties.map((bounty) => (
            <div
              key={bounty.title}
              className="comic-box bg-[#1b1828] border-2 border-neutral-700 p-5 rounded-lg text-white shadow-[4px_4px_0px_#000]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-black text-[#ffd23f] bg-black/50 px-2 py-0.5 rounded">
                  SPECIAL BOUNTY
                </span>
                <span className="text-xl font-round-bold font-black text-[#e63946]">
                  {bounty.amount}
                </span>
              </div>
              <h4 className="font-round-bold text-lg font-black uppercase text-white mt-1">
                {bounty.title}
              </h4>
              <p className="text-xs text-gray-300 font-sans mt-1">
                {bounty.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Prizes;
