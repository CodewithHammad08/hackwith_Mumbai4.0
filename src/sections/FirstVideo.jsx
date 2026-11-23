import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from "react";

const FirstVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const v = videoRef.current;
    if (!v) return;

    // Ensure video is playing smoothly
    v.play().catch(() => {});

    // Pinned cinematic stage without negative margin conflicts
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=120% top',
      pin: true,
      onEnter: () => v.play().catch(() => {}),
      onEnterBack: () => v.play().catch(() => {}),
      onLeave: () => v.pause(),
      onLeaveBack: () => v.pause(),
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="first-vd-wrapper relative h-dvh w-full overflow-hidden bg-black z-20">
      <video 
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        src="/videos/output1.mp4"
        className="size-full object-cover first-vd"
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
