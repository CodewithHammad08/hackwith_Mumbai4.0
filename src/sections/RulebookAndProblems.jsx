import { useState } from "react";
import { FileText, Download, Lock, Shield, Eye, X, CheckCircle2, ExternalLink } from "lucide-react";

const BROCHURE_URL = "/readme/HWI%20BROCHERS%20.pdf";

const RulebookAndProblems = () => {
  const [isRulebookOpen, setIsRulebookOpen] = useState(false);

  const handleDownloadRulebook = () => {
    const link = document.createElement("a");
    link.href = BROCHURE_URL;
    link.download = "Hack_With_India_Official_Brochure.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            Download the official Hack With India brochure, review protocols, and prepare your squad (2–5 members) before the 36-hour clock starts ticking.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Rulebook Download Card */}
          <div className="comic-box bg-[#1b1828] border-3 border-black text-white p-6 md:p-8 rounded-xl flex flex-col justify-between shadow-[8px_8px_0px_#e63946] relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-[#e63946] text-white text-[11px] font-black uppercase px-3 py-1 border-b-2 border-l-2 border-black tracking-wider">
              OFFICIAL BROCHURE (PDF)
            </div>

            <div>
              <div className="w-12 h-12 rounded-lg bg-[#e63946]/20 border border-[#e63946]/60 flex items-center justify-center text-[#ffb0c4] mb-4">
                <FileText className="w-6 h-6 text-[#ffb0c4]" />
              </div>

              <h3 className="font-round-bold text-2xl md:text-3xl font-black uppercase text-[#fff9cb] leading-tight mb-2">
                OFFICIAL HWI BROCHURE & RULEBOOK
              </h3>
              
              <p className="text-xs md:text-sm text-gray-300 mb-5 leading-relaxed">
                The authoritative Hack With India guidebook featuring complete competition guidelines, team rules (**strictly 2–5 members**), venue schedules, judging rubrics, and submission protocols.
              </p>

              <div className="space-y-2 border-t border-neutral-800 pt-4 mb-6 text-xs text-neutral-300 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Strictly 2–5 members per squad (cross-college permitted)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Grand unified ₹1,50,000 podium prize pool</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>100% intellectual property retained by squad</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Official PDF Document with interactive preview available</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleDownloadRulebook}
                className="w-full sm:w-auto flex-1 comic-box bg-[#e63946] hover:bg-[#d62839] text-white py-3 px-4 text-xs md:text-sm font-round-bold font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_#000] transition-transform active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD BROCHURE</span>
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

      {/* Interactive Official Brochure & Rulebook PDF Preview Modal */}
      {isRulebookOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-5xl bg-[#14121f] border-3 border-black comic-box text-white rounded-xl overflow-hidden shadow-[12px_12px_0px_#e63946] max-h-[94vh] flex flex-col">
            
            {/* Header */}
            <div className="bg-[#fff9cb] text-black px-4 sm:px-6 py-3.5 flex items-center justify-between border-b-3 border-black gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="bg-[#e63946] text-white px-2.5 py-0.5 text-xs font-black uppercase rounded-sm shrink-0 shadow-[2px_2px_0px_#000]">
                  OFFICIAL PDF
                </span>
                <h3 className="font-round-bold text-sm sm:text-base md:text-lg font-black uppercase truncate">
                  Hack With India — Official Brochure & Rulebook
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={BROCHURE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase rounded transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open In New Tab</span>
                </a>

                <button
                  onClick={handleDownloadRulebook}
                  className="hidden xs:inline-flex items-center gap-1.5 px-3 py-1 bg-[#e63946] hover:bg-[#d62839] text-white text-xs font-black uppercase rounded transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>

                <button
                  onClick={() => setIsRulebookOpen(false)}
                  className="p-1.5 hover:bg-black hover:text-white rounded-md transition-colors cursor-pointer text-black"
                  aria-label="Close brochure preview modal"
                >
                  <X className="w-5 h-5 stroke-[3]" />
                </button>
              </div>
            </div>

            {/* Interactive PDF Viewer Container */}
            <div className="relative flex-1 w-full bg-[#0a0a0f] p-2 sm:p-4 overflow-hidden flex flex-col">
              <div className="relative w-full h-[62vh] sm:h-[68vh] md:h-[72vh] rounded-lg overflow-hidden border-2 border-black bg-neutral-900 shadow-inner">
                <object
                  data={`${BROCHURE_URL}#toolbar=1&navpanes=1&scrollbar=1`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <iframe
                    src={`${BROCHURE_URL}#toolbar=1&navpanes=1&scrollbar=1`}
                    title="Hack With India Official Brochure & Rulebook"
                    className="w-full h-full border-0"
                  >
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-200">
                      <FileText className="w-16 h-16 text-[#ffb0c4] mb-3" />
                      <p className="text-base font-bold mb-2">PDF Preview Unavailable directly in this browser view.</p>
                      <p className="text-xs text-gray-400 mb-4 max-w-md">
                        Your browser may not support inline embedded PDFs. You can open or download the official Hack With India brochure directly:
                      </p>
                      <div className="flex items-center gap-3">
                        <a
                          href={BROCHURE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-[#fff9cb] text-black font-black uppercase text-xs rounded hover:bg-white"
                        >
                          Open PDF in New Tab
                        </a>
                        <button
                          onClick={handleDownloadRulebook}
                          className="px-4 py-2 bg-[#e63946] text-white font-black uppercase text-xs rounded hover:bg-[#d62839]"
                        >
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </iframe>
                </object>
              </div>
            </div>

            {/* Modal Footer with Highlights */}
            <div className="bg-[#191624] px-4 sm:px-6 py-3 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-300 font-mono text-[11px] sm:text-xs">
                <span>📍 BVUDET NM Campus</span>
                <span>⏱️ 36 Hours</span>
                <span>👥 2–5 Members</span>
                <span>🏆 ₹1,50,000 Podium</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href={BROCHURE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden comic-box-sm bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 text-xs font-bold uppercase flex items-center gap-1 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Fullscreen</span>
                </a>
                <button
                  onClick={handleDownloadRulebook}
                  className="comic-box-sm bg-[#e63946] hover:bg-[#d62839] text-white px-4 py-1.5 text-xs font-black uppercase flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
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
