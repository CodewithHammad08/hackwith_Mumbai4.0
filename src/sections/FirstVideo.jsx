import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

const FirstVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.first-vd-wrapper', { marginTop: '-150vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.first-vd-wrapper',
        start: 'top top',
        end: '+=200% top',
        scrub: true,
        pin: true,
      }
    });

    tl.to('.hero-section', { delay: 0.5, opacity: 0, ease: 'power1.inOut' });
    tl.to('.first-vd-wrapper', { opacity: 1, duration: 2, ease: 'power1.inOut' });

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
    <section className="first-vd-wrapper relative">
      <div className="h-dvh relative">
        <video 
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          src="/videos/output1.mp4"
          className="first-vd"
        />

        {/* Cinematic chapter badge */}
        <div className="absolute top-24 left-8 md:left-16 z-30 pointer-events-none">
          <div className="comic-badge text-xs md:text-sm px-3.5 py-1.5 uppercase font-black inline-block">
            STAGE 01 // HACK WITH MUMBAI 4.0 BEGINS • BY HACK WITH INDIA
          </div>
          <p className="text-white font-round-bold text-sm md:text-lg mt-2 drop-shadow-md">
            36 Hours. High Stakes. No Templates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstVideo;
