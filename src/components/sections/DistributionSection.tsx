"use client";

import {
  Film,
  Tv,
  Radio,
  Trophy,
  Smartphone,
  Handshake,
  Globe2,
  Sparkles,
} from "lucide-react";


const CHANNELS = [
  {
    icon: Film,
    title: "Bioskop (Theatrical)",
    sub: "Layar Lebar Nasional",
    desc: "Menghadirkan pengalaman audio-visual megah untuk jutaan penikmat film di jaringan bioskop seluruh Indonesia.",
    tag: "Cinema Release",
  },
  {
    icon: Tv,
    title: "Streaming & OTT",
    sub: "Global On-Demand",
    desc: "Distribusi digital skala internasional di platform Video-on-Demand terdepan (Netflix, Disney+, Prime Video, Vidio).",
    tag: "OTT Platforms",
  },
  {
    icon: Radio,
    title: "Televisi Terestrial",
    sub: "Penyiaran FTA & Berbayar",
    desc: "Memproduksi sinema dan serial untuk jaringan stasiun televisi terestrial swasta nasional dan regional Indonesia.",
    tag: "National Broadcast",
  },
  {
    icon: Trophy,
    title: "Festival Film",
    sub: "Apresiasi & Rekognisi Global",
    desc: "Ruang pengakuan kuratorial di sirkuit festival film bergengsi tingkat nasional hingga festival mancanegara.",
    tag: "Festival Circuit",
  },
  {
    icon: Smartphone,
    title: "Digital Media",
    sub: "Platform Vertikal & Gen-Z",
    desc: "Microdrama berorientasi mobile, web series, trailer, dan cuplikan viral lintas kanal media sosial modern.",
    tag: "Digital & Mobile",
  },
  {
    icon: Handshake,
    title: "Strategic Partnership",
    sub: "Sinergi Multipihak",
    desc: "Kolaborasi bersama sponsor korporasi, lembaga pemerintah, investor sinema, dan agregator lisensi konten.",
    tag: "Brand & Co-Prod",
  },
];

export default function DistributionSection() {
  return (
    <section id="distribution" className="relative w-full py-28 bg-[#050508] overflow-hidden border-t border-amber-500/10">
      {/* Clean Global Network Atmospheric Background (Zero Messy Text) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Subtle Concentric Planetary Arcs */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-amber-500/10" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-amber-500/5" />
        <div className="absolute w-[1200px] h-[1200px] rounded-full border border-amber-500/5" />
        {/* Ambient Radial Bloom */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[150px]" />
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-400/5 text-amber-400 text-xs font-mono tracking-[0.25em] uppercase mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Section 06 // Jangkauan Distribusi Global</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            Dari Cerita Lokal Menuju <br />
            <span className="text-gold-gradient">Penonton Global.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Strategi distribusi multiplatform yang terencana secara matang untuk melipatgandakan jangkauan audiens, memaksimalkan nilai komersial karya, dan menorehkan jejak budaya Indonesia di kancah dunia.
          </p>
        </div>

        {/* 6 Distribution Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHANNELS.map((ch) => {
            const Icon = ch.icon;
            return (
              <div
                key={ch.title}
                data-cursor-text="CHANNEL"
                className="group p-8 rounded-2xl bg-gradient-to-b from-[#0e1322] to-[#070a12] border border-amber-500/15 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                      {ch.tag}
                    </span>
                    <div className="p-3 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20 group-hover:bg-amber-400 group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold uppercase text-white group-hover:text-amber-200 transition-colors">
                    {ch.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-400/80 mt-0.5">
                    {ch.sub}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                    {ch.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Jangkauan Terverifikasi</span>
                  <Sparkles className="w-3 h-3 text-amber-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Golden Quote Banner from Slide 8 */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-black/80 to-amber-500/10 border border-amber-400/30 text-center relative">
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-amber-100 italic leading-relaxed max-w-4xl mx-auto">
            &ldquo;Cerita yang kuat tidak berhenti di layar—ia bergerak, menjangkau, dan tinggal dalam ingatan penonton.&rdquo;
          </p>
          <p className="mt-4 text-xs font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold">
            — Filosofi Distribusi PT. Cakrawangsa Cinema Production
          </p>
        </div>
      </div>
    </section>
  );
}
