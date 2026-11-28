import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useMaskSettings } from '../constants';

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

  useGSAP(() => {
    // 1. Initial visual states — ensure base cover is 100% visible at rest
    gsap.set('.hero-base-cover', { opacity: 1 });
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
      opacity: 0,
    });
    gsap.set('.overlay-logo', { opacity: 0, scale: 1 });
    gsap.set('.hwi-reveal-logo', { opacity: 0, scale: 0.72 });

    // 2. Signature scroll-driven GTA zoom animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 1.5,
        end: '+=165%',
        pin: true,
      }
    });

    tl
      // Step 1: Smoothly fade out title logo and teaser badge while subtly scaling the background
      .to('.fade-out', { opacity: 0, duration: 0.5, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1.06, duration: 1, ease: 'power1.inOut' }, '<')
      
      // Step 2: Seamlessly crossfade into the masked GTA cutout layer
      .to('.hero-base-cover', { opacity: 0, duration: 0.4, ease: 'power1.inOut' }, '<+=0.2')
      .to('.mask-wrapper', { opacity: 1, duration: 0.4, ease: 'power1.inOut' }, '<')

      // Step 3: Camera zooms through the text cutout down to the GTA logo silhouette
      .to('.mask-wrapper', { 
        maskSize, 
        maskPosition: maskPos, 
        duration: 1.0, 
        ease: 'power1.inOut' 
      }, '<+=0.1')

      // Step 4: Reveal the GTA overlay logo after mask zoom finishes
      .to('.mask-wrapper', { opacity: 0, duration: 0.3 })
      .to('.overlay-logo', { opacity: 1, duration: 0.3, ease: 'power1.inOut' }, '<')

      // Step 5: Morph/change from the GTA logo into the Hack With India logo and hold briefly
      .to('.overlay-logo', { opacity: 0, scale: 0.85, duration: 0.45, ease: 'power2.inOut' })
      .to('.hwi-reveal-logo', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' }, '<+=0.15')
      .to({}, { duration: 0.35 });
  }, [initialMaskPos, initialMaskSize, maskPos, maskSize]);

  return (
    <section id="hero" className="hero-section">
      {/* 1. Base Cover Layer — 100% visible at rest (Scroll 0) */}
      <div className="size-full absolute inset-0 hero-base-cover pointer-events-none overflow-hidden">
        <img src="/images/hero-bg.webp" alt="background" className="size-full object-cover scale-out" />
        <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out" />
        
        {/* Hackathon Registration teaser badge */}
        <div className="trailer-logo fade-out text-center">
          <div className="comic-badge text-xs px-3 py-1 font-black cursor-pointer shadow-[4px_4px_0px_#000]">
            ⚡ HACK WITH MUMBAI 4.0 ⚡
          </div>
        </div>
      </div>

      {/* 2. Scroll-driven GTA Mask Cutout Layer */}
      <div className="size-full mask-wrapper pointer-events-none">
        <img src="/images/hero-bg.webp" alt="background" className="size-full object-cover scale-out" />
      </div>

      {/* 3. Overlay Logo -> Changes to HWI Logo at end of GTA scroll reveal */}
      <div className="fake-logo-wrapper pointer-events-none flex items-center justify-center">
        <img src="/images/big-hero-text.svg" alt="Hack With Mumbai" className="overlay-logo" />

        <div className="hwi-reveal-logo absolute inset-0 flex items-center justify-center opacity-0">
          <img
            src="/images/hackwithindia-bvudet-logo.png"
            alt="Hack With India - BVUDET Navi Mumbai"
            className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 object-contain rounded-full drop-shadow-[0_0_38px_rgba(230,26,86,0.75)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
