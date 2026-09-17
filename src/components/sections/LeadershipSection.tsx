"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clapperboard,
  Crown,
  Film,
  Sparkles,
} from "lucide-react";


type LeaderId = "tohir" | "sukarya" | "jerry";

interface Leader {
  id: LeaderId;
  name: string;
  role: string;
  badge: string;
  image: string;
  tagline: string;
  bio: string;
  experienceYears: string;
  careerMilestones: { year: string; role: string; org: string }[];
  skillsOrAchievements: string[];
  keyWorks?: { category: string; titles: string[] }[];
  books?: string[];
  filmography?: { category: string; titles: string[] }[];
}

const LEADERS: Leader[] = [
  {
    id: "tohir",
    name: "Tohir Danasasmita",
    role: "Direktur Utama & Executive Producer",
    badge: "30+ TAHUN RECORD",
    image: "/tohir_danasasmita.png",
    tagline: "Visi Kepemimpinan Sinema & Jejaring Industri Terkemuka",
    bio: "Produser kawakan dengan dedikasi lebih dari 30 tahun memimpin industri televisi dan perfilman nasional. Memiliki visi tajam dalam kurasi konten bernilai komersial tinggi sekaligus mengangkat martabat narasi kultural Indonesia.",
    experienceYears: "30+ Tahun",
    careerMilestones: [
      { year: "1992 - 1993", role: "Production Division", org: "Stasiun Televisi TPI" },
      { year: "1994 - 2001", role: "Creative & Production Lead", org: "PT Indosiar Visual Mandiri" },
      { year: "2001 - 2002", role: "Senior Producer", org: "PT Dunia Visitama Produksi (Person Television Asia)" },
      { year: "2003 - Sekarang", role: "Executive Producer", org: "Multivision Plus, SinemArt, MNC Pictures, Fischer Production" },
      { year: "2017 - Sekarang", role: "Pendiri & Direktur Utama", org: "PT. Cakrawangsa Cinema Production" },
    ],
    skillsOrAchievements: [
      "Kepemimpinan Eksekutif Studio Film & TV",
      "Kemitraan Strategis Platform Distribusi Global",
      "Pengembangan IP (Intellectual Property) Sinematik",
      "Kurasi Naskah & Visi Produksi Komersial",
      "Jejaring Sineas, Sutradara, & Investor Nasional",
    ],
  },
  {
    id: "sukarya",
    name: "Sukarya CFD",
    role: "Komisaris & Pengawasan Kreatif",
    badge: "SUTRADARA & PENULIS",
    image: "/sukarya_cfd.png",
    tagline: "Maestro Narasi, Penulis 10+ Buku, & Aktor 80+ Judul Film",
    bio: "Sutradara, penulis skenario, aktor senior, dan kreator berpengaruh dengan rekam jejak panjang di sinema dan pertelevisian nasional. Menguasai seni penceritaan mendalam dan pengawasan mutu artistik di Cakrawangsa Cinema.",
    experienceYears: "25+ Tahun",
    careerMilestones: [
      { year: "Multi-Tahun", role: "Aktor Senior (80+ Judul)", org: "Transinema, PT Unlimited, Tobali Putra Film" },
      { year: "Televisi Populer", role: "Bintang / Peran Pendukung", org: "Police 86, Jodoh Wasiat Bapak (ANTV), Satu Atap Tiga Cinta (SCTV)" },
      { year: "Layar Lebar", role: "Aktor Film Layar Lebar", org: "Simbuan Naga Seribu, Tantangan Remaja, Tapak-Tapak Berdarah" },
      { year: "Literasi", role: "Penulis Terbitan Resmi", org: "UIKA Press Bogor & Berbagai Penerbit Nasional" },
      { year: "Direksi", role: "Komisaris & Direktur Program", org: "PT. Cakrawangsa Cinema Production" },
    ],
    skillsOrAchievements: [
      "Sertifikasi Kompetensi Resmi Bidang Perfilman",
      "Penyutradaraan & Tata Skenario Berbobot",
      "Kreator 10+ Buku Terbitan Nasional",
      "Kepala Produksi Serial Iklan Komersial Terkemuka",
      "Supervisi Artistik & Pengembangan Konten Edukatif",
    ],
    books: [
      "Sandal Jepit Naik Bulan (UIKA Press Bogor)",
      "Autobiografi (UIKA Press Bogor)",
      "Cak Kani Junaedi",
      "1000 Kisah",
      "Ghost Game",
      "Kejadian Misteri Misteri",
      "Orang Ketiga",
      "Magic Show",
      "Sketta",
      "The Transmant",
    ],
    keyWorks: [
      {
        category: "Karya Unggulan",
        titles: ["Kisah 9 Ulala", "Angry Boss", "Di Bawah Lindungan Hati", "Jalan Hikmah", "Iblis dan Tuhan", "300 Hari Mencari Cinta"],
      },
      {
        category: "Iklan & Komersial (Kepala Produksi)",
        titles: ["Teleku", "Asuransi Jiwa SOM", "Super Formula Ikan", "Tata Logam Berjaya", "Business Beer"],
      },
    ],
  },
  {
    id: "jerry",
    name: "Jerry Stanly Djohar",
    role: "Direktur Produksi & Line Producer",
    badge: "12+ LAYAR LEBAR",
    image: "/jerry_djohar.png",
    tagline: "Spesialis Eksekusi Skala Besar, Budgeting, & Manajemen Produksi",
    bio: "Line Producer handal dengan rekam jejak puluhan film box office, sinetron rating tertinggi, FTV religi, dan iklan multinasional. Piawai mengorkestrasi ratusan kru, efisiensi anggaran ketat, dan ketepatan timeline shooting.",
    experienceYears: "20+ Tahun",
    careerMilestones: [
      { year: "Film Layar Lebar", role: "Line Producer 12+ Film Bioskop", org: "The Promise, Moga Bunda Disayang Allah, Bulan di Atas Kuburan" },
      { year: "Serial TV Nasional", role: "Line Producer Serial Terpopuler", org: "Tarzan Betawi, Hati Yang Memilih, BABE, Romeo Juliet" },
      { year: "FTV & Movie", role: "Line Producer Puluhan Judul", org: "Suara Hati Istri, Kisah Nyata, Pintu Berkah, Hidayah, Azab" },
      { year: "Iklan Komersial", role: "Line Producer Brand Tier-1", org: "Telkomsel, Susu Dancow, Multi Roof, Asuransi JP Astor" },
      { year: "Direksi", role: "Direktur Produksi", org: "PT. Cakrawangsa Cinema Production" },
    ],
    skillsOrAchievements: [
      "Manajemen Produksi Skala Besar & Logistik Kru",
      "Budgeting Presisi & Cost Control Efisien",
      "Scheduling Produksi & Ketepatan Timeline Rilis",
      "Perizinan Lokasi Syuting Ekstrem & Perkotaan",
      "Mitigasi Risiko Lapangan & Team Leadership Tangguh",
    ],
    filmography: [
      {
        category: "Film Layar Lebar (Theatrical)",
        titles: [
          "The Promise",
          "Unlimited Love",
          "Moga Bunda Disayang Allah",
          "Hattrick",
          "Suami-Suami Takut Istri The Movie",
          "Vampire KL",
          "Lima Bintang Timur",
          "Follow The Money",
          "Pangeran Antasari",
          "KM 97",
          "Inikah Rasanya The Movie",
          "Bulan di Atas Kuburan",
        ],
      },
      {
        category: "Serial Televisi (TV Series)",
        titles: [
          "Tarzan Betawi",
          "Hati Yang Memilih",
          "Batak Betawi (BABE)",
          "Istri Impian",
          "Romeo Juliet",
          "Mansor Lagokilun",
          "Arti Cinta",
          "Gol",
          "4 Istri",
          "Cerita Orang Dalam (COD)",
        ],
      },
      {
        category: "FTV & TV Movie",
        titles: [
          "Suara Hati Istri",
          "Kisah Nyata",
          "Pintu Berkah",
          "Hidayah",
          "Azab",
          "VW Kodok Bawa Cinta",
          "Romeo Juliet",
          "Gadis Pembawa Telur",
        ],
      },
    ],
  },
];

