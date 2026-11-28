import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowRight } from "lucide-react";
import HangingGlassGallery, { GTA_GALLERY_IMAGES } from "@/components/ui/hanging-glass-gallery";

type GtaIntroScreenProps = {
  onComplete: () => void;
  stayOpen?: boolean;
};

const GtaIntroScreen = ({ onComplete, stayOpen = false }: GtaIntroScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const exitedRef = useRef(false);

  const handleExit = useCallback(() => {
    if (exitedRef.current) return;
    exitedRef.current = true;
    setExiting(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  }, [onComplete]);

  // Smoothly animate progress bar toward current portrait coverage percentage
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setProgress(100);
      return;
    }

    let raf = 0;
    const smoothTick = () => {
      setProgress((prev) => {
        const diff = targetProgress - prev;
        if (Math.abs(diff) < 0.25) return targetProgress;
        return prev + diff * 0.12;
      });
      raf = requestAnimationFrame(smoothTick);
    };
    raf = requestAnimationFrame(smoothTick);
    return () => cancelAnimationFrame(raf);
  }, [targetProgress]);

  const handleCoverageChange = useCallback((covered: number, total: number) => {
    if (total > 0) {
      setTargetProgress(Math.min(100, (covered / total) * 100));
    }
  }, []);

  const handleAllCovered = useCallback(() => {
    setTargetProgress(100);
    setProgress(100);
    if (!stayOpen) {
      // Brief beat after the last portrait settles cleanly before transitioning
      setTimeout(() => {
        handleExit();
      }, 450);
    }
  }, [handleExit, stayOpen]);

  // Allow Escape key to skip intro immediately
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleExit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleExit]);

  return (
    <div
      role="dialog"
      aria-label="Hack With Mumbai 4.0 Opening Gallery"
      className={`fixed inset-0 z-[300] bg-[#06050b] transition-all duration-600 ease-out ${
        exiting ? "opacity-0 scale-[1.03] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Skip / Enter Action Only */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-10 z-30 pointer-events-none">
        <button
          type="button"
          onClick={handleExit}
          className="pointer-events-auto inline-flex items-center gap-2 bg-[#f6efe2] hover:bg-white text-[#120d1d] px-4 sm:px-5 py-2 rounded-md border-2 border-black font-inter text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em] shadow-[4px_4px_0px_#ff8a3d] hover:shadow-[5px_5px_0px_#6a3df0] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <span>{progress >= 100 ? "ENTER ARENA" : "SKIP INTRO"}</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.8]" />
        </button>
      </div>

      {/* Pure 3D Hanging Glass Gallery (Redirects after all 8 portraits rotate through) */}
      <HangingGlassGallery
        images={GTA_GALLERY_IMAGES}
        eyebrow=""
        title=""
        caption=""
        autoPlay={true}
        height="100dvh"
        onCoverageChange={handleCoverageChange}
        onAllCovered={handleAllCovered}
      />

      {/* Minimal Bottom Loading Progress Strip */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40">
        <div className="h-[3px] w-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#6a3df0] via-[#ff3d8b] to-[#ff8a3d] transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default GtaIntroScreen;
