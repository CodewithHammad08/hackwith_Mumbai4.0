import { useState } from "react";
import { FileText, Download, Lock, Shield, Eye, X, CheckCircle2 } from "lucide-react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";

const RulebookAndProblems = () => {
  const [isRulebookOpen, setIsRulebookOpen] = useState(false);

  const handleDownloadRulebook = () => {
    // Generate a downloadable text/markdown rulebook file dynamically
    const rulebookContent = `=====================================================
⚡ HACK WITH MUMBAI 4.0 — OFFICIAL HACKATHON RULEBOOK
Organised by Hack With India • BVUDET Navi Mumbai
=====================================================
Date: 24-25 September 2026 (36 Hours Non-Stop)
Venue: BVUDET NM Campus, Navi Mumbai
Grand Prize Pool: ₹1,50,000+ Podium (1st: ₹75k, 2nd: ₹50k, 3rd: ₹25k)
Registration Link: https://unstop.com
Pass: Team Squad Pass (2 to 5 Members) — ₹200 Total

1. ELIGIBILITY & TEAM COMPOSITION
- Teams must consist strictly of 2 to 5 members. Entries below 2 members are not permitted.
- Cross-college, cross-department, and cross-institutional teams are 100% permitted.
- All participants must carry a valid college/government photo ID.

2. DOMAIN & TECH STACK FREEDOM
- Choose ANY domain: AI/ML, Web Development, Mobile Apps, Cloud Infra, Cybersecurity, Web3, or Open Innovation / Wildcard.
- There are no segregated track budgets. All squads compete head-to-head for the unified grand podium.

3. HACKATHON PROTOCOLS & CODE CONDUCT
- All project code must be written within the 36-hour hackathon window.
- Pre-built codebases or pre-existing products are strictly prohibited and will lead to immediate disqualification.
- Open-source libraries, frameworks, APIs, and starter templates are allowed provided they are declared in the submission.
- All code must be committed to a public GitHub repository with regular timestamped commits.

4. INTELLECTUAL PROPERTY
- Participants retain 100% ownership and intellectual property rights of everything they design and build.

5. JUDGING CRITERIA (100 POINTS)
- Innovation & Originality (25 pts)
- Technical Complexity & Architecture (25 pts)
- Execution & Working Prototype (25 pts)
- UI / UX & Design Polish (15 pts)
- Pitch & Presentation Clarity (10 pts)

6. PRIZE DISBURSAL
- Podium cash prizes (₹75,000, ₹50,000, ₹25,000) are disbursed via direct bank transfer within 7 business days following the ceremony.

=====================================================
Hack With India • Empowering India's Next-Gen Builders
=====================================================`;

    const blob = new Blob([rulebookContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "HackWithMumbai_4.0_Official_Rulebook.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="rulebook" className="relative py-14 md:py-20 px-4 sm:px-6 md:px-16 z-30 overflow-hidden bg-[#0d0c15] border-t-2 border-b-2 border-black/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block mb-2.5">
            <span className="comic-badge text-xs px-3.5 py-1 uppercase font-black inline-flex items-center gap-2 bg-[#ffb0c4] text-black shadow-[3px_3px_0px_#000]">
              <Shield className="w-4 h-4 text-[#e63946]" />
              OFFICIAL EVENT PORTAL • BVUDET NM CAMPUS
            </span>
          </div>
          <h2 className="font-round-bold text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_16px_rgba(255,249,203,0.15)]">
            RULEBOOK & PROBLEMS
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-xl mx-auto mt-2">
            Review competition protocols and prepare your squad (2–5 members) before the 36-hour clock starts ticking.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Rulebook Download Card */}
          <div className="comic-box bg-[#1b1828] border-3 border-black text-white p-6 md:p-8 rounded-xl flex flex-col justify-between shadow-[8px_8px_0px_#e63946] relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-[#e63946] text-white text-[11px] font-black uppercase px-3 py-1 border-b-2 border-l-2 border-black tracking-wider">
              READY TO DOWNLOAD
            </div>

            <div>
              <div className="w-12 h-12 rounded-lg bg-[#e63946]/20 border border-[#e63946]/60 flex items-center justify-center text-[#ffb0c4] mb-4">
                <FileText className="w-6 h-6 text-[#ffb0c4]" />
              </div>

              <h3 className="font-round-bold text-2xl md:text-3xl font-black uppercase text-[#fff9cb] leading-tight mb-2">
                OFFICIAL RULEBOOK & CODE OF CONDUCT
              </h3>
              
              <p className="text-xs md:text-sm text-gray-300 mb-5 leading-relaxed">
                The authoritative guidelines covering team composition (**strictly 2–5 members**), submission standards, code freeze timelines, GitHub audit rules, and 5-factor judging rubrics.
              </p>

              <div className="space-y-2 border-t border-neutral-800 pt-4 mb-6 text-xs text-neutral-300 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Strictly 2–5 members per squad (cross-college allowed)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>100% intellectual property retained by team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Transparent 100-point judging breakdown</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleDownloadRulebook}
                className="w-full sm:w-auto flex-1 comic-box bg-[#e63946] hover:bg-[#d62839] text-white py-3 px-4 text-xs md:text-sm font-round-bold font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_#000] transition-transform active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RULEBOOK</span>
              </button>

              <button
                onClick={() => setIsRulebookOpen(true)}
                className="w-full sm:w-auto comic-box-sm bg-[#fff9cb] hover:bg-white text-black py-3 px-4 text-xs font-round-bold font-black uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-[3px_3px_0px_#000] transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>PREVIEW</span>
              </button>
            </div>
          </div>

          {/* Locked Problem Statements Card */}
          <div className="comic-box bg-[#151320] border-3 border-black text-white p-6 md:p-8 rounded-xl flex flex-col justify-between shadow-[8px_8px_0px_#000] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#ffd23f] text-black text-[11px] font-black uppercase px-3 py-1 border-b-2 border-l-2 border-black tracking-wider flex items-center gap-1">
              <Lock className="w-3 h-3 text-black" />
              LOCKED & EMBARGOED
            </div>

            <div>
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 border border-yellow-500/40 flex items-center justify-center text-[#ffd23f] mb-4">
                <Lock className="w-6 h-6 text-[#ffd23f] animate-pulse" />
              </div>

              <h3 className="font-round-bold text-2xl md:text-3xl font-black uppercase text-white leading-tight mb-2">
                DOMAIN PROBLEM STATEMENTS
              </h3>
              
              <p className="text-xs md:text-sm text-gray-300 mb-5 leading-relaxed">
                All official domain statements, curated industry briefs, and real-world sponsor challenge tracks are encrypted and will be unveiled simultaneously at kickoff.
              </p>

              {/* Status Box */}
              <div className="bg-[#0b0a11] border border-neutral-800 p-4 rounded-lg mb-6 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-bold uppercase">Status</span>
                  <span className="text-[#ffd23f] font-mono font-black flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                    ENCRYPTED & EMBARGOED
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-neutral-800/80 pt-2">
                  <span className="text-gray-400 font-bold uppercase">Release Date</span>
                  <span className="text-white font-mono font-bold">24 Sept 2026 • 10:00 AM IST</span>
                </div>
                <div className="flex items-center justify-between border-t border-neutral-800/80 pt-2">
                  <span className="text-gray-400 font-bold uppercase">Location</span>
                  <span className="text-[#ffb0c4] font-semibold">BVUDET NM Campus & Discord</span>
                </div>
              </div>
            </div>

            <div>
              <button
                disabled
                className="w-full comic-box-sm bg-neutral-800/80 text-neutral-400 py-3 px-4 text-xs md:text-sm font-round-bold font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed border-2 border-neutral-700 select-none"
              >
                <Lock className="w-4 h-4 text-neutral-400" />
                <span>PROBLEM STATEMENTS LOCKED (DROPS AT KICKOFF)</span>
              </button>
              <div className="text-[11px] text-center text-neutral-400 mt-2 font-medium">
                ★ Register your squad on Unstop to receive instant problem statement notification.
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Rulebook Preview Modal */}
      {isRulebookOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#14121f] border-3 border-black comic-box text-white rounded-xl overflow-hidden shadow-[10px_10px_0px_#e63946] max-h-[88vh] flex flex-col">
            
            {/* Header */}
            <div className="bg-[#fff9cb] text-black px-4 sm:px-5 py-3 flex items-center justify-between border-b-3 border-black">
              <div className="flex items-center gap-2">
                <span className="bg-[#e63946] text-white px-2 py-0.5 text-xs font-black uppercase rounded-sm">
                  OFFICIAL RULEBOOK
                </span>
                <h3 className="font-round-bold text-sm sm:text-base md:text-lg font-black uppercase">
                  Hack With Mumbai 4.0
                </h3>
              </div>
              <button
                onClick={() => setIsRulebookOpen(false)}
                className="p-1 hover:bg-black hover:text-white rounded transition-colors cursor-pointer"
                aria-label="Close rulebook modal"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-3 sm:space-y-4 text-xs md:text-sm text-gray-200">
              <div className="bg-[#1e1b2d] p-3.5 rounded border border-neutral-700">
                <h4 className="font-round-bold text-sm uppercase text-[#ffd23f] mb-1">
                  1. Team Composition (Strictly 2–5 Members)
                </h4>
                <p className="text-gray-300">
                  Every squad must have between 2 and 5 members. Entries below 2 members are not permitted. Cross-college and multi-disciplinary teams are strongly encouraged.
                </p>
              </div>

              <div className="bg-[#1e1b2d] p-3.5 rounded border border-neutral-700">
                <h4 className="font-round-bold text-sm uppercase text-[#ffd23f] mb-1">
                  2. Choose Any Domain (Unified Grand Prize)
                </h4>
                <p className="text-gray-300">
                  Teams have complete freedom to choose ANY domain (AI/ML, Web, Mobile, Cloud, Cyber, Web3, or Open Wildcard). All squads compete together for the ₹1,50,000 podium (1st: ₹75k, 2nd: ₹50k, 3rd: ₹25k).
                </p>
              </div>

              <div className="bg-[#1e1b2d] p-3.5 rounded border border-neutral-700">
                <h4 className="font-round-bold text-sm uppercase text-[#ffd23f] mb-1">
                  3. Originality & Codebase Lock
                </h4>
                <p className="text-gray-300">
                  All code must be written within the 36-hour hackathon period. Open-source libraries and public frameworks are permitted, but core project logic must be authored during the event.
                </p>
              </div>

              <div className="bg-[#1e1b2d] p-3.5 rounded border border-neutral-700">
                <h4 className="font-round-bold text-sm uppercase text-[#ffd23f] mb-1">
                  4. Public GitHub Commits
                </h4>
                <p className="text-gray-300">
                  Repositories must be public on GitHub with frequent timestamped commits throughout the 36 hours. Dump commits at the last minute are penalized during evaluation.
                </p>
              </div>

              <div className="bg-[#1e1b2d] p-3.5 rounded border border-neutral-700">
                <h4 className="font-round-bold text-sm uppercase text-[#ffd23f] mb-1">
                  5. 100% IP Ownership
                </h4>
                <p className="text-gray-300">
                  You and your squad retain complete, unencumbered ownership of all code, intellectual property, and prototypes built during Hack With Mumbai 4.0.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#191624] px-5 py-3 border-t-2 border-black flex items-center justify-between gap-3">
              <span className="text-xs text-neutral-400 font-mono">
                BVUDET NM Campus • 24-25 Sept 2026
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadRulebook}
                  className="comic-box-sm bg-[#e63946] hover:bg-[#d62839] text-white px-4 py-1.5 text-xs font-black uppercase flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Copy</span>
                </button>
                <button
                  onClick={() => setIsRulebookOpen(false)}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 text-xs font-bold rounded cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default RulebookAndProblems;
