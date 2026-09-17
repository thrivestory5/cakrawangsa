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
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 9 Clickable & Hoverable Sector Nodes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {ECOSYSTEM_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node)}
                  onFocus={() => setActiveNode(node)}
                  onClick={() => setActiveNode(node)}
                  data-cursor-text="INSPECT"
                  className={`p-4 rounded-xl text-left transition-all duration-300 relative border flex flex-col justify-between min-h-[130px] cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-b from-[#1c2438] to-[#0f1422] border-amber-400 shadow-[0_0_25px_rgba(212,175,55,0.3)] translate-x-1"
                      : "bg-[#0a0e18]/80 border-amber-500/15 hover:border-amber-400/40 hover:bg-[#111728]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? "bg-amber-400 text-black shadow-[0_0_10px_#D4AF37]"
                          : "bg-amber-400/10 text-amber-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#D4AF37] animate-ping" />
                    )}
                  </div>

                  <h3
                    className={`font-serif text-xs font-bold uppercase tracking-wider mt-3 leading-snug transition-colors ${
                      isSelected ? "text-amber-200" : "text-slate-300"
                    }`}
                  >
                    {node.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right: Deep-Dive Inspector Panel for Selected Node (Auto Changes on Hover) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#131a2b] to-[#0a0e1a] p-8 rounded-3xl border border-amber-400/30 relative overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.7)] min-h-[440px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-amber-500/20 pb-4">
                    <div className="p-3 rounded-xl bg-amber-400 text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                      <activeNode.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                        Ecosystem Sector Analysis
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-white">
                        {activeNode.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-2">
                      Fungsi & Nilai Strategis
                    </h4>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      {activeNode.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                        Target Kemitraan & Klien:
                      </h4>
                      <p className="text-xs text-amber-200 mt-1 font-medium">
                        {activeNode.clients}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                        Output & Solusi Produksi:
                      </h4>
                      <p className="text-xs text-slate-300 mt-1">
                        {activeNode.deliverables}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-amber-500/20 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-amber-400/80">
                    Kolaborasi Tersedia
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-300 hover:text-white transition-colors"
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
