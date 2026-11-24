import { useRef, useState } from "react";
import { Wifi, Coffee, Trophy, Terminal, X, Zap } from "lucide-react";
import { useSmoothVideoScrub } from "../utils/useSmoothVideoScrub";

const PostCard = ({ onOpenRegister }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [showPerks, setShowPerks] = useState(false);

  // Synchronize 3-second postcard video with scroll
  useSmoothVideoScrub(videoRef, containerRef, {
    start: "top 75%",
    end: "bottom 25%",
    pin: false,
    scrub: 0.8,
  });

  const perks = [
    { icon: <Wifi className="w-5 h-5 text-cyan-400" />, title: "1Gbps Low-Latency Mesh", desc: "Unrestricted gigabit bandwidth for neural model downloads and heavy builds." },
    { icon: <Coffee className="w-5 h-5 text-yellow" />, title: "Midnight Refuel Stations", desc: "Unlimited coffee, energy drinks, and hot midnight meals delivered to your table." },
    { icon: <Terminal className="w-5 h-5 text-green-400" />, title: "24/7 Mentor War Room", desc: "Hands-on senior engineering leaders ready to debug and review architectures." },
    { icon: <Trophy className="w-5 h-5 text-pink" />, title: "Metal Hacker Badges & Swag", desc: "Custom serialized metal credentials, stickers, hoodies, and sponsor swag." },
  ];

  return (
    <section ref={containerRef} className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:scale-[1.01] transition duration-700">
        <img src="/images/overlay.webp" alt="Card Frame" />

        {/* Video badge overlay */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="comic-badge text-[10px] sm:text-xs px-2.5 py-1 bg-[#e63946] text-white shadow-[2px_2px_0px_#000] inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#fff9cb] fill-[#fff9cb]" />
            ARENA EXPERIENCE • 36H NON-STOP WAR ROOM
          </span>
        </div>

        <video 
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/postcard-vd.mp4"
          className="w-full h-full object-cover will-change-transform"
        />

        <button 
          onClick={() => setShowPerks(true)}
          className="group-hover:bg-[#fff9cb] group-hover:text-black font-round-bold font-black uppercase text-xs md:text-base tracking-wider transition-all duration-500 cursor-pointer shadow-[4px_4px_0px_#000] border-2 border-black"
        >
          EXPLORE 36H ARENA PERKS & SWAG
        </button>
      </div>

      {/* Interactive Perks Popup */}
      {showPerks && (
        <div className="fixed inset-0 z-[180] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="comic-box bg-[#fff9cb] text-black max-w-lg w-full p-6 md:p-8 rounded-xl relative shadow-[8px_8px_0px_#e63946] animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowPerks(false)}
              className="absolute top-4 right-4 p-1.5 hover:bg-black hover:text-white rounded-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="comic-badge text-[11px] px-2.5 py-1 bg-[#e63946] text-white">
              ARENA EXPERIENCE • ORGANISED BY HACK WITH INDIA
            </span>
            <h3 className="font-round-bold text-2xl md:text-3xl font-black uppercase mt-2 mb-4">
              HACK WITH MUMBAI 4.0 ARENA
            </h3>

            <div className="space-y-3.5 mb-6">
              {perks.map((p) => (
                <div key={p.title} className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-black/20">
                  <div className="p-2 bg-black rounded-md shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-round-bold text-sm font-black uppercase">{p.title}</h4>
                    <p className="text-xs text-neutral-800 font-sans">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setShowPerks(false);
                onOpenRegister?.("team");
              }}
              className="w-full comic-box bg-[#e63946] hover:bg-[#d62839] text-white py-3 font-round-bold font-black text-sm uppercase tracking-wider cursor-pointer"
            >
              REGISTER SQUAD ON UNSTOP
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PostCard;
