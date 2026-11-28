import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';

import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import HackVerseHero from './sections/HackVerseHero';
import Marquee from './components/Marquee';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import Tracks from './sections/Tracks';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';
import Timeline from './sections/Timeline';
import PostCard from './sections/PostCard';
import { LocationMap } from './components/ui/location-map';
import Prizes from './sections/Prizes';
import RulebookAndProblems from './sections/RulebookAndProblems';
import PreviousEvents from './sections/PreviousEvents';
import PastSponsors from './sections/PastSponsors';
import RulesAndFaq from './sections/RulesAndFaq';
import Final from './sections/Final';
import Outro from './sections/Outro';
import ComingSoonPopup from './components/ComingSoonPopup';
import GtaIntroScreen from './components/GtaIntroScreen';
import { HACKATHON_DETAILS } from './constants/hackathonData';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('team');
  const isIntroRoute = typeof window !== 'undefined' && window.location.pathname === '/intro';
  const [showIntro, setShowIntro] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      syncTouch: false,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Ensure every ScrollTrigger (both useGSAP and useEffect hooks) is sorted
    // strictly in DOM order and refreshed with exact pin-spacer offsets
    const syncScrollTriggers = () => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    };

    const initTimer = setTimeout(syncScrollTriggers, 120);
    window.addEventListener('load', syncScrollTriggers);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(syncScrollTriggers);
    }

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
      clearTimeout(initTimer);
      window.removeEventListener('load', syncScrollTriggers);
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  // Pause background page scroll while intro screen or popup is open
  useEffect(() => {
    if (lenisRef.current) {
      if (popupOpen || showIntro) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
        requestAnimationFrame(() => {
          ScrollTrigger.sort();
          ScrollTrigger.refresh();
        });
      }
    }
  }, [popupOpen, showIntro]);

  const handleIntroComplete = () => {
    if (isIntroRoute && typeof window !== 'undefined') {
      window.history.replaceState(null, '', '/');
    }
    setShowIntro(false);
  };

  const handleOpenRegister = (tier = 'team') => {
    // Direct redirect to Unstop hackathon registration website
    window.open(HACKATHON_DETAILS.unstopUrl, '_blank', 'noopener,noreferrer');
    setSelectedTier(tier);
  };

  const handleClosePopup = () => setPopupOpen(false);

  return (
    <main className="relative selection:bg-pink selection:text-black">
      {showIntro && (
        <GtaIntroScreen onComplete={handleIntroComplete} stayOpen={isIntroRoute} />
      )}

      <NavBar onOpenRegister={handleOpenRegister} />

      {/* 1. Scroll-driven GTA text-cutout animation */}
      <Hero onOpenRegister={handleOpenRegister} />

      {/* 2. HackVerse Hero directly after scroll-driven GTA animation */}
      <HackVerseHero onOpenRegister={handleOpenRegister} />

      {/* 3. Marquee ticker */}
      <Marquee />

      {/* 4. First Video */}
      <FirstVideo />

      {/* 5. Jason section */}
      <Jason onOpenRegister={handleOpenRegister} />

      {/* 6. Tracks section */}
      <Tracks onOpenRegister={handleOpenRegister} />

      {/* 7. Second Video */}
      <SecondVideo />

      {/* 8. Lucia section */}
      <Lucia onOpenRegister={handleOpenRegister} />

      {/* 9. Timeline */}
      <Timeline />

      {/* 10. PostCard video */}
      <PostCard onOpenRegister={handleOpenRegister} />

      {/* 10.5. Interactive Event Venue Map Card */}
      <section aria-label="Event Venue Location" className="relative z-30 py-6 md:py-10 px-4 flex justify-center">
        <LocationMap
          eyebrow="EVENT ARENA LOCATION"
          location="BVUDET, Navi Mumbai"
          coordinates="19.0305° N, 73.0590° E"
          mapsUrl="https://maps.app.goo.gl/3Fkd49yz2BPXfqBw7"
          onToggle={() => {
            setTimeout(() => {
              ScrollTrigger.sort();
              ScrollTrigger.refresh();
            }, 540);
          }}
        />
      </section>

      {/* 11. Prizes */}
      <Prizes onOpenRegister={handleOpenRegister} />

      {/* 12. Rulebook & Problem Statements */}
      <RulebookAndProblems />

      {/* 13. Previous Events */}
      <PreviousEvents onOpenRegister={handleOpenRegister} />

      {/* 14. Past Sponsors */}
      <PastSponsors />

      {/* 15. Rules & FAQ */}
      <RulesAndFaq onOpenRegister={handleOpenRegister} />

      {/* 15. Final Video */}
      <Final />

      {/* 16. Outro */}
      <Outro onOpenRegister={handleOpenRegister} />

      {/* Registration popup modal */}
      <ComingSoonPopup 
        isOpen={popupOpen} 
        onClose={handleClosePopup} 
        initialTier={selectedTier} 
      />
    </main>
  );
};

export default App;
