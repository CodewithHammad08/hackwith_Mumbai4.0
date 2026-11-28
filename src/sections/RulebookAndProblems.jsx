import { useState } from "react";
import { FileText, Download, Lock, Shield, Eye, X, ExternalLink } from "lucide-react";

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
    <section id="rulebook" className="relative py-20 md:py-28 px-4 sm:px-6 md:px-16 z-30 overflow-hidden">
      {/* Background GTA Artwork (Franklin & Chop) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/images/rulebook-bg.jpg"
          alt="GTA Rulebook & Problems Backdrop"
          className="w-full h-full object-cover object-[center_12%]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-2.5">
            <span className="tag !rotate-0 mb-0 text-xs px-3.5 py-1 uppercase font-bold inline-flex items-center gap-2 bg-[#ffb0c4] text-black shadow-[3px_3px_0px_#000]">
              <Shield className="w-4 h-4 text-[#e63946]" />
              OFFICIAL EVENT PORTAL • BVUDET NM CAMPUS
            </span>
          </div>
          <h2
            className="d text-3xl sm:text-5xl md:text-6xl tracking-tight text-white"
            style={{ textShadow: "3px 3px 0px #000, 0 6px 24px rgba(0,0,0,0.9)" }}
          >
            <small className="font-inter text-xs md:text-sm tracking-[0.3em] text-[#ff3d8b] mb-2 block font-bold">REGISTRATION DECK</small>
            RULEBOOK &amp; <span className="g">PROBLEMS</span>
          </h2>
          <p className="font-inter text-gray-100 text-sm md:text-base font-medium max-w-xl mx-auto mt-3 leading-relaxed bg-black/65 px-4 py-2 rounded-lg border border-white/10 shadow-lg">
            Download the official Hack With India brochure, review protocols, and prepare your squad (2–4 members) before the 36-hour clock starts ticking.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Rulebook Download Card */}
          <div className="comic-box bg-[#14111f]/75 border-3 border-black text-white p-6 md:p-8 rounded-xl flex flex-col justify-between shadow-[8px_8px_0px_#e63946] relative overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-2.5 hover:bg-[#191528]/90 hover:border-[#e63946] hover:shadow-[12px_12px_0px_#e63946,0_22px_44px_rgba(230,57,70,0.28)]">
            {/* Diagonal Neon Sheen Sweep */}
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
              aria-hidden="true"
            />

            <div className="absolute top-0 right-0 bg-[#e63946] text-white text-[11px] font-black uppercase px-3 py-1 border-b-2 border-l-2 border-black tracking-wider transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5">
              OFFICIAL BROCHURE (PDF)
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-[#e63946]/20 border border-[#e63946]/60 flex items-center justify-center text-[#ffb0c4] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-[#e63946] group-hover:border-black group-hover:shadow-[3px_3px_0px_#000]">
                <FileText className="w-6 h-6 text-[#ffb0c4] transition-colors duration-300 group-hover:text-white" />
              </div>

              <h3 className="font-round-bold text-2xl md:text-3xl font-black uppercase text-[#fff9cb] leading-tight mb-2 transition-colors duration-300 group-hover:text-white">
                OFFICIAL HWI BROCHURE &amp; RULEBOOK
              </h3>
              
              <p className="text-xs md:text-sm text-gray-200 mb-6 leading-relaxed">
                The authoritative Hack With India guidebook featuring complete competition guidelines, team rules (<strong className="text-white">strictly 2–4 members</strong>), venue schedules, judging rubrics, and submission protocols.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleDownloadRulebook}
                className="w-full sm:w-auto flex-1 comic-box bg-[#e63946] hover:bg-[#d62839] text-white py-3 px-4 text-xs md:text-sm font-round-bold font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_#000] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD BROCHURE</span>
              </button>

              <button
                onClick={() => setIsRulebookOpen(true)}
                className="w-full sm:w-auto comic-box-sm bg-[#fff9cb] hover:bg-white text-black py-3 px-4 text-xs font-round-bold font-black uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-[3px_3px_0px_#000] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]"
              >
                <Eye className="w-4 h-4" />
                <span>PREVIEW</span>
              </button>
            </div>
          </div>

          {/* Locked Problem Statements Card */}
          <div className="comic-box bg-[#14111f]/75 border-3 border-black text-white p-6 md:p-8 rounded-xl flex flex-col justify-between shadow-[8px_8px_0px_#000] relative overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-2.5 hover:bg-[#191528]/90 hover:border-[#ffd23f] hover:shadow-[12px_12px_0px_#ffd23f,0_22px_44px_rgba(255,210,63,0.22)]">
            {/* Diagonal Gold Sheen Sweep */}
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-[#ffd23f]/15 to-transparent skew-x-[-20deg]"
              aria-hidden="true"
            />

            <div className="absolute top-0 right-0 bg-[#ffd23f] text-black text-[11px] font-black uppercase px-3 py-1 border-b-2 border-l-2 border-black tracking-wider flex items-center gap-1 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5">
              <Lock className="w-3 h-3 text-black" />
              LOCKED & EMBARGOED
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 border border-yellow-500/40 flex items-center justify-center text-[#ffd23f] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#ffd23f] group-hover:border-black group-hover:shadow-[3px_3px_0px_#000]">
                <Lock className="w-6 h-6 text-[#ffd23f] animate-pulse transition-colors duration-300 group-hover:text-black group-hover:animate-none" />
              </div>

              <h3 className="font-round-bold text-2xl md:text-3xl font-black uppercase text-white leading-tight mb-2 transition-colors duration-300 group-hover:text-[#ffd23f]">
                DOMAIN PROBLEM STATEMENTS
              </h3>
              
              <p className="text-xs md:text-sm text-gray-300 mb-6 leading-relaxed">
                All official domain statements, curated industry briefs, and real-world sponsor challenge tracks are encrypted and will be unveiled simultaneously at kickoff.
              </p>
            </div>

            <div className="relative z-10">
              <button
                disabled
                className="w-full comic-box-sm bg-neutral-800/80 text-neutral-400 py-3 px-4 text-xs md:text-sm font-round-bold font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed border-2 border-neutral-700 select-none transition-all duration-300 group-hover:border-[#ffd23f]/45 group-hover:text-neutral-200 group-hover:bg-neutral-800/95"
              >
                <Lock className="w-4 h-4 text-neutral-400 transition-colors duration-300 group-hover:text-[#ffd23f]" />
                <span>PROBLEM STATEMENTS LOCKED (DROPS AT KICKOFF)</span>
              </button>
              <div className="text-[11px] text-center text-neutral-400 mt-2 font-medium transition-colors duration-300 group-hover:text-neutral-200">
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
                <span>👥 2–4 Members</span>
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
