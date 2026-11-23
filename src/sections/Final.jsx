import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Final = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const v = videoRef.current;
    if (!v) return;

    v.play().catch(() => {});

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
    <section ref={containerRef} className="final relative h-dvh w-full overflow-hidden bg-black z-20">
      <video 
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        src="/videos/output3.mp4"
        className="size-full object-cover"
      />

      {/* Cinematic finale teaser */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center w-full px-4">
        <div className="comic-badge text-[10px] sm:text-xs md:text-sm px-4 py-1.5 uppercase font-black inline-block bg-[#e63946] text-white shadow-[3px_3px_0px_#fff9cb]">
          STAGE 03 // HACK WITH MUMBAI 4.0 // THE FINAL COUNTDOWN
        </div>
        <p className="text-white font-round-bold text-sm sm:text-base md:text-2xl mt-2 drop-shadow-lg">
          36 Hours. One Legacy. ₹1,50,000 Up For Grabs.
        </p>
      </div>

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </section>
  );
};

export default Final;
