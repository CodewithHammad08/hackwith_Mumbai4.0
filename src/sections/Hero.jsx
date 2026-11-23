import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useMaskSettings } from '../constants';
import ComingSoon from "./ComingSoon";

const Hero = ({ onOpenRegister }) => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.0,
        end: '+=200%',
        pin: true,
      }
    });

    tl
      // 1. Fade out cover logos and scale background smoothly
      .to('.fade-out', { opacity: 0, duration: 0.6, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, duration: 1, ease: 'power1.inOut' }, '<')
      // 2. Camera zooms through the text letters (signature scroll-within-the-text cutout)
      .to('.mask-wrapper', { 
        maskSize, 
        maskPosition: maskPos, 
        duration: 1.2, 
        ease: 'power1.inOut' 
      }, '<')
      // 3. Zoom through text and reveal the arena headquarters
      .to('.mask-wrapper', { opacity: 0, duration: 0.4 })
      .to('.overlay-logo', { opacity: 1, duration: 0.4, ease: 'power1.inOut' }, '<')
      .to('.overlay-logo', { opacity: 0, duration: 0.4, ease: 'power1.inOut' })
      // 4. Circular lens expansion revealing Hackathon Headquarters with 100% text visibility
      .fromTo('.entrance-message', 
        { 
          opacity: 1,
          clipPath: 'circle(0% at 50% 30%)',
          WebkitClipPath: 'circle(0% at 50% 30%)'
        }, 
        { 
          opacity: 1,
          clipPath: 'circle(150% at 50% 30%)',
          WebkitClipPath: 'circle(150% at 50% 30%)',
          duration: 1.2, 
          ease: 'power1.inOut' 
        }, 
        '<+=0.1'
      );
  }, [initialMaskPos, initialMaskSize, maskPos, maskSize]);

  return (
    <section id="hero" className="hero-section">
      <div className="size-full mask-wrapper">
        <img src="/images/hero-bg.webp" alt="background" className="scale-out" />
        <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out" />
        
        {/* Hackathon Registration teaser badge */}
        <div className="trailer-logo fade-out text-center">
          <div className="comic-badge text-xs px-3 py-1 font-black cursor-pointer shadow-[4px_4px_0px_#000]">
            ⚡ HACK WITH MUMBAI 4.0 ⚡
          </div>
        </div>
      </div>

      <div>
        <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo" />
      </div>

      <div className="fake-logo-wrapper">
        <img src="/images/big-hero-text.svg" alt="Hack With Mumbai" className="overlay-logo" />
      </div>

      <ComingSoon onOpenRegister={onOpenRegister} />
    </section>
  );
};

export default Hero;
