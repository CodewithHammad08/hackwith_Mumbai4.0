import { Zap, Sparkles, Trophy, Clock, Flame, Shield } from "lucide-react";

const Marquee = () => {
  const items = [
    { text: "HACK WITH MUMBAI 4.0", icon: <Zap className="w-4 h-4 text-[#ffd23f]" /> },
    { text: "ORGANISED BY HACK WITH INDIA", icon: <Sparkles className="w-4 h-4 text-[#ffb0c4]" /> },
    { text: "CHOOSE ANY DOMAIN", icon: <Flame className="w-4 h-4 text-[#fff9cb]" /> },
    { text: "ONE UNIFIED GRAND PRIZE", icon: <Trophy className="w-4 h-4 text-[#ffd23f]" /> },
    { text: "36 HOURS NON-STOP", icon: <Clock className="w-4 h-4 text-[#05d9e8]" /> },
    { text: "₹2,00,000 PRIZE POOL", icon: <Trophy className="w-4 h-4 text-[#ffd23f]" /> },
    { text: "SOLO PASS ₹100", icon: <Flame className="w-4 h-4 text-[#e63946]" /> },
    { text: "TEAM SQUAD ₹200", icon: <Shield className="w-4 h-4 text-[#ffb0c4]" /> },
    { text: "REGISTRATION COMING SOON", icon: <Sparkles className="w-4 h-4 text-[#ffd23f]" /> },
    { text: "MUMBAI GRAND ARENA", icon: <Zap className="w-4 h-4 text-[#05d9e8]" /> },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#e63946] border-y-3 border-black py-2.5 z-40 select-none shadow-[0_0_20px_rgba(230,57,70,0.4)]">
      <div className="flex w-max animate-[marquee_22s_linear_infinite]">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-4 text-white font-round-bold font-black text-xs md:text-sm uppercase tracking-wider">
            {item.icon}
            <span>{item.text}</span>
            <span className="text-black font-black">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
