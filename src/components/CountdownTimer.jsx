import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate = "2026-09-24T10:00:00" }) => {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const calculate = () => {
      let diff = target - Date.now();
      if (diff <= 0) diff = 36 * 60 * 60 * 1000 * 14 + (Date.now() - new Date("2026-01-01").getTime());
      setTimeLeft({
        days: String(Math.floor(diff / 86400000)).padStart(2, "0"),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
      });
    };
    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEC", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-stretch justify-center gap-2 md:gap-3">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2 md:gap-3">
          {/* Block */}
          <div className="relative group">
            {/* Glow bg */}
            <div className="absolute inset-0 bg-[#e63946] rounded-lg blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative border-2 border-[#e63946]/60 bg-[#0d0c1a] rounded-lg px-3 md:px-5 py-2 md:py-3 min-w-[64px] md:min-w-[80px] text-center overflow-hidden">
              {/* Scanline */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e63946] to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e63946] to-transparent opacity-30" />
              <span className="font-long text-2xl md:text-4xl font-black text-white tracking-tight leading-none block"
                style={{ textShadow: '0 0 20px rgba(230,57,70,0.8)' }}>
                {unit.value}
              </span>
              <span className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-[#e63946] mt-1 block">
                {unit.label}
              </span>
            </div>
          </div>
          {/* Separator */}
          {i < units.length - 1 && (
            <span className="text-[#ffb0c4] text-2xl md:text-3xl font-black animate-pulse self-start pt-1" aria-hidden>:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
