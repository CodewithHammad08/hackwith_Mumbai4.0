import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { createSmoothVideoScrub } from "../utils/smoothVideoScrub";

const Final = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.final-content', { opacity: 0 });

    const fadeTl = gsap.timeline({ 
      scrollTrigger: {
        trigger: '.final',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      }
    });

    fadeTl.to('.final-content', { opacity: 1, duration: 1, scale: 1, ease: 'power1.inOut' });

    // Hardware-accelerated non-blocking video scrub
    const scrubber = createSmoothVideoScrub(videoRef.current, {
      trigger: '.final',
      start: 'top top',
      end: '+=150% top',
      pin: true,
      scrub: 0.3,
    });

    return () => {
      scrubber?.destroy();
    };
  }, []);

  return (
    <section className="final relative">
      <div className="final-content size-full relative">
        <video 
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output3.mp4"
          className="size-full object-cover"
        />

        {/* Cinematic finale teaser */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center w-full px-4">
          <div className="comic-badge text-xs md:text-sm px-4 py-1.5 uppercase font-black inline-block">
            STAGE 03 // HACK WITH MUMBAI 4.0 // THE FINAL COUNTDOWN
          </div>
          <p className="text-white font-round-bold text-base md:text-2xl mt-2 drop-shadow-lg">
            36 Hours. One Legacy. ₹1,50,000 Up For Grabs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Final;
