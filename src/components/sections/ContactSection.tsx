"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Sparkles,
  Building2,
  Film,
  TrendingUp,
  Share2,
  QrCode,
  ExternalLink,
} from "lucide-react";


const COLLAB_PILLARS = [
  {
    icon: Film,
    title: "Film & Series Production",
    desc: "Pengembangan dan produksi film layar lebar, serial orisinal, microdrama, serta konten hiburan naratif.",
  },
  {
    icon: Building2,
    title: "Brand & Corporate Projects",
    desc: "Company profile berstandar sinematik, branded content, iklan TVC, kampanye, dan komunikasi audiovisual korporat.",
  },
  {
    icon: TrendingUp,
    title: "Investment & Co-Production",
    desc: "Kemitraan investasi dan ko-produksi untuk proyek film dengan proyeksi potensi pasar dan ROI yang kuat.",
  },
  {
    icon: Share2,
    title: "Distribution & Platform Partnership",
    desc: "Kolaborasi penayangan dan distribusi melalui jaringan bioskop, stasiun TV, platform OTT global, dan festival film.",
  },
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [projectType, setProjectType] = useState("Film & Series");
  const [message, setMessage] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo PT. Cakrawangsa Cinema Production,%0A%0ASaya ingin berkolaborasi untuk proyek sinema/media kreatif.%0A%0A*Nama:* ${encodeURIComponent(
      name || "Klien"
    )}%0A*Instansi / Brand:* ${encodeURIComponent(
      org || "-"
    )}%0A*Tipe Proyek:* ${encodeURIComponent(
      projectType
    )}%0A*Pesan / Kebutuhan:* ${encodeURIComponent(
      message || "Saya ingin mendiskusikan peluang kolaborasi."
    )}%0A%0AMohon informasi lebih lanjut. Terima kasih.`;

    window.open(`https://wa.me/6282112110112?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative w-full py-28 bg-[#050508] overflow-hidden border-t border-amber-500/10">
      {/* Clean Golden Horizon Atmosphere (Zero Messy Text) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-500/15 via-amber-600/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3705_1px,transparent_1px),linear-gradient(to_bottom,#d4af3705_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-400/5 text-amber-400 text-xs font-mono tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 08 // Hubungi & Mulai Kolaborasi</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            Mari Menciptakan <br />
            <span className="text-gold-gradient">Karya Bersama.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Cerita besar dimulai dari kolaborasi yang tepat. Kami siap mengembangkan gagasan Anda menjadi karya sinematik bernilai tinggi, berkarakter, dan berdaya jangkau luas.
          </p>
        </div>

        {/* 4 Collaboration Pillars (Slide 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {COLLAB_PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-[#090d16]/90 border border-amber-500/15 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-amber-400/10 text-amber-300 w-fit mb-4 border border-amber-400/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold uppercase text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collaboration Form & Office Dossier Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Project Inquiry Builder */}
          <div className="lg:col-span-7 bg-[#0b0f19] p-8 sm:p-10 rounded-3xl border border-amber-400/30 shadow-[0_15px_45px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/20 mb-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                  Let&apos;s Create Something Meaningful
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-white mt-0.5">
                  Formulir Konsultasi Proyek
                </h3>
              </div>
              <MessageSquare className="w-6 h-6 text-amber-400" />
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Rian Pratama"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 text-white text-sm focus:outline-none focus:border-amber-400 font-sans transition-colors placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Perusahaan / Instansi
                  </label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="Nama Perusahaan / Organisasi"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 text-white text-sm focus:outline-none focus:border-amber-400 font-sans transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Kategori Kebutuhan Proyek *
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/80 border border-amber-500/20 text-amber-200 text-sm focus:outline-none focus:border-amber-400 font-sans transition-colors cursor-pointer"
                >
                  <option value="Film & Series">Produksi Film Layar Lebar & Serial</option>
                  <option value="Brand & Corporate">Company Profile & Iklan Komersial (TVC)</option>
                  <option value="Digital Content & Microdrama">Digital Content & Microdrama Platform</option>
                  <option value="Investment & Co-Production">Investasi Sinema & Ko-Produksi</option>
                  <option value="Distribution & OTT">Kemitraan Distribusi & Platform OTT</option>
                  <option value="Production Services">Penyewaan Kru, Alat, & Izin Lokasi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Rincian Gagasan / Pesan
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan rencana proyek, estimasi waktu, atau ekspektasi output..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/20 text-white text-sm focus:outline-none focus:border-amber-400 font-sans transition-colors placeholder:text-slate-600"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  data-cursor-text="WHATSAPP"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black font-serif font-bold text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Kirim Pesan via WhatsApp</span>
                </button>

                <a
                  href={`mailto:cakrawangsacinema@gmail.com?subject=Konsultasi%20Proyek%20Cakrawangsa%20-%20${encodeURIComponent(
                    name || "Klien"
                  )}`}
                  className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl border border-amber-500/30 text-amber-200 font-serif text-sm uppercase tracking-wider hover:border-amber-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Kami</span>
                </a>
              </div>
            </form>
          </div>

          {/* Right: Dual Office Location Dossier & QR Code */}
          <div className="lg:col-span-5 space-y-6">
            {/* Head Office Card (Menara 165) */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-amber-500/20 hover:border-amber-400/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  HEAD OFFICE
                </span>
                <MapPin className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white uppercase">
                Menara 165 Jakarta
              </h4>
              <p className="text-xs text-slate-300 font-mono mt-2 leading-relaxed">
                Menara 165, 10th Floor <br />
                Jl. T.B. Simatupang Kav. 1 <br />
                South Jakarta, DKI Jakarta, Indonesia
              </p>
              <a
                href="https://maps.google.com/?q=Menara+165+TB+Simatupang+Jakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 hover:text-white transition-colors"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Creative Studio & Production Base (Bekasi) */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-amber-500/20 hover:border-amber-400/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  CREATIVE STUDIO & PRODUCTION BASE
                </span>
                <Building2 className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white uppercase">
                Studio Dirgantara Permai
              </h4>
              <p className="text-xs text-slate-300 font-mono mt-2 leading-relaxed">
                Perumahan Bumi Dirgantara Permai <br />
                Jl. Garuda Blok BU No. 25, Kel. Jatisari, <br />
                Kec. Jatiasih, Kota Bekasi, Jawa Barat
              </p>
              <a
                href="https://maps.google.com/?q=Bumi+Dirgantara+Permai+Jatiasih+Bekasi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 hover:text-white transition-colors"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Direct Contact & QR Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-[#0a0d16] border border-amber-400/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase block">
                  FAST RESPONSE WHATSAPP
                </span>
                <a
                  href="https://wa.me/6282112110112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl font-bold text-white hover:text-amber-300 transition-colors"
                >
                  +62 821-1211-0112
                </a>
                <p className="text-[11px] font-mono text-slate-400 mt-1">
                  cakrawangsacinema@gmail.com
                </p>
              </div>

              <button
                onClick={() => setShowQR(true)}
                data-cursor-text="SCAN"
                className="p-3 rounded-xl bg-amber-400 text-black hover:bg-amber-300 transition-transform hover:scale-105 flex flex-col items-center gap-1 flex-shrink-0"
              >
                <QrCode className="w-6 h-6" />
                <span className="text-[9px] font-mono font-bold tracking-wider">QR CODE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Golden Quote Banner from Slide 6 */}
        <div className="mt-16 text-center border-t border-amber-500/15 pt-8">
          <p className="font-serif text-xl sm:text-2xl text-amber-100 italic leading-relaxed max-w-3xl mx-auto">
            &ldquo;Mari mengubah ide menjadi cerita, cerita menjadi karya, dan karya menjadi pengalaman yang dikenang.&rdquo;
          </p>
          <p className="mt-3 text-xs font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold">
            — PT. Cakrawangsa Cinema Production
          </p>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1422] border border-amber-400/50 p-8 rounded-3xl max-w-sm w-full text-center relative shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <h4 className="font-serif text-xl font-bold uppercase text-white mb-1">
              Scan to Connect
            </h4>
            <p className="text-xs font-mono text-amber-300 mb-6">
              WhatsApp: +62 821-1211-0112
            </p>

            <div className="relative w-56 h-64 mx-auto rounded-xl overflow-hidden border border-amber-400/30 p-2 bg-black">
              <Image
                src="/qr_code.png"
                alt="WhatsApp QR Code"
                fill
                className="object-contain p-2"
              />
            </div>

            <button
              onClick={() => setShowQR(false)}
              className="mt-6 w-full py-2.5 rounded-full bg-amber-400 text-black text-xs font-mono font-bold tracking-wider hover:bg-amber-300 transition-colors"
            >
              TUTUP
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
