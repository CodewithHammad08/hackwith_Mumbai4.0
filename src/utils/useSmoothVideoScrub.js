import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

/**
 * Ultra-smooth, non-blocking video scrubber for scroll-driven video playback.
 * 
 * Specifically engineered to eliminate browser video decoder stalls and freezes:
 * 1. Decouples ScrollTrigger updates from direct hardware decode requests.
 * 2. Strictly prevents seek cancellation: Never assigns video.currentTime while
 *    the browser media pipeline is actively seeking (video.seeking || isSeeking).
 * 3. Maintains a pendingSeek queue: Whenever a scroll update arrives while a seek
 *    is in-flight, it saves the latest timestamp and dispatches it immediately on
 *    the 'seeked' event or requestVideoFrameCallback.
 * 4. Limits active RAF and seeks ONLY to when the section is in the viewport
 *    range (ScrollTrigger onToggle / isActive).
 * 5. Uses a safe 350ms watchdog to recover from any browser compositor hiccups
 *    without prematurely interrupting slower hardware decoders on low-end devices.
 */
export function useSmoothVideoScrub(videoRef, containerRef, options = {}) {
  const {
    start = "top top",
    end = "+=140%",
    pin = true,
    scrub = 0.5,
    onProgress,
  } = options;

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let isDestroyed = false;
    let isSeeking = false;
    let pendingSeekTime = null;
    let targetTime = 0;
    let currentTime = 0;
    let rafId = null;
    let watchdogTimer = null;
    let isVisible = false;

    // Detect low-end / touch devices to adapt lerp factor
    const isLowEnd = typeof navigator !== "undefined" && (
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      ("ontouchstart" in window) ||
      (typeof window !== "undefined" && window.innerWidth < 768)
    );
    const lerpFactor = isLowEnd ? 0.35 : 0.22;
    const minSeekDelta = isLowEnd ? 0.025 : 0.015;

    // Configure video attributes for optimal scrubbing
    video.pause();
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.style.transform = "translate3d(0, 0, 0)";
    video.style.willChange = "transform";
    video.style.backfaceVisibility = "hidden";

    const unlockDecoder = () => {
      if (isDestroyed) return;
      isSeeking = false;
      if (watchdogTimer) {
        clearTimeout(watchdogTimer);
        watchdogTimer = null;
      }
      // If a seek was requested while busy, immediately dispatch the newest queued time
      if (pendingSeekTime !== null) {
        const nextTime = pendingSeekTime;
        pendingSeekTime = null;
        dispatchSeek(nextTime);
      }
    };

    const dispatchSeek = (time) => {
      if (isDestroyed || !video.duration || isNaN(video.duration)) return;

      const dur = video.duration;
      const safeTime = Math.max(0.01, Math.min(dur - 0.04, time));

      // Skip negligible timestamp deltas
      if (Math.abs(video.currentTime - safeTime) < minSeekDelta) {
        return;
      }

      // If decoder is currently busy, queue the newest time and wait
      if (isSeeking || video.seeking) {
        pendingSeekTime = safeTime;
        return;
      }

      isSeeking = true;
      if (watchdogTimer) clearTimeout(watchdogTimer);
      // Generous 350ms watchdog so low-end decoders have ample time to finish
      watchdogTimer = setTimeout(() => {
        if (!isDestroyed && isSeeking) {
          unlockDecoder();
        }
      }, 350);

      try {
        video.currentTime = safeTime;
      } catch {
        unlockDecoder();
      }

      // Synchronize with compositor when supported
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

    const handleSeeked = () => {
      unlockDecoder();
    };

    video.addEventListener("seeked", handleSeeked);

    // Continuous smooth animation loop
    const tick = () => {
      if (isDestroyed) return;

      if (isVisible && video.duration && !isNaN(video.duration)) {
        const diff = targetTime - currentTime;
        if (Math.abs(diff) > 0.002) {
          currentTime += diff * lerpFactor;
        } else {
          currentTime = targetTime;
        }

        dispatchSeek(currentTime);
      }

      rafId = requestAnimationFrame(tick);
    };

    // GSAP ScrollTrigger creation
    const st = ScrollTrigger.create({
      trigger: container,
      start,
      end,
      pin,
      scrub,
      anticipatePin: 1,
      onToggle: (self) => {
        isVisible = self.isActive;
      },
      onUpdate: (self) => {
        if (isDestroyed) return;
        isVisible = true;
        if (video.duration && !isNaN(video.duration)) {
          targetTime = self.progress * video.duration;
        }
        if (onProgress) onProgress(self.progress, self);
      },
    });

    const handleLoadedMetadata = () => {
      if (isDestroyed || !video.duration) return;
      targetTime = st.progress * video.duration;
      currentTime = targetTime;
      dispatchSeek(currentTime);
    };

    // Ensure any ScrollTriggers below this pinned video recalculate their offsets
    const refreshId = pin
      ? setTimeout(() => {
          if (!isDestroyed) {
            ScrollTrigger.sort();
            ScrollTrigger.refresh();
          }
        }, 60)
      : null;

    if (video.readyState >= 1 && video.duration) {
      handleLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata, { once: true });
      video.addEventListener("canplay", handleLoadedMetadata, { once: true });
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      isDestroyed = true;
      if (refreshId) clearTimeout(refreshId);
      if (rafId) cancelAnimationFrame(rafId);
      if (watchdogTimer) clearTimeout(watchdogTimer);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleLoadedMetadata);
      st.kill();
    };
  }, [start, end, pin, scrub, containerRef, videoRef, onProgress]);
}
