"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Building2,
  Landmark,
  Users2,
  HeartHandshake,
  Mic2,
  Presentation,
  Film,
  Megaphone,
  Briefcase,
  Layers,
  ArrowRight,
} from "lucide-react";



const ECOSYSTEM_NODES = [
  {
    id: "korporasi",
    name: "Korporasi & Perusahaan",
    icon: Building2,
    desc: "Menyampaikan komunikasi korporat, cerita brand (brand storytelling), dan solusi bisnis audiovisual yang kredibel dan berdampak luas.",
    clients: "BUMN, Multinasional, Perusahaan Swasta Nasional",
    deliverables: "Company Profile, CSR Showcase, Annual Report Videos, Brand Films",
  },
  {
    id: "pemerintah",
    name: "Pemerintah & Lembaga Publik",
    icon: Landmark,
    desc: "Mendukung program strategis pemerintah, penyebaran informasi publik, dan inisiatif komunikasi pembangunan bangsa.",
    clients: "Kementerian, Lembaga Negara, Pemda, Institusi Publik",
    deliverables: "PSA (Iklan Layanan Masyarakat), Dokumenter Kebijakan, Kampanye Nasional",
  },
  {
    id: "asosiasi",
    name: "Asosiasi & Organisasi",
    icon: Users2,
    desc: "Berkolaborasi dengan asosiasi dan organisasi profesional untuk memperkuat engagement, kesadaran publik, dan dampak sosial.",
    clients: "Ikatan Profesi, Yayasan Sosial, NGO, Organisasi Dagang",
    deliverables: "Video Profil Organisasi, Kampanye Advokasi, Visual Milestone",
  },
  {
    id: "komunitas",
    name: "Komunitas & Kelompok Sosial",
    icon: HeartHandshake,
    desc: "Memberdayakan komunitas melalui cerita inspiratif nusantara, edukasi audiovisual, dan memicu perubahan sosial yang konstruktif.",
    clients: "Komunitas Budaya, Gerakan Pemuda, Penggiat Lingkungan",
    deliverables: "Docuseries Komunitas, Workshop Sinema, Video Inspirasi Warga",
  },
  {
    id: "meeting",
    name: "Meeting & Konvensi",
    icon: Mic2,
    desc: "Menyediakan solusi kreatif untuk event, konferensi internasional, summit, dan konvensi dengan narasi storytelling yang menggetarkan.",
    clients: "Event Organizer, Korporasi, Lembaga Konvensi Internasional",
    deliverables: "Opening Bumper Video, Keynote Presentations, Event Highlight Reels",
  },
  {
    id: "pameran",
    name: "Pameran & Pagelaran",
    icon: Presentation,
    desc: "Menghadirkan konten visual imersif untuk pameran seni, ekshibisi dagang, pertunjukan teater, dan presentasi publik yang berkesan.",
    clients: "Museum, Galeri Seni, Festival Budaya, Expo Komersial",
    deliverables: "Interactive Video Wall, Projection Mapping Content, Immersive Display",
  },
  {
    id: "film",
    name: "Produksi Film & Konten Audiovisual",
    icon: Film,
    desc: "Memproduksi film layar lebar, serial orisinal, FTV, dokumenter panjang, dan konten sinematik yang menghibur dan menginspirasi jutaan penonton.",
    clients: "Studio Film, Bioskop, Platform OTT (Netflix/Prime/Vidio), TV Nasional",
    deliverables: "Theatrical Feature Films, Web Series, TV Movies, Docu-Features",
  },
  {
    id: "iklan",
    name: "Periklanan & Kampanye Brand",
    icon: Megaphone,
    desc: "Mengembangkan kampanye iklan komersial televisi (TVC) dan digital yang kreatif, memikat emosi, dan melipatgandakan brand equity.",
    clients: "Brand FMCG, Telekomunikasi, Otomotif, Finansial, Startups",
    deliverables: "TV Commercials (TVC), Digital Ad Campaigns, Social Viral Campaigns",
  },
  {
    id: "media_korporat",
    name: "Profil Perusahaan & Media Korporat",
    icon: Briefcase,
    desc: "Membangun profil perusahaan profesional dan media korporat yang mengkomunikasikan integritas, visi kepemimpinan, dan nilai perusahaan.",
    clients: "Emiten Saham, Konglomerasi, Institusi Finansial",
    deliverables: "Executive Leadership Profiling, Investor Relations Videos, Internal Culture",
  },
];

const INDUSTRIES = [
  "Pemerintah",
  "Korporasi",
  "Industri Kreatif",
  "Hiburan",
  "Pariwisata",
  "Pendidikan",
  "Pembangunan Komunitas",
];

