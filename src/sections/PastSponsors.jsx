import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, Award } from "lucide-react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";

const PastSponsors = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;
      gsap.fromTo(
        gridRef.current.children,
        { y: 28, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 86%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="past-sponsors"
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 sm:px-6 md:px-16 z-30 overflow-hidden bg-[#0a0814] border-t-2 border-black"
    >
      {/* Ambient radial accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] bg-[radial-gradient(ellipse,rgba(230,57,70,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-block mb-3">
            <span className="tag !rotate-0 mb-0 text-xs sm:text-sm px-4 py-1.5 uppercase font-bold inline-flex items-center gap-2 bg-[#ffd23f] text-black shadow-[3px_3px_0px_#000]">
              <Award className="w-4 h-4 text-[#e63946]" />
              ARCHIVE // PAST SPONSORS
            </span>
          </div>

          <h2 className="d text-3xl sm:text-5xl md:text-7xl tracking-tight text-white drop-shadow-[0_4px_20px_rgba(230,57,70,0.45)]">
            <small className="font-inter text-xs md:text-sm tracking-[0.3em] text-[#ff3d8b] mb-2 block font-bold">
              SUPPORTED BY INDUSTRY LEADERS
            </small>
            PAST <span className="g">SPONSORS</span>
          </h2>

          <p className="font-inter text-pink text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.14em] mt-2 max-w-2xl mx-auto">
            Powering Innovation Across Past Hack With Mumbai Editions
          </p>
        </div>

        {/* Centered 9-Logo GTA Comic Cards Grid */}
        <div
          ref={gridRef}
          className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-6"
        >
          {HACKATHON_DETAILS.sponsors.map((sponsor) => {
            const isDark = sponsor.theme === "dark";
            return (
              <div
                key={sponsor.id || sponsor.name}
                className={`w-[calc(50%-0.5rem)] sm:w-[205px] md:w-[215px] comic-box border-3 border-black rounded-xl p-4 sm:p-5 flex flex-col items-center justify-between gap-3 transition-all duration-300 hover:-translate-y-1.5 shadow-[5px_5px_0px_#e63946] hover:shadow-[7px_7px_0px_#ffd23f] group ${
                  isDark
                    ? "bg-[#131020] text-white"
                    : "bg-[#f8f7f2] text-[#14111c]"
                }`}
              >
                {/* Logo Viewport */}
                <div className="w-full h-20 sm:h-24 flex items-center justify-center p-1.5 overflow-hidden">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} — Past Sponsor`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Sponsor Name + Past Sponsor Label */}
                <div
                  className={`w-full pt-2.5 border-t text-center ${
                    isDark ? "border-white/15" : "border-black/15"
                  }`}
                >
                  <div className="font-round-bold text-xs sm:text-sm font-black uppercase tracking-tight leading-tight">
                    {sponsor.name}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-widest mt-1 ${
                      isDark ? "text-[#ffd23f]" : "text-[#e63946]"
                    }`}
                  >
                    <Sparkles className="w-2.5 h-2.5" />
                    PAST SPONSOR
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PastSponsors;