export default function LeadershipSection() {
  const [selectedLeaderId, setSelectedLeaderId] = useState<LeaderId>("tohir");
  const currentLeader = LEADERS.find((l) => l.id === selectedLeaderId) || LEADERS[0];

  return (
    <section id="leadership" className="relative w-full py-28 bg-[#07090e] overflow-hidden border-t border-amber-500/10">
      {/* Clean Stage & Golden Cinematic Lighting (Zero Messy Text) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3705_1px,transparent_1px),linear-gradient(to_bottom,#d4af3705_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-400/5 text-amber-400 text-xs font-mono tracking-[0.25em] uppercase mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Section 07 // Dewan Direksi & Kepemimpinan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            Dewan Direksi: <br />
            <span className="text-gold-gradient">Visioner di Balik Layar.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Dikelola oleh para produser, sutradara, dan praktisi perfilman kawakan yang telah mendedikasikan puluhan tahun melahirkan karya-karya legendaris di bioskop dan layar kaca Indonesia.
          </p>
        </div>

        {/* 3 Executive Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {LEADERS.map((leader) => {
            const isSelected = leader.id === selectedLeaderId;
            return (
              <div
                key={leader.id}
                onClick={() => setSelectedLeaderId(leader.id)}
                onMouseEnter={() => setSelectedLeaderId(leader.id)}
                onFocus={() => setSelectedLeaderId(leader.id)}
                data-cursor-text="DOSSIER"
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative flex flex-col items-center text-center ${
                  isSelected
                    ? "bg-gradient-to-b from-[#1c2438] to-[#0f1422] border-amber-400 shadow-[0_0_35px_rgba(212,175,55,0.3)] -translate-y-2"
                    : "bg-[#0a0d16] border-amber-500/20 hover:border-amber-400/40 hover:bg-[#111728]"
                }`}
              >

                {/* Circular Portrait Frame */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-amber-400/60 p-1 mb-4 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />

                  </div>
                </div>

                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20 mb-2">
                  {leader.badge}
                </span>

                <h3 className="font-serif text-lg sm:text-xl font-bold uppercase text-white">
                  {leader.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {leader.role}
                </p>

                {isSelected && (
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>PROFIL AKTIF</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Executive Detailed Dossier Panel */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0e1424] to-[#070a12] border border-amber-400/40 relative shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Large Portrait & Core Meta */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-56 h-72 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
                <Image
                  src={currentLeader.image}
                  alt={currentLeader.name}
                  fill
                  sizes="(max-width: 1024px) 224px, 300px"
                  className="object-cover object-top"
                />

              </div>

              <div className="mt-6">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                  PT. Cakrawangsa Cinema Production
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
                  {currentLeader.name}
                </h3>
                <p className="text-xs font-mono text-amber-200 mt-1">
                  {currentLeader.role}
                </p>
                <p className="text-xs text-slate-400 mt-4 leading-relaxed italic">
                  &ldquo;{currentLeader.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Right: Biography, Timeline, and Specific Portfolios */}
            <div className="lg:col-span-8 space-y-8">
              {/* Bio Statement */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Profil Pribadi & Kepemimpinan</span>
                </h4>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
                  {currentLeader.bio}
                </p>
              </div>

              {/* Career Milestones */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                  <Film className="w-4 h-4" />
                  <span>Riwayat Karier & Rekam Jejak Industri</span>
                </h4>
                <div className="space-y-3">
                  {currentLeader.careerMilestones.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs"
                    >
                      <span className="font-mono text-amber-300 font-semibold w-36 flex-shrink-0">
                        {m.year}
                      </span>
                      <span className="text-white font-medium flex-1">
                        {m.role}
                      </span>
                      <span className="text-slate-400 font-mono sm:text-right mt-1 sm:mt-0">
                        {m.org}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills & Achievements */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Keahlian & Sertifikasi Kompetensi</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentLeader.skillsOrAchievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-[#141a2a] border border-amber-500/15 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* If Sukarya: Show Books Bibliography */}
              {currentLeader.books && (
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Buku Karya yang Sudah Diterbitkan</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentLeader.books.map((b, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-black/50 border border-amber-500/20 text-xs font-serif text-amber-200"
                      >
                        📖 {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* If Jerry: Show Filmography Accordion / List */}
              {currentLeader.filmography && (
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                    <Clapperboard className="w-4 h-4" />
                    <span>Filmografi Sebagai Line Producer</span>
                  </h4>
                  <div className="space-y-4">
                    {currentLeader.filmography.map((cat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-black/50 border border-white/5">
                        <span className="text-xs font-mono text-amber-300 font-bold uppercase block mb-2">
                          {cat.category}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.titles.map((title, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded bg-[#161f32] text-[11px] font-mono text-slate-300 border border-white/5"
                            >
                              🎬 {title}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
