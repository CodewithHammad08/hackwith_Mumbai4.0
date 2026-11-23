import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMaskSettings } from "../constants";
import ComingSoon from "./ComingSoon";

const Hero = ({ onOpenRegister }) => {
  const { initialMaskPos, initialMaskSize, maskSize } = useMaskSettings();

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
        scrub: 2,
        end: '+=200%',
        pin: true,
      }
    });

    tl
      // 1. Fade out initial teaser badges & scale background smoothly
      .to('.fade-out', { opacity: 0, duration: 0.6, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, duration: 1, ease: 'power1.inOut' }, '<')
      // 2. Camera zooms through the text cutout (scroll down gets within the text)
      .to('.mask-wrapper', { maskSize, duration: 1.2, ease: 'power1.inOut' }, '<')
      // 3. Zoom through text into the hackathon arena
      .to('.mask-wrapper', { opacity: 0, duration: 0.6, ease: 'power1.inOut' })
      .to('.overlay-logo', { opacity: 1, scale: 1.05, duration: 0.4, ease: 'power1.inOut' }, '<')
      .to('.overlay-logo', { opacity: 0, scale: 1.25, duration: 0.5, ease: 'power1.inOut' })
      // 4. Reveal the complete Hackathon headquarters with full circular expansion (NO CLIPPED TEXT!)
      .fromTo('.entrance-message',
        { 
          opacity: 0, 
          scale: 0.94,
          maskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 0%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 0%)'
        },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1.2, 
          ease: 'power1.out',
          maskImage: 'radial-gradient(circle at 50% 50%, black 150%, black 150%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 150%, black 150%)'
        },
        '<+=0.1'
      );
  }, [initialMaskPos, initialMaskSize, maskSize]);

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

        <div className="play-img fade-out cursor-pointer hover:scale-110 transition-transform">
          <img src="/images/play.png" alt="play" className="w-7 ml-1" />
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
