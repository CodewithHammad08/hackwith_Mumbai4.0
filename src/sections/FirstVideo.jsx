import { useRef } from "react";
import { useSmoothVideoScrub } from "../utils/useSmoothVideoScrub";

const FirstVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Buttery-smooth hardware-accelerated scroll-scrubbed video
  useSmoothVideoScrub(videoRef, containerRef, {
    start: "top top",
    end: "+=140%",
    pin: true,
    scrub: 0.5,
  });

  return (
    <section ref={containerRef} className="first-vd-wrapper relative h-dvh w-full overflow-hidden bg-black z-20">
      <video 
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        src="/videos/output1.mp4"
        className="size-full object-cover first-vd will-change-transform"
      />

      {/* Cinematic chapter badge */}
      <div className="absolute top-20 md:top-24 left-4 sm:left-8 md:left-16 z-30 pointer-events-none">
        <div className="comic-badge text-[10px] sm:text-xs md:text-sm px-3.5 py-1.5 uppercase font-black inline-block bg-[#e63946] text-white shadow-[3px_3px_0px_#fff9cb]">
          STAGE 01 // HACK WITH MUMBAI 4.0 BEGINS • BY HACK WITH INDIA
        </div>
        <p className="text-white font-round-bold text-xs sm:text-sm md:text-lg mt-2 drop-shadow-md">
          36 Hours. High Stakes. No Templates.
        </p>
      </div>

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </section>
  );
};

export default FirstVideo;
