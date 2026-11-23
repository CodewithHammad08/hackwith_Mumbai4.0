import { useState } from "react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";
import { Clock, CheckCircle2, ChevronRight, Zap } from "lucide-react";

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="timeline" className="relative py-28 px-6 md:px-16 z-30 overflow-hidden bg-black/40">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <span className="comic-badge text-xs md:text-sm px-4 py-1.5 uppercase font-black inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#e63946]" />
              36-HOUR TIMELINE MATRIX • HACK WITH INDIA
            </span>
          </div>
          <h2 className="font-round-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white drop-shadow-md">
            THE CLOCK BENDS.
          </h2>
          <p className="text-pink text-sm sm:text-base md:text-xl font-round-bold uppercase tracking-wider mt-2 font-bold">
            HACK WITH MUMBAI 4.0 • EVERY SECOND, YOUR LEGACY UNFOLDS
          </p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative">
          {/* Central connecting vertical red/comic line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-[#e63946] -translate-x-1/2 rounded-full shadow-[0_0_12px_#e63946]" />

          <div className="space-y-10 md:space-y-12">
            {HACKATHON_DETAILS.schedule.map((item, index) => {
              const isEven = index % 2 === 0;
              const isSelected = activeStep === index;

              return (
                <div
                  key={item.time}
                  onClick={() => setActiveStep(index)}
                  className={`relative flex flex-col md:flex-row items-start md:items-center cursor-pointer transition-all ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content card */}
                  <div className="w-full md:w-[44%] pl-14 md:pl-0">
                    <div
                      className={`comic-box p-5 md:p-6 rounded-xl transition-all duration-300 ${
                        isSelected
                          ? "bg-[#fff9cb] text-black shadow-[6px_6px_0px_#e63946] -translate-y-1"
                          : "bg-[#181622] text-white hover:bg-[#201d2d] border-2 border-neutral-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                          isSelected ? "bg-black text-[#fff9cb]" : "bg-[#e63946] text-white"
                        }`}>
                          {item.phase}
                        </span>
                        <span className={`text-lg md:text-xl font-round-bold font-black ${
                          isSelected ? "text-[#e63946]" : "text-yellow"
                        }`}>
                          {item.time}
                        </span>
                      </div>

                      <h3 className={`font-round-bold text-xl md:text-2xl font-black uppercase leading-tight mb-2 ${
                        isSelected ? "text-black" : "text-white"
                      }`}>
                        {item.title}
                      </h3>

                      <p className={`text-xs md:text-sm font-sans leading-relaxed ${
                        isSelected ? "text-neutral-800" : "text-gray-300"
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Circle */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-full border-3 border-black flex items-center justify-center transition-transform ${
                        isSelected
                          ? "bg-[#fff9cb] scale-125 shadow-[0_0_15px_#fff9cb]"
                          : "bg-[#e63946] hover:scale-110"
                      }`}
                    >
                      <Zap className={`w-4 h-4 ${isSelected ? "text-black" : "text-white"}`} />
                    </div>
                  </div>

                  {/* Empty spacer for alternating balance */}
                  <div className="hidden md:block w-[44%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
