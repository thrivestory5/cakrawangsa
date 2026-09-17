"use client";

import { Lightbulb, Film, HeartHandshake, Clapperboard, Sparkles } from "lucide-react";


const VALUES = [
  {
    icon: Lightbulb,
    code: "01",
    title: "Creative Vision",
    desc: "Gagasan kuat dan identitas cerita yang jelas dengan eksplorasi artistik yang berani dan mendalam.",
    tag: "Ideation & Originality",
  },
  {
    icon: Film,
    code: "02",
    title: "Professional Execution",
    desc: "Proses produksi terstruktur, disiplin anggaran, teknologi sinematografi mutakhir, dan komitmen jadwal.",
    tag: "High Standard Craft",
  },
  {
    icon: HeartHandshake,
    code: "03",
    title: "Meaningful Impact",
    desc: "Menghadirkan karya sinematik yang menghibur, sarat makna, bernilai budaya, serta membekas dalam ingatan penonton.",
    tag: "Cultural Resonance",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-28 bg-[#07090e] overflow-hidden border-t border-amber-500/10">
      {/* Clean Futuristic Background with Ambient Golden Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-amber-600/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3705_1px,transparent_1px),linear-gradient(to_bottom,#d4af3705_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-amber-500/15 pb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold mb-3">
              <Clapperboard className="w-3.5 h-3.5 text-amber-400" />
              <span>Section 01 // Tentang Kami</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
              Membangun Cerita, <br />
              <span className="text-gold-gradient">Menghidupkan Imajinasi.</span>
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-amber-200 font-semibold">PT. Cakrawangsa Cinema Production</strong> adalah entitas kreatif Indonesia yang mendedikasikan diri untuk melahirkan karya sinematik, serial televisi, media kreatif, dan hiburan bermutu tinggi.
            </p>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Kami percaya bahwa kekuatan narasi yang berakar pada kearifan budaya nusantara memiliki resonansi emosional yang tak terbatas untuk memukau audiens domestik dan bersaing di panggung festival serta pasar global.
            </p>
          </div>
        </div>

        {/* 3 Core Values Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                data-cursor-text={val.code}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-[#0e1320]/80 to-[#090c14]/90 border border-amber-500/15 hover:border-amber-400/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] flex flex-col justify-between"
              >
                {/* Top Corner Code & Glow */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-amber-400/70 tracking-widest uppercase">
                    PILLAR {val.code}
                  </span>
                  <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-8">
                  <span className="text-[10px] font-mono tracking-widest text-amber-500/80 uppercase">
                    {val.tag}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-amber-200 transition-colors mt-1">
                    {val.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                {/* Bottom Line Accent */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-300/80">
                    <Sparkles className="w-3 h-3" />
                    <span>Cakrawangsa Standard</span>
                  </span>
                  <span className="text-slate-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Box */}
        <div className="mt-14 p-8 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-black/60 to-amber-500/5 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          <p className="font-serif text-lg sm:text-2xl md:text-3xl text-amber-100 font-light italic max-w-4xl mx-auto leading-relaxed">
            &ldquo;Dengan mengangkat nilai budaya dan karakter lokal, kami berkomitmen menghadirkan karya yang relevan bagi penonton nasional serta memiliki daya jangkau internasional.&rdquo;
          </p>
          <p className="mt-4 text-xs font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold">
            — Filosofi PT. Cakrawangsa Cinema Production
          </p>
        </div>
      </div>
    </section>
  );
}
