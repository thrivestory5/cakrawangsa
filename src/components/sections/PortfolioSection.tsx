"use client";

import { useState } from "react";
import Image from "next/image";
import { Film, X, Clapperboard, Eye, Award } from "lucide-react";


interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "feature" | "cultural" | "series" | "brand";
  categoryLabel: string;
  image: string;
  year: string;
  aspect: string;
  duration: string;
  synopsis: string;
  awards: string;
  highlights: string[];
}

const PROJECTS: Project[] = [
  {
    id: "legacy",
    title: "LEGACY",
    subtitle: "Warisan Keberanian & Martabat",
    category: "feature",
    categoryLabel: "Feature Film",
    image: "/poster_legacy.png",
    year: "2024 / 2025",
    aspect: "2.39:1 Cinemascope",
    duration: "118 Menit",
    synopsis:
      "Sebuah epos sinematik keluarga dan pengorbanan yang mengeksplorasi konflik antar-generasi, loyalitas darah, dan perjuangan mempertahankan integritas di tengah gejolak modernisasi.",
    awards: "Official Selection • Festival Sinema Indonesia",
    highlights: ["Theatrical Release", "Dolby Atmos 7.1", "Anamorphic Master"],
  },
  {
    id: "mentari-di-timur",
    title: "MENTARI DI TIMUR",
    subtitle: "Cahaya Harapan dari Ufuk Fajar",
    category: "cultural",
    categoryLabel: "Cultural & Story",
    image: "/poster_mentari_di_timur.png",
    year: "2024",
    aspect: "2.39:1 Cinemascope",
    duration: "105 Menit",
    synopsis:
      "Perjalanan mengharukan tentang seorang guru muda dan anak-anak pesisir di timur nusantara yang merajut mimpi di tengah keterbatasan sarana, memancarkan optimisme dan kekuatan cinta tanah air.",
    awards: "Apresiasi Sinema Edukasi Nasional",
    highlights: ["Indonesian Heritage Story", "Original Native Soundtrack", "Cinematic Landscape"],
  },
  {
    id: "jejak-tradisi",
    title: "JEJAK TRADISI",
    subtitle: "Cerita & Budaya Khas Nusantara",
    category: "cultural",
    categoryLabel: "Cultural & Story",
    image: "/poster_jejak_tradisi.png",
    year: "2023 / 2024",
    aspect: "16:9 Theatrical",
    duration: "6 Episode Docuseries",
    synopsis:
      "Docuseries premium yang menyingkap kearifan ritual, mahakarya seni tenun, musik tradisional, dan filosofi hidup leluhur suku-suku pedalaman Indonesia dengan sinematografi visual beresolusi 4K HDR.",
    awards: "Best Cultural Documentary Series Selection",
    highlights: ["Multiplatform Broadcast", "Historical Preservation", "Anthology Series"],
  },
  {
    id: "bata-batu-kota",
    title: "BATA BATU KOTA",
    subtitle: "Kisah, Manusia & Cipta Megapolitan",
    category: "series",
    categoryLabel: "Series & Digital",
    image: "/poster_bata_batu_kota.png",
    year: "2024",
    aspect: "2:1 Univisium",
    duration: "8 Episode Limited Series",
    synopsis:
      "Eksplorasi drama realitas kaum urban Jakarta: arsitek idealis, buruh bangunan, dan konglomerat yang nasibnya bertaut di puncak gedung pencakar langit yang sedang dibangun.",
    awards: "Nominated Outstanding Drama Production",
    highlights: ["Urban Drama Series", "Gritty Cinematic Grading", "High-Tension Narrative"],
  },
  {
    id: "harmoni-alam",
    title: "HARMONI ALAM",
    subtitle: "Resonansi Hayati & Simfoni Bumi",
    category: "feature",
    categoryLabel: "Feature Documentary",
    image: "/poster_harmoni_alam.png",
    year: "2023",
    aspect: "2.39:1 Cinemascope",
    duration: "90 Menit",
    synopsis:
      "Karya visual meditasi megah yang merekam denyut ekosistem hutan hujan tropis, terumbu karang laut dalam, dan harmoni interaksi masyarakat adat menjaga bumi pertiwi.",
    awards: "Environmental Cinema Honor Roll",
    highlights: ["Ultra-macro 4K & Drone Shots", "Soundscape Spatial Audio", "Global Theatrical Screening"],
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua Karya" },
  { id: "feature", label: "Feature Film" },
  { id: "cultural", label: "Cultural & Heritage" },
  { id: "series", label: "Series & Digital" },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative w-full py-28 bg-[#070a12] overflow-hidden border-t border-amber-500/10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-amber-500/15">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold mb-3">
              <Film className="w-3.5 h-3.5 text-amber-400" />
              <span>Section 05 // Portofolio Sinematik</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Portofolio Kami: <br />
              <span className="text-gold-gradient">Kualitas Tanpa Kompromi.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Setiap karya dirancang dengan pendekatan artistik mendalam, standar sinematografi tertinggi, dan resonansi emosional yang meninggalkan jejak abadi di hati penonton.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              data-cursor-text="FILTER"
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeFilter === cat.id
                  ? "bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "bg-[#0f1422] text-slate-400 border border-amber-500/20 hover:border-amber-400/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Film Projects Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              data-cursor-text="EXPLORE"
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-[#0a0e18] border border-amber-500/20 hover:border-amber-400/60 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.25)] flex flex-col"
            >
              {/* Poster Image Container */}
              <div className="relative w-full aspect-[2/3] overflow-hidden bg-[#111624]">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-widest bg-black/80 border border-amber-400/40 text-amber-200 backdrop-blur-md">
                    {proj.categoryLabel}
                  </span>
                </div>

                {/* Hover Play / Inspect Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-[0_0_20px_#D4AF37] transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Poster Card Metadata */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold uppercase text-white group-hover:text-amber-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                    {proj.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>{proj.year}</span>
                  <span className="text-amber-400/80 font-semibold">{proj.aspect.split(" ")[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Callout (Slide 7) */}
        <div className="mt-16 p-8 rounded-2xl bg-[#090c14] border border-amber-500/20 text-center relative">
          <p className="font-serif text-lg sm:text-2xl text-amber-100 italic max-w-3xl mx-auto leading-relaxed">
            &ldquo;Portofolio bukan hanya tentang apa yang kami buat, tetapi tentang kualitas, karakter, dan pesan yang kami hadirkan.&rdquo;
          </p>
          <p className="text-xs font-mono tracking-[0.25em] text-amber-400 uppercase mt-3">
            — Cakrawangsa Production Standard
          </p>
        </div>
      </div>

      {/* Project Synopsis / Dossier Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <div className="relative max-w-3xl w-full bg-[#0d121e] border border-amber-400/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(212,175,55,0.25)] max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-400/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
              {/* Poster Thumbnail */}
              <div className="sm:col-span-4 relative aspect-[2/3] rounded-2xl overflow-hidden border border-amber-500/30">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Dossier Information */}
              <div className="sm:col-span-8">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">
                  <Clapperboard className="w-4 h-4" />
                  <span>{selectedProject.categoryLabel}</span>
                </div>

                <h3 className="font-serif text-3xl font-bold uppercase text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-serif italic text-amber-200 mt-1">
                  {selectedProject.subtitle}
                </p>

                {/* Specs Pill List */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  <span className="px-3 py-1 rounded bg-[#161e30] border border-white/10">
                    {selectedProject.year}
                  </span>
                  <span className="px-3 py-1 rounded bg-[#161e30] border border-white/10">
                    {selectedProject.aspect}
                  </span>
                  <span className="px-3 py-1 rounded bg-[#161e30] border border-white/10">
                    {selectedProject.duration}
                  </span>
                </div>

                {/* Synopsis */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
                    Sinopsis Proyek
                  </h4>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {selectedProject.synopsis}
                  </p>
                </div>

                {/* Awards & Highlights */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-semibold mb-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>{selectedProject.awards}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.highlights.map((hl) => (
                      <span
                        key={hl}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-amber-400/10 text-amber-200 border border-amber-400/20"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA In Modal */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Hak Cipta PT. Cakrawangsa Cinema
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-full bg-amber-400 text-black text-xs font-mono font-bold tracking-wider hover:bg-amber-300 transition-colors"
                  >
                    AJUKAN TAYANG / CO-PRODUKSI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
