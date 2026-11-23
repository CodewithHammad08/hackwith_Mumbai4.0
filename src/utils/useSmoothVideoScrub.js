import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

/**
 * Custom React hook for buttery-smooth, non-blocking video scrubbing tied to scroll.
 * 
 * Solves browser video decoder stalls and freezing during scroll:
 * 1. Decouples ScrollTrigger progress from raw video.currentTime assignments.
 * 2. Never interrupts an in-flight hardware seek (the primary cause of scroll freezes).
 * 3. Utilizes `requestVideoFrameCallback` (Chrome/Edge/Safari/Firefox) + native `seeked`
 *    events to chain frame renders as fast as the hardware decoder can present them.
 * 4. Includes an adaptive hardware watchdog (70-100ms) to ensure scrubbing never locks up.
 * 5. Dynamically adapts thresholds for low-end CPUs/mobile devices to prevent thermal throttling.
 */
export function useSmoothVideoScrub(videoRef, containerRef, options = {}) {
  const {
    start = "top top",
    end = "+=140% top",
    pin = true,
    scrub = 0.5,
    onProgress,
  } = options;

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let isDestroyed = false;
    let targetProgress = 0;
    let currentProgress = 0;
    let isSeeking = false;
    let lastSeekTime = 0;
    let rafId = null;
    let watchdogTimer = null;

    // Detect if device is resource-constrained or mobile
    const isLowEnd = typeof navigator !== "undefined" && (
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      ("ontouchstart" in window) ||
      (typeof window !== "undefined" && window.innerWidth < 768)
    );

    // Adaptive hardware tolerances
    const minTimeDelta = isLowEnd ? 0.032 : 0.016; // Min seek delta in seconds
    const watchdogLimit = isLowEnd ? 100 : 70;     // Watchdog timeout in ms
    const lerpFactor = isLowEnd ? 0.28 : 0.20;     // Interpolation smoothing factor

    // Configure video properties for optimal scrubbing
    video.pause();
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";

    // Hint GPU compositing
    video.style.transform = "translateZ(0)";
    video.style.willChange = "transform";

    const unlockDecoder = () => {
      if (isDestroyed) return;
      isSeeking = false;
      if (watchdogTimer) {
        clearTimeout(watchdogTimer);
        watchdogTimer = null;
      }
    };

    const handleSeeked = () => {
      unlockDecoder();
    };

    video.addEventListener("seeked", handleSeeked);

    // Dispatch seek to video element safely
    const dispatchSeek = (time) => {
      if (isDestroyed || !video.duration) return;

      isSeeking = true;
      lastSeekTime = performance.now();

      // Reset watchdog
      if (watchdogTimer) clearTimeout(watchdogTimer);
      watchdogTimer = setTimeout(() => {
        if (!isDestroyed && isSeeking) {
          unlockDecoder();
        }
      }, watchdogLimit);

      try {
        video.currentTime = time;
      } catch {
        unlockDecoder();
      }

      // Synchronize with compositor via requestVideoFrameCallback when supported
      if ("requestVideoFrameCallback" in video) {
        try {
          video.requestVideoFrameCallback(() => {
            unlockDecoder();
          });
        } catch {
          // Handled by 'seeked' event
        }
      }
    };

    // Animation loop (RAF)
    const tick = () => {
      if (isDestroyed) return;

      const dur = video.duration;
      if (dur && !isNaN(dur) && dur > 0 && video.readyState >= 1) {
        // Smooth lerp progress towards target scroll position
        const diffProgress = targetProgress - currentProgress;
        if (Math.abs(diffProgress) > 0.0004) {
          currentProgress += diffProgress * lerpFactor;
        } else {
          currentProgress = targetProgress;
        }

        // Clamp safely to prevent boundary blanking
        const targetTime = Math.max(0.01, Math.min(dur - 0.04, currentProgress * dur));
        const timeDiff = Math.abs(video.currentTime - targetTime);

        // Hardware watchdog check
        if (isSeeking && (performance.now() - lastSeekTime > watchdogLimit)) {
          unlockDecoder();
        }

        // Only dispatch seek when hardware decoder is ready and delta is meaningful
        if (!isSeeking && timeDiff > minTimeDelta) {
          dispatchSeek(targetTime);
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    // Create GSAP ScrollTrigger
    const st = ScrollTrigger.create({
      trigger: container,
      start,
      end,
      pin,
      scrub,
      anticipatePin: 1,
      onUpdate: (self) => {
        if (isDestroyed) return;
        targetProgress = self.progress;
        if (onProgress) onProgress(self.progress, self);
      },
    });

    // Handle ready state
    const handleReady = () => {
      if (isDestroyed || !video.duration) return;
      targetProgress = st.progress;
      currentProgress = st.progress;
      try {
        const initialTime = Math.max(0.01, Math.min(video.duration - 0.04, st.progress * video.duration));
        video.currentTime = initialTime;
      } catch {
        // Ignore boundary seek err
      }
    };

    if (video.readyState >= 1 && video.duration) {
      handleReady();
    } else {
      video.addEventListener("loadedmetadata", handleReady, { once: true });
      video.addEventListener("canplay", handleReady, { once: true });
    }

    // Start RAF tick
    rafId = requestAnimationFrame(tick);

    return () => {
      isDestroyed = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (watchdogTimer) clearTimeout(watchdogTimer);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("loadedmetadata", handleReady);
      video.removeEventListener("canplay", handleReady);
      st.kill();
    };
  }, [start, end, pin, scrub, containerRef, videoRef, onProgress]);
}
