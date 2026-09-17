"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Sparkles, ChevronDown, Award, Clapperboard, Film } from "lucide-react";


type AspectRatio = "cinemascope" | "theatrical" | "imax";

export default function HeroSection() {
  const [aspect, setAspect] = useState<AspectRatio>("cinemascope");
  const [timecode, setTimecode] = useState("00:00:00:00");

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const frames = String(frame % 24).padStart(2, "0");
      const totalSec = Math.floor(frame / 24);
      const sec = String(totalSec % 60).padStart(2, "0");
      const min = String(Math.floor(totalSec / 60) % 60).padStart(2, "0");
      const hr = String(Math.floor(totalSec / 3600)).padStart(2, "0");
      setTimecode(`${hr}:${min}:${sec}:${frames}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  // Letterbox mask calculations based on aspect ratio
  const letterboxClass = {
    cinemascope: "h-12 md:h-16",
    theatrical: "h-4 md:h-6",
    imax: "h-0",
  }[aspect];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#050508] pt-20">
      {/* Dynamic Letterbox Bars for Cine Viewfinder */}
      <div
        className={`fixed top-0 left-0 right-0 z-30 bg-black transition-all duration-700 pointer-events-none ${letterboxClass}`}
      />
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 bg-black transition-all duration-700 pointer-events-none ${letterboxClass}`}
      />

      {/* Clean Futuristic Cinema Atmosphere Background (Zero Messy Text) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Anamorphic Golden Light Bloom */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-b from-amber-400/10 via-amber-600/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-sky-500/5 blur-[140px]" />

        {/* Subtle Anamorphic Streak Line */}
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/10 to-transparent" />

        {/* Subtle Cinematic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3706_1px,transparent_1px),linear-gradient(to_bottom,#d4af3706_1px,transparent_1px)] bg-[size:5rem_5rem]" />

        {/* Central Luminous CW Emblem Watermark (Pure Graphic, No Text) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 opacity-15 pointer-events-none flex items-center justify-center">
          <Image
            src="/cw_emblem.png"
            alt="CW Watermark"
            width={300}
            height={300}
            className="w-auto h-auto max-w-full max-h-full object-contain filter drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          />

        </div>
      </div>



      {/* Viewfinder Camera Overlay UI (Awwwards Metagame) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-4 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono tracking-widest text-slate-400 border-b border-amber-500/15 pb-3">
          {/* Left: REC indicator & Lens */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-rec" />
              <span className="text-red-400 font-bold">REC ● [24 FPS]</span>
            </div>
            <span className="hidden sm:inline text-amber-500/60">|</span>
            <span className="hidden sm:inline text-slate-300">RAW 4K DCI • PRORES 4444 XQ</span>
          </div>

          {/* Center: Live Timecode */}
          <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded border border-amber-500/20 text-amber-300 font-mono font-bold">
            <span className="text-amber-500/70 text-[10px]">TC:</span>
            <span>{timecode}</span>
          </div>

          {/* Right: Aspect Ratio Toggle Switcher */}
          <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-lg border border-amber-500/20">
            <span className="text-[10px] text-slate-400 px-1 hidden md:inline">FRAME:</span>
            {(["cinemascope", "theatrical", "imax"] as AspectRatio[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setAspect(mode)}
                data-cursor-text={mode.toUpperCase()}
                className={`px-2 py-0.5 text-[10px] rounded transition-all ${
                  aspect === mode
                    ? "bg-amber-400 text-black font-bold shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                    : "text-slate-400 hover:text-amber-300"
                }`}
              >
                {mode === "cinemascope" ? "2.39:1" : mode === "theatrical" ? "16:9" : "1.43:1"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 py-12 lg:py-20 flex-1 flex flex-col justify-center">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-400/30 bg-black/60 backdrop-blur-xl w-fit mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-mono tracking-[0.25em] text-amber-200 uppercase font-semibold">
            Company Profile 2026 • Film & Creative Production
          </span>
        </motion.div>

        {/* Massive Cinematic Headings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-5xl"
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.4em] text-amber-400 uppercase font-semibold mb-3">
            PT. CAKRAWANGSA CINEMA PRODUCTION
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase">
            Transforming Stories <br />
            <span className="text-gold-gradient drop-shadow-[0_0_35px_rgba(212,175,55,0.35)]">
              Into Cinematic
            </span>{" "}
            Experiences.
          </h1>
        </motion.div>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed"
        >
          Rumah produksi film dan konten kreatif berkarakter kuat yang memadukan kedalaman budaya nusantara, visual mutakhir, dan eksekusi produksi berstandar internasional.
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#portfolio"
            data-cursor-text="WATCH"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black font-serif font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.6)]"
          >
            <div className="w-6 h-6 rounded-full bg-black/90 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-amber-400 ml-0.5" />
            </div>
            <span>Jelajahi Portofolio</span>
          </Link>

          <Link
            href="#contact"
            data-cursor-text="CONNECT"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-amber-500/30 bg-black/40 backdrop-blur-md text-amber-200 font-serif text-sm tracking-wider uppercase transition-all duration-300 hover:border-amber-400 hover:bg-amber-500/10 hover:text-white"
          >
            <span>Mulai Kolaborasi</span>
          </Link>
        </motion.div>

        {/* 3 Core Production Pillars Bar (From PDF Slide 1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-amber-500/15 pt-6"
        >
          {/* Pillar 1 */}
          <div className="flex items-start gap-4 p-4 rounded-xl border border-amber-500/10 bg-black/40 backdrop-blur-sm hover:border-amber-400/30 transition-colors">
            <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Clapperboard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-sm tracking-wider uppercase font-bold text-amber-200">
                Film Production
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Menciptakan karya film berkualitas tinggi dan berdampak bagi penonton.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-start gap-4 p-4 rounded-xl border border-amber-500/10 bg-black/40 backdrop-blur-sm hover:border-amber-400/30 transition-colors">
            <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-sm tracking-wider uppercase font-bold text-amber-200">
                Creative Media
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Solusi konten kreatif yang inovatif, tepat sasaran, dan strategis.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-start gap-4 p-4 rounded-xl border border-amber-500/10 bg-black/40 backdrop-blur-sm hover:border-amber-400/30 transition-colors">
            <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-sm tracking-wider uppercase font-bold text-amber-200">
                Entertainment
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Menghadirkan hiburan berkelas untuk menjangkau semua kalangan penonton.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Film Ribbon Bar */}
      <div className="relative z-20 border-t border-amber-500/15 bg-black/70 backdrop-blur-md py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest text-slate-400">
          <div className="flex items-center gap-6">
            <span className="text-amber-400 font-bold">9+ SEGMEN BISNIS</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400 font-bold">30+ TAHUN RECORD</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300 hidden sm:inline">DISTRIBUSI MULTI-PLATFORM</span>
          </div>
          <Link
            href="#about"
            className="flex items-center gap-1 text-amber-300/80 hover:text-amber-200 transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
