import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Users, Check, ArrowRight, Trophy, Sparkles } from "lucide-react";

const Lucia = ({ onOpenRegister }) => {
  useGSAP(() => {
    gsap.set('.lucia-life', { marginTop: '-80vh'});

    gsap.timeline({
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top 80%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.lucia-life .img-box', {
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -200, duration: 1, ease: 'power1.inOut'
    }, '<');
  });

  return (
    <section className="lucia-life">
      <div className="flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-96 z-10">
        <div className="lucia-1">
          <img src="/images/lucia-1.webp" alt="Team Lead Persona" />
        </div>
        <div className="lucia-3">
          <img src="/images/lucia-3.webp" alt="Collaboration" />
        </div>
      </div>

      <div className="lg:w-1/2 lucia-life-content z-20">
        <div className="max-w-xl lg:ps-32 ps-10">
          <div className="inline-block mb-4">
            <span className="comic-badge text-xs px-3.5 py-1.5 font-black inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              TEAM SQUAD PASS // ₹200 (2-5 MEMBERS) • ORGANISED BY HACK WITH INDIA
            </span>
          </div>

          <h1>THE SYNDICATE</h1>
          <h2>Bring your squad. Dominate the 36-hour national leaderboard.</h2>
          <p>
            Life in tech moves fast. When two to five focused engineers unite—frontend virtuoso, backend architect, AI specialist, and pitch lead—groundbreaking products are shipped in record time. Form your squad of 2 to 5 members for <strong>Hack With Mumbai 4.0</strong>, combine brainpower, and aim straight for the <strong>₹1,00,000 Grand Championship bounty</strong> organised by Hack With India.
          </p>
        </div>

        {/* Comic Ticket Box */}
        <div className="max-w-xl lg:ms-32 ms-10 me-10 comic-box bg-[#fff9cb] text-black p-5 my-8 rounded-lg shadow-[6px_6px_0px_#e63946]">
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
              <span>Full Access for all 2 to 5 Team Members</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-700 shrink-0" />
              <span>Eligible for ₹1,00,000 Grand Champion Trophy across ANY Domain</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-700 shrink-0" />
              <span>Direct VC Incubation & Fast-Track Interview Referrals</span>
            </li>
          </ul>

          <button
            onClick={() => onOpenRegister?.("team")}
            className="w-full comic-box-sm bg-[#e63946] hover:bg-[#d62839] text-white py-3 px-4 font-round-bold text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:translate-y-0.5 cursor-pointer shadow-[3px_3px_0px_#000]"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>PRE-REGISTER TEAM SQUAD (COMING SOON)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lucia-2">
          <img src="/images/lucia-2.webp" alt="Coding Squad" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10 mt-6 text-sm text-gray-300">
          Cross-institutional squads and multi-disciplinary teams across India are fully encouraged to participate in Hack With Mumbai 4.0.
        </p>
      </div>
    </section>
  );
};

export default Lucia;
