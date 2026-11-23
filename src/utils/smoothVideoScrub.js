import { ScrollTrigger } from "gsap/all";

/**
 * Creates a buttery-smooth, non-blocking video scroll scrubber.
 *
 * In standard GSAP `tl.to(video, { currentTime })`, GSAP sets `video.currentTime` 60-120 times/sec.
 * When the browser's hardware decoder receives a new seek while `video.seeking === true`,
 * it aborts the in-flight frame decode. This results in the video completely freezing during scroll.
 *
 * This controller:
 * 1. Preloads the video and ensures it is paused.
 * 2. Only issues seeks when the hardware decoder is ready (!isSeeking).
 * 3. Immediately chains the next seek upon the native 'seeked' event.
 * 4. Renders every frame smoothly without aborts, drops, or freezing.
 */
export function createSmoothVideoScrub(videoEl, options = {}) {
  if (!videoEl) return null;

  const {
    trigger,
    start = "top top",
    end = "+=200% top",
    pin = true,
    scrub = true,
    onProgress,
  } = options;

  let targetTime = 0;
  let isSeeking = false;
  let isDestroyed = false;
  let lastSeekTime = 0;

  // Configure video for optimal hardware scrubbing
  videoEl.pause();
  videoEl.muted = true;
  videoEl.defaultMuted = true;
  videoEl.playsInline = true;
  videoEl.preload = "auto";

  const renderFrame = () => {
    if (isDestroyed || !videoEl || !videoEl.duration) return;

    const diff = Math.abs(videoEl.currentTime - targetTime);
    if (!isSeeking && diff > 0.015) {
      isSeeking = true;
      lastSeekTime = performance.now();

      try {
        if (typeof videoEl.fastSeek === "function") {
          videoEl.fastSeek(targetTime);
        } else {
          videoEl.currentTime = targetTime;
        }
      } catch (e) {
        videoEl.currentTime = targetTime;
      }
    }
  };

  const handleSeeked = () => {
    if (isDestroyed) return;
    isSeeking = false;

    // If target has moved while this frame was decoding, render the newest frame immediately
    if (Math.abs(videoEl.currentTime - targetTime) > 0.015) {
      renderFrame();
    }
  };

  videoEl.addEventListener("seeked", handleSeeked);

  // Safety fallback: if a seek hangs for > 150ms, release the lock so scrubbing never freezes
  const safetyInterval = setInterval(() => {
    if (isSeeking && performance.now() - lastSeekTime > 150) {
      isSeeking = false;
      renderFrame();
    }
  }, 50);

  const st = ScrollTrigger.create({
    trigger,
    start,
    end,
    pin,
    scrub,
    onUpdate: (self) => {
      if (isDestroyed || !videoEl || !videoEl.duration) return;

      const dur = videoEl.duration;
      // Clamp target time safely within [0, duration - 0.05]
      targetTime = Math.max(0, Math.min(dur - 0.04, self.progress * dur));
      renderFrame();

      if (onProgress) {
        onProgress(self.progress, self);
      }
    },
  });

  // Handle initial frame
  const initFrame = () => {
    if (isDestroyed || !videoEl.duration) return;
    targetTime = Math.max(0, Math.min(videoEl.duration - 0.04, st.progress * videoEl.duration));
    renderFrame();
  };

  if (videoEl.readyState >= 1) {
    initFrame();
  } else {
    videoEl.addEventListener("loadedmetadata", initFrame, { once: true });
  }

  return {
    destroy: () => {
      isDestroyed = true;
      clearInterval(safetyInterval);
      videoEl.removeEventListener("seeked", handleSeeked);
      st.kill();
    },
  };
}
