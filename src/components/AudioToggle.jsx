import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleAudio = () => {
    try {
      if (!isPlaying) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Create warm ambient synth drone
        const osc = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(55, ctx.currentTime); // Low A

        osc2.type = "sine";
        osc2.frequency.setValueAtTime(110, ctx.currentTime);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.5);

        osc.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start();
        osc2.start();

        oscillatorRef.current = { osc, osc2 };
        gainNodeRef.current = gainNode;
        setIsPlaying(true);
      } else {
        if (gainNodeRef.current && audioCtxRef.current) {
          gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
          setTimeout(() => {
            if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
              audioCtxRef.current.close();
            }
            setIsPlaying(false);
          }, 500);
        } else {
          setIsPlaying(false);
        }
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={toggleAudio}
      title={isPlaying ? "Mute Vice City Ambient Theme" : "Play Vice City Ambient Theme"}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 border border-neutral-700 text-xs font-bold text-gray-300 transition-colors cursor-pointer"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-pink animate-pulse" />
          <span className="hidden sm:inline text-pink">SYNTH ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-gray-400" />
          <span className="hidden sm:inline text-gray-400">AUDIO</span>
        </>
      )}
    </button>
  );
};

export default AudioToggle;
