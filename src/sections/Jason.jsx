import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Check, Sparkles } from "lucide-react";

const Jason = () => {
  useGSAP(() => {
    // 1. Preserve original signature parallax scrub on right image column
    gsap.to('.jason .img-box', {
      scrollTrigger: {
        trigger: '.jason',
        start: 'top center',
        end: '80% center',
        scrub: 1.5,
      },
      y: -180,
      duration: 1,
      ease: 'power1.inOut',
    });

    // 2. Scroll-driven appearance animation for each image
    ['.jason-1', '.jason-2', '.jason-3'].forEach((selector) => {
      gsap.fromTo(
        selector,
        {
          opacity: 0.25,
          scale: 0.94,
          filter: 'brightness(0.7)',
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'brightness(1)',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: selector,
            start: 'top 85%',
            end: 'top 45%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section id="about" className="jason">
      <div className="max-w-xl jason-content z-20">
        
        {/* Top Tag Kicker */}
        <div className="inline-block mb-4">
          <span className="tag !rotate-0 mb-0 text-xs px-3.5 py-1.5 font-bold inline-flex items-center gap-1.5 bg-[#fff9cb] text-black shadow-[3px_3px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5 text-[#e63946]" />
            NATIONAL INNOVATION MOVEMENT // HACK WITH INDIA
          </span>
        </div>

        {/* Section Headline & Mission */}
        <h1>ABOUT HWI</h1>
        <h2>BRIDGING ACADEMIC THEORY WITH REAL-WORLD ENGINEERING.</h2>
        <p>
          <strong>Hack With India (HWI)</strong> is a premier nationwide developer collective dedicated to dismantling the gap between classroom textbooks and battle-tested production engineering. We empower student builders, researchers, and innovators to solve critical real-world challenges through <strong>high-octane hackathons</strong>, <strong>1-on-1 industry mentorship</strong>, <strong>deep-dive technical workshops</strong>, and <strong>hands-on technical innovation</strong>.
        </p>

        {/* GTA-Style Comic Blueprint Card */}
        <div className="comic-box bg-[#fff9cb] text-black p-5 sm:p-6 my-8 rounded-lg shadow-[6px_6px_0px_#e63946]">
          <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
            <div>
              <span className="text-[10px] font-black uppercase text-[#e63946] tracking-wider block">
                CORE COMMUNITY BLUEPRINT
              </span>
              <h3 className="font-round-bold text-xl sm:text-2xl font-black uppercase leading-tight">
                HOW WE BUILD BUILDERS
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-round-bold font-black text-[#e63946]">HWI</span>
              <span className="text-[10px] font-bold block text-neutral-700">Pan-India</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold mb-5">
            <div className="flex items-start gap-2 bg-white/75 p-2.5 rounded border border-black/20 shadow-sm">
              <Check className="w-4 h-4 text-[#e63946] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-black uppercase tracking-tight">HIGH-OCTANE HACKATHONS</strong>
                <span className="text-neutral-700 text-[11px] leading-snug">36-hour sprint arenas to design, ship & pitch production-grade software and hardware.</span>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/75 p-2.5 rounded border border-black/20 shadow-sm">
              <Check className="w-4 h-4 text-[#e63946] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-black uppercase tracking-tight">1-ON-1 MENTORSHIP</strong>
                <span className="text-neutral-700 text-[11px] leading-snug">Direct technical reviews and war-room guidance from seasoned industry architects.</span>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/75 p-2.5 rounded border border-black/20 shadow-sm">
              <Check className="w-4 h-4 text-[#e63946] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-black uppercase tracking-tight">DEEP-DIVE WORKSHOPS</strong>
                <span className="text-neutral-700 text-[11px] leading-snug">Zero-fluff masterclasses on AI/ML, Cloud Architecture, Systems & Full-Stack.</span>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white/75 p-2.5 rounded border border-black/20 shadow-sm">
              <Check className="w-4 h-4 text-[#e63946] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-black uppercase tracking-tight">HANDS-ON INNOVATION</strong>
                <span className="text-neutral-700 text-[11px] leading-snug">From abstract logic to functional deployment on Unstop, GitHub & cloud infrastructure.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Left Column Image (Appears driven by scroll) */}
        <div className="jason-2">
          <img src="/images/jason-2.webp" alt="Hack With India Hands-on Coding" />
        </div>
      </div>

      {/* Right Column Images (Preserving layout with scroll-driven parallax and appearance) */}
      <div className="space-y-5 mt-10 lg:mt-96 img-box z-10">
        <div className="jason-1">
          <img src="/images/jason-1.webp" alt="Hack With India Hackathon Arena" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" alt="Hack With India Mentorship & Code Review" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
