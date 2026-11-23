import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';

import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import Marquee from './components/Marquee';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import Tracks from './sections/Tracks';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';
import Timeline from './sections/Timeline';
import PostCard from './sections/PostCard';
import Prizes from './sections/Prizes';
import RulebookAndProblems from './sections/RulebookAndProblems';
import RulesAndFaq from './sections/RulesAndFaq';
import Final from './sections/Final';
import Outro from './sections/Outro';
import ComingSoonPopup from './components/ComingSoonPopup';
import { HACKATHON_DETAILS } from './constants/hackathonData';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('team');
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -60, duration: 1.4 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  // Pause scroll when popup open
  useEffect(() => {
    if (lenisRef.current) {
      popupOpen ? lenisRef.current.stop() : lenisRef.current.start();
    }
  }, [popupOpen]);

  const handleOpenRegister = (tier = 'team') => {
    // Direct redirect to Unstop hackathon registration website
    window.open(HACKATHON_DETAILS.unstopUrl, '_blank', 'noopener,noreferrer');
    setSelectedTier(tier);
  };

  const handleClosePopup = () => setPopupOpen(false);

  return (
    <main className="relative selection:bg-pink selection:text-black">
      <NavBar onOpenRegister={handleOpenRegister} />

      <Hero onOpenRegister={handleOpenRegister} />

      <Marquee />

      <FirstVideo />

      <Jason onOpenRegister={handleOpenRegister} />

      <Tracks onOpenRegister={handleOpenRegister} />

      <SecondVideo />

      <Lucia onOpenRegister={handleOpenRegister} />

      <Timeline />

      <PostCard onOpenRegister={handleOpenRegister} />

      <Prizes onOpenRegister={handleOpenRegister} />

      <RulebookAndProblems />

      <RulesAndFaq onOpenRegister={handleOpenRegister} />

      <Final />

      <Outro onOpenRegister={handleOpenRegister} />

      <ComingSoonPopup 
        isOpen={popupOpen} 
        onClose={handleClosePopup} 
        initialTier={selectedTier} 
      />
    </main>
  );
};

export default App;
