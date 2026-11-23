import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Users, Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const Jason = ({ onOpenRegister }) => {
  useGSAP(() => {
    gsap.to('.jason .img-box', {
      scrollTrigger: {
        trigger: '.jason',
        start: 'top center',
        end: '80% center',
        scrub: 1.5
      }, y: -150, duration: 1, ease: 'power1.inOut'
    });
  }, []);

  return (
    <section id="about" className="jason">
      <div className="max-w-xl jason-content z-20">
        <div className="inline-block mb-4">
          <span className="comic-badge text-xs px-3.5 py-1.5 font-black inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            TEAM PASS // ₹200 (2-5 MEMBERS) • ORGANISED BY HACK WITH INDIA
          </span>
        </div>

        <h1>THE ARCHITECTS</h1>
        <h2>2 to 5 minds. One shared vision. 36 hours of pure unadulterated engineering.</h2>
        <p>
          Built for ambitious squads who can conceptualize, architect, and ship a production-grade prototype before the 36-hour clock expires. Assemble 2 to 5 hackers from any college nationwide for <strong>Hack With Mumbai 4.0</strong>, combine your superpowers, and stake your claim on the <strong>₹1,50,000 podium prize pool</strong> plus official Hack With India accreditation.
        </p>

        {/* Comic Ticket Box */}
        <div className="comic-box bg-[#fff9cb] text-black p-5 my-8 rounded-lg shadow-[6px_6px_0px_#e63946]">
          <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-3">
            <div>
              <span className="text-[10px] font-black uppercase text-[#e63946] tracking-wider block">
                NATIONAL REGISTRATION TIER
              </span>
              <h3 className="font-round-bold text-xl font-black uppercase leading-tight">
                TEAM SQUAD PASS
              </h3>
            </div>
            <div className="text-right">
              <span className="text-2xl font-round-bold font-black text-[#e63946]">₹200</span>
              <span className="text-[10px] font-bold block text-neutral-700">Per Team (2-5 Devs)</span>
            </div>
          </div>

          <ul className="text-xs space-y-1.5 font-bold mb-4">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-700 shrink-0" />
              <span>Full 36-Hour Hackathon Arena Access for All 2-5 Members</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-700 shrink-0" />
              <span>Eligible for ₹75,000 Grand Champion Trophy across ANY Domain</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-700 shrink-0" />
              <span>Dedicated 1-on-1 Hack With India Mentorship War Room</span>
            </li>
          </ul>

          <button
            onClick={() => onOpenRegister?.("team")}
            className="w-full comic-box-sm bg-[#e63946] hover:bg-[#d62839] text-white py-3 px-4 font-round-bold text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:translate-y-0.5 cursor-pointer shadow-[3px_3px_0px_#000]"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>REGISTER SQUAD ON UNSTOP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="jason-2">
          <img src="/images/jason-2.webp" alt="Lead Architect Persona" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box z-10">
        <div className="jason-1">
          <img src="/images/jason-1.webp" alt="Coding Deep Dive" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" alt="Code Terminal" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
