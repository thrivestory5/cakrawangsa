"use client";

import { Target, Compass, Globe2, Sparkles, CheckCircle2 } from "lucide-react";

const MISSIONS = [
  {
    num: "01",
    title: "Karya Inovatif & Relevan",
    desc: "Menghasilkan film dan konten audiovisual yang kreatif, inovatif, berkualitas tinggi, serta relevan dengan evolusi industri hiburan kontemporer.",
  },
  {
    num: "02",
    title: "Kearifan Budaya Universal",
    desc: "Mengangkat kekayaan cerita, budaya, dan kearifan lokal Indonesia menjadi narasi sinematik berdaya pikat universal bagi audiens dunia.",
  },
  {
    num: "03",
    title: "Produksi Berkelanjutan",
    desc: "Membangun ekosistem dan alur proses produksi yang profesional, efektif, transparan, kolaboratif, dan berkelanjutan jangka panjang.",
  },
  {
    num: "04",
    title: "Ruang Tumbuh Sineas",
    desc: "Memberikan ruang inkubasi dan akselerasi bagi kreator, sineas, sutradara muda, dan talenta berbakat untuk melahirkan mahakarya terbaik.",
  },
  {
    num: "05",
    title: "Kemitraan Strategis Tepercaya",
    desc: "Menjalin kemitraan solid dan terpercaya bersama investor, klien korporasi, platform streaming internasional, komunitas, dan pemangku kepentingan.",
  },
  {
    num: "06",
    title: "Inspirasi & Dampak Sosial",
    desc: "Menghadirkan karya yang tidak sekadar menghibur di bioskop, namun memberi nilai edukatif, inspirasi moral, dan dampak positif nyata bagi masyarakat.",
  },
];

export default function VisionMissionSection() {
  return (
    <section id="vision" className="relative w-full py-28 bg-[#050508] overflow-hidden border-t border-amber-500/10">
      {/* Decorative Glow Orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Pill Label */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold mb-3">
          <Target className="w-3.5 h-3.5 text-amber-400" />
          <span>Section 02 // Visi & Misi Perusahaan</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Vision Golden Monument */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Arah Visi & <br />
              <span className="text-gold-gradient">Misi Sinematik.</span>
            </h2>

            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#121827] to-[#07090e] border border-amber-400/40 relative overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-400 text-black font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                    Grand Vision
                  </span>
                  <h3 className="font-serif text-xl font-bold uppercase text-white">
                    Visi Perusahaan
                  </h3>
                </div>
              </div>

              <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed">
                Menjadi rumah produksi film dan konten audiovisual <span className="text-amber-300 font-semibold">terkemuka di Indonesia</span> yang menghadirkan karya berkualitas, berkarakter, bernilai budaya, dan mampu menjangkau pasar <span className="text-amber-300 font-semibold">nasional maupun internasional</span>.
              </p>

              <div className="mt-8 pt-6 border-t border-amber-500/20 flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-mono text-slate-300">
                  Global Reach & Local Heritage Strategy
                </span>
              </div>
            </div>

            {/* Golden Statement Quote */}
            <div className="p-6 rounded-2xl border border-amber-500/20 bg-black/40 backdrop-blur-md">
              <span className="text-3xl text-amber-400 font-serif leading-none">&ldquo;</span>
              <p className="font-serif text-lg text-amber-100 italic -mt-2 leading-snug">
                Dari cerita yang berakar pada budaya, kami menciptakan karya yang menjangkau dunia.
              </p>
              <div className="flex items-center gap-2 mt-4 text-[10px] font-mono tracking-widest text-amber-400/80 uppercase">
                <Sparkles className="w-3 h-3" />
                <span>Company Profile 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Mission Interactive Nodes */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/15 mb-2">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
                6 Pilar Misi Strategis
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Pencapaian Mutu Terstruktur
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MISSIONS.map((m) => (
                <div
                  key={m.num}
                  data-cursor-text={`MISI ${m.num}`}
                  className="group p-6 rounded-2xl bg-[#090d16] border border-amber-500/15 hover:border-amber-400/50 hover:bg-[#0f1523] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold text-amber-400/60 group-hover:text-amber-400 transition-colors">
                        {m.num}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-amber-500/40 group-hover:text-amber-300 transition-colors" />
                    </div>
                    <h4 className="font-serif text-base font-bold uppercase text-white group-hover:text-amber-200 transition-colors mb-2">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
