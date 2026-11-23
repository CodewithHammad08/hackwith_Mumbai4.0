import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const SecondVideo = () => {
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
    <section ref={containerRef} className="lucia relative h-dvh w-full overflow-hidden bg-black z-20">
      <video 
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        src="/videos/output2.mp4"
        className="size-full object-cover second-vd"
        style={{ 
          objectPosition: '15% 0%' 
        }}
      />

      {/* Cinematic chapter badge */}
      <div className="absolute top-20 md:top-24 right-4 sm:right-8 md:right-16 z-30 pointer-events-none text-right">
        <div className="comic-badge text-[10px] sm:text-xs md:text-sm px-3.5 py-1.5 uppercase font-black inline-block bg-[#ffd23f] text-black shadow-[3px_3px_0px_#000]">
          STAGE 02 // HACK WITH MUMBAI 4.0 // ASSEMBLE THE SYNDICATE
        </div>
        <p className="text-white font-round-bold text-xs sm:text-sm md:text-lg mt-2 drop-shadow-md">
          2 to 5 Minds. One Shared Vision.
        </p>
      </div>

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </section>
  );
};

export default SecondVideo;
