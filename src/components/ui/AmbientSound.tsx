"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const startDrone = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 2.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Lowpass filter for deep warm cinematic sub tone
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(180, ctx.currentTime);
      filter.connect(masterGain);

      // Deep cinematic harmonic chords (D1, D2, A2)
      const frequencies = [55.0, 110.0, 164.81, 220.0];
      const oscs: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle detune for organic acoustic beating
        osc.detune.setValueAtTime((idx - 1.5) * 3, ctx.currentTime);

        const subGain = ctx.createGain();
        subGain.gain.setValueAtTime(0.25 / frequencies.length, ctx.currentTime);
        osc.connect(subGain);
        subGain.connect(filter);

        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (e) {
      console.warn("AudioContext error:", e);
    }
  };

  const stopDrone = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try { osc.stop(); } catch { /* ignore */ }
        });
        oscillatorsRef.current = [];
        if (audioCtxRef.current?.state !== "closed") {
          audioCtxRef.current?.close();
        }
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 1200);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopDrone();
    } else {
      startDrone();
    }
  };

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try { osc.stop(); } catch { /* ignore */ }
      });
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      data-cursor-text={isPlaying ? "MUTE" : "SOUND"}
      aria-label={isPlaying ? "Mute ambient cinema audio" : "Play ambient cinema audio"}
      className="group relative flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-amber-500/20 bg-black/40 backdrop-blur-md text-xs font-mono tracking-wider transition-all duration-300 hover:border-amber-400/60 hover:bg-amber-500/10"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          {/* Animated sound wave bars */}
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 h-full bg-amber-400 rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" />
            <span className="w-0.5 h-2/3 bg-amber-300 rounded-full animate-[bounce_0.9s_infinite_ease-in-out_0.2s]" />
            <span className="w-0.5 h-4/5 bg-amber-400 rounded-full animate-[bounce_0.7s_infinite_ease-in-out_0.4s]" />
            <span className="w-0.5 h-1/2 bg-amber-500 rounded-full animate-[bounce_1s_infinite_ease-in-out_0.1s]" />
          </div>
          <span className="text-[10px] text-amber-200 hidden sm:inline">ATMOSPHERE ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-300 transition-colors" />
          <span className="text-[10px] text-slate-400 group-hover:text-amber-300 transition-colors hidden sm:inline">
            CINEMATIC SOUND
          </span>
        </>
      )}
    </button>
  );
}
