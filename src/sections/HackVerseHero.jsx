import { useState, useEffect } from "react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";

const HackVerseHero = ({ onOpenRegister }) => {
  // Live real-time countdown timer matching screenshot values
  const [timeLeft, setTimeLeft] = useState({
    days: "80",
    hours: "12",
    minutes: "45",
    seconds: "59",
  });

  useEffect(() => {
    const target = new Date("2027-02-27T00:00:00").getTime();
    const calculate = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }
      setTimeLeft({
        days: String(Math.floor(diff / 86400000)).padStart(2, "0"),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
      });
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToTimeline = (e) => {
    e.preventDefault();
    const targetEl = document.querySelector("#timeline");
    if (targetEl) {
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.scrollTo(targetEl, { offset: -60, duration: 1.4 });
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="hackverse-hero" className="relative z-30 w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Background Video (fully visible without dark black overlays) */}
      <div className="hackverse-bg-video-wrapper absolute inset-0 size-full pointer-events-none overflow-hidden select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          src="/videos/hackverse-bg.mp4"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Hero Content: Typography, Countdown & Actions */}
        <div className="max-w-3xl flex flex-col items-start text-left">
            
            {/* Kicker Tag */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-block font-inter text-[11px] font-bold tracking-[0.25em] uppercase px-3.5 py-1.5 bg-[#f6efe2] text-[#1a1612] border-2 border-[#1a1612] shadow-[3px_3px_0px_#000] transform -rotate-2 select-none">
                HACK-VERSE · BVUDET NM
              </span>
            </div>

            {/* Headline with 3D Glitch & Gradient */}
            <h1 className="d gl text-[48px] xs:text-[62px] sm:text-[82px] md:text-[98px] lg:text-[108px] leading-[0.92] tracking-tight uppercase text-[#f6efe2] mb-4 select-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)]">
              HACK WITH<br />
              <span className="g">MUMBAI 4.0</span>
            </h1>

            {/* Subtitle */}
            <p className="font-inter text-sm sm:text-base md:text-lg text-[#f6efe2] max-w-lg leading-relaxed mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              30 hours. One city. Build something wanted in every state. 27 February 2027 • BVUDET NM.
            </p>

            {/* 5 Wanted Level Stars */}
            <div className="flex items-center gap-1.5 text-2xl text-[#ff8a3d] mb-6 select-none" aria-label="5 Stars">
              <span className="hover:scale-125 transition-transform cursor-default">★</span>
              <span className="hover:scale-125 transition-transform cursor-default">★</span>
              <span className="hover:scale-125 transition-transform cursor-default">★</span>
              <span className="hover:scale-125 transition-transform cursor-default">★</span>
              <span className="hover:scale-125 transition-transform cursor-default">★</span>
            </div>

            {/* Live Real-Time Countdown Boxed Cards */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 flex-wrap">
              {[
                { value: timeLeft.days, label: "DAYS" },
                { value: timeLeft.hours, label: "HRS" },
                { value: timeLeft.minutes, label: "MIN" },
                { value: timeLeft.seconds, label: "SEC" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-3 border-[#1a1612] bg-[#f6efe2] text-[#1a1612] px-3 py-2 sm:px-4 sm:py-2.5 min-w-[64px] sm:min-w-[74px] text-center shadow-[3px_3px_0px_#19b5a5] rounded-sm select-none"
                >
                  <b className="d text-2xl sm:text-3xl lg:text-4xl leading-none block text-[#1a1612]">
                    {item.value}
                  </b>
                  <small className="font-inter text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#6f6455] uppercase mt-1 block">
                    {item.label}
                  </small>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3.5 flex-wrap">
              <a
                href={HACKATHON_DETAILS.unstopUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onOpenRegister?.("team")}
                className="inline-block bg-[#f6efe2] hover:bg-white text-[#1a1612] px-6 sm:px-7 py-3 border-3 border-[#1a1612] rounded-md font-inter font-bold text-xs sm:text-sm tracking-[0.08em] uppercase shadow-[4px_4px_0px_#ff3d8b] hover:shadow-[6px_6px_0px_#ff3d8b] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer select-none"
              >
                REGISTER
              </a>

              <a
                href="#timeline"
                onClick={handleScrollToTimeline}
                className="inline-block bg-black/60 hover:bg-black/90 text-[#f6efe2] px-6 sm:px-7 py-3 border-3 border-[#1a1612] rounded-md font-inter font-bold text-xs sm:text-sm tracking-[0.08em] uppercase shadow-[4px_4px_0px_#ff3d8b] hover:shadow-[6px_6px_0px_#ff3d8b] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer select-none"
              >
                TIMELINE
              </a>
            </div>

        </div>

        {/* Feature Stat Band Across Bottom */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 border-3 border-[#1a1612] bg-[#f6efe2] text-[#1a1612] shadow-[5px_5px_0px_#19b5a5] rounded-md overflow-hidden select-none">
          <div className="p-4 sm:p-5 text-center border-r-2 border-b-2 md:border-b-0 border-[#cfc2ab]">
            <b className="d g text-3xl sm:text-4xl block leading-none">36</b>
            <small className="font-inter text-[10px] tracking-[0.2em] text-[#6f6455] uppercase block mt-1 font-bold">HOURS NON-STOP</small>
          </div>
          <div className="p-4 sm:p-5 text-center border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-[#cfc2ab]">
            <b className="d g text-3xl sm:text-4xl block leading-none">2–4</b>
            <small className="font-inter text-[10px] tracking-[0.2em] text-[#6f6455] uppercase block mt-1 font-bold">MEMBERS / SQUAD</small>
          </div>
          <div className="p-4 sm:p-5 text-center border-r-2 border-[#cfc2ab]">
            <b className="d g text-3xl sm:text-4xl block leading-none">₹1.5L</b>
            <small className="font-inter text-[10px] tracking-[0.2em] text-[#6f6455] uppercase block mt-1 font-bold">PODIUM PRIZES</small>
          </div>
          <div className="p-4 sm:p-5 text-center">
            <b className="d g text-3xl sm:text-4xl block leading-none">ALL</b>
            <small className="font-inter text-[10px] tracking-[0.2em] text-[#6f6455] uppercase block mt-1 font-bold">TECH DOMAINS</small>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HackVerseHero;
