import { useRef } from "react";
import { useSmoothVideoScrub } from "../utils/useSmoothVideoScrub";

const Final = () => {
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
    <section ref={containerRef} className="final relative h-dvh w-full overflow-hidden bg-black z-20">
      <video 
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        src="/videos/output3.mp4"
        className="size-full object-cover will-change-transform"
      />
    </section>
  );
};

export default Final;
