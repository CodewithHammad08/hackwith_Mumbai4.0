import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SecondVideo = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.set('.lucia', { marginTop: '-60vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.lucia',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        pin: true
      }
    });

    tl.to('.lucia', { opacity: 1, duration: 1, ease: 'power1.inOut' });

    if (videoRef.current) {
      const v = videoRef.current;
      const setScrub = () => {
        tl.to(v, { currentTime: v.duration || 3, duration: 3, ease: 'power1.inOut' }, '<');
      };
      if (v.readyState >= 1) {
        setScrub();
      } else {
        v.onloadedmetadata = setScrub;
      }
    }
  }, []);

  return (
    <section className="lucia relative">
      <div className="h-dvh relative">
        <video 
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          src="/videos/output2.mp4"
          className="size-full object-cover second-vd"
          style={{ 
            objectPosition: '15% 0%' 
          }}
        />

        {/* Cinematic chapter badge */}
        <div className="absolute top-24 right-8 md:right-16 z-30 pointer-events-none text-right">
          <div className="comic-badge text-xs md:text-sm px-3.5 py-1.5 uppercase font-black inline-block">
            STAGE 02 // HACK WITH MUMBAI 4.0 // ASSEMBLE THE SYNDICATE
          </div>
          <p className="text-white font-round-bold text-sm md:text-lg mt-2 drop-shadow-md">
            2 to 5 Minds. One Shared Vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondVideo;