export default function EcosystemSection() {
  const [activeNode, setActiveNode] = useState(ECOSYSTEM_NODES[0]);

  return (
    <section id="ecosystem" className="relative w-full py-28 bg-[#070a12] overflow-hidden border-t border-amber-500/10">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-amber-500/15">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Section 03 // Ekosistem Bisnis Kami</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Menghubungkan Kreativitas <br />
              <span className="text-gold-gradient">Dengan Lintas Sektor.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-xs sm:text-sm leading-relaxed">
            PT. Cakrawangsa Cinema Production hadir sebagai simpul kreatif terintegrasi, menjembatani industri komersial, pemerintah, komunitas sosial, dan panggung hiburan publik.
          </p>
        </div>

        {/* Interactive Ecosystem Network Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: 9 Clickable & Hoverable Sector Nodes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 h-full auto-rows-fr">
            {ECOSYSTEM_NODES.map((node, index) => {
              const Icon = node.icon;
              const isSelected = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node)}
                  onFocus={() => setActiveNode(node)}
                  onClick={() => setActiveNode(node)}
                  data-cursor-text="INSPECT"
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 relative border flex flex-col justify-between cursor-pointer group ${
                    isSelected
                      ? "bg-gradient-to-b from-[#1c2438] to-[#0f1422] border-amber-400 shadow-[0_0_30px_rgba(212,175,55,0.25)] ring-1 ring-amber-400/50"
                      : "bg-[#0a0e18]/85 border-amber-500/15 hover:border-amber-400/50 hover:bg-[#111728] hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-amber-400 text-black shadow-[0_0_12px_#D4AF37]"
                          : "bg-amber-400/10 text-amber-300 group-hover:bg-amber-400/20 group-hover:text-amber-200"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <span
                      className={`text-[10px] font-mono tracking-widest font-bold transition-colors ${
                        isSelected ? "text-amber-400" : "text-slate-500 group-hover:text-amber-400/70"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3
                      className={`font-serif text-xs sm:text-[13px] font-bold uppercase tracking-wide leading-snug transition-colors ${
                        isSelected ? "text-amber-200" : "text-slate-200 group-hover:text-white"
                      }`}
                    >
                      {node.name}
                    </h3>
                  </div>

                  {/* Active bottom accent line */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Deep-Dive Inspector Panel for Selected Node (Auto Changes on Hover) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#111728] via-[#0d121f] to-[#080c16] p-7 sm:p-8 rounded-2xl border border-amber-400/35 relative overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.7)] flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 border-b border-amber-500/20 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 text-black flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] shrink-0">
                      <activeNode.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                          SECTOR 0{ECOSYSTEM_NODES.findIndex((n) => n.id === activeNode.id) + 1} // ANALYSIS
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold uppercase text-white tracking-wide mt-0.5">
                        {activeNode.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400/90 font-semibold mb-1.5">
                        Fungsi & Nilai Strategis
                      </h4>
                      <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                        {activeNode.desc}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/40 border border-amber-500/15 space-y-3">
                      <div>
                        <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          Target Kemitraan & Klien:
                        </h4>
                        <p className="text-xs text-amber-200 mt-1 font-medium leading-normal">
                          {activeNode.clients}
                        </p>
                      </div>

                      <div className="border-t border-amber-500/10 pt-2.5">
                        <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          Output & Solusi Produksi:
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 leading-normal">
                          {activeNode.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-amber-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    <span className="text-[11px] font-mono text-slate-300">
                      Kolaborasi Tersedia
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-xs font-mono font-bold text-amber-300 hover:bg-amber-400 hover:text-black transition-all shadow-[0_0_12px_rgba(212,175,55,0.15)]"
                  >
                    <span>Ajukan Kemitraan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Industry Badges & Metrics Bar (Slide 4 Footer) */}
        <div className="mt-16 p-6 rounded-2xl bg-black/60 border border-amber-500/15">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block mb-2 font-semibold">
                Melayani Klien di Berbagai Industri
              </span>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#141b2a] border border-amber-500/20 text-slate-300 hover:border-amber-400/50 hover:text-amber-200 transition-colors"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8 border-t lg:border-t-0 lg:border-l border-amber-500/20 pt-4 lg:pt-0 lg:pl-8 text-center sm:text-left">
              <div>
                <span className="text-2xl font-serif font-bold text-amber-400">9+</span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Segmen Bisnis
                </span>
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-amber-400">5+</span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Layanan Kreatif
                </span>
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-amber-400">100%</span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Jangkauan Nasional
                </span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs font-serif italic text-amber-200/90 tracking-wider">
            &ldquo;Bersama Kita Menciptakan Karya. Bersama Kita Menginspirasi. Bersama Kita Tumbuh.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
