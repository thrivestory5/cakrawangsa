"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#030407] border-t border-amber-500/20 overflow-hidden">
      {/* Infinite Cinematic Marquee Ticker */}
      <div className="py-4 border-b border-amber-500/15 bg-black/60 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee font-serif text-sm tracking-[0.3em] text-amber-300/80 uppercase">
          CREATING STORIES • BUILDING EXPERIENCES • INSPIRING AUDIENCES • PT. CAKRAWANGSA CINEMA PRODUCTION • TRANSFORMING STORIES INTO CINEMATIC EXPERIENCES • MENJANGKAU DUNIA •&nbsp;
        </div>
        <div className="inline-block animate-marquee font-serif text-sm tracking-[0.3em] text-amber-300/80 uppercase">
          CREATING STORIES • BUILDING EXPERIENCES • INSPIRING AUDIENCES • PT. CAKRAWANGSA CINEMA PRODUCTION • TRANSFORMING STORIES INTO CINEMATIC EXPERIENCES • MENJANGKAU DUNIA •&nbsp;
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-400/40 p-1 bg-black/60 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Image
                  src="/cw_emblem.png"
                  alt="Cakrawangsa Cinema"
                  width={36}
                  height={36}
                  className="w-auto h-auto object-contain"
                />

              </div>

              <div className="flex flex-col">
                <span className="font-serif text-base tracking-[0.2em] font-bold text-white uppercase">
                  Cakrawangsa
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-amber-400 uppercase">
                  Cinema Production
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Rumah produksi film dan konten sinematik terkemuka yang memadukan kekuatan cerita nusantara dengan standar visual mutakhir dan jangkauan global.
            </p>

            <div className="pt-2 text-xs font-mono text-amber-300/80">
              <span className="text-slate-500">Tagline:</span> Transforming Stories Into Cinematic Experiences
            </div>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-4 font-semibold">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-amber-300 transition-colors">
                  Visi & Misi
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-amber-300 transition-colors">
                  Ekosistem Bisnis
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Layanan Produksi
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-300 transition-colors">
                  Portofolio Film
                </a>
              </li>
              <li>
                <a href="#distribution" className="hover:text-amber-300 transition-colors">
                  Jaringan Distribusi
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-amber-300 transition-colors">
                  Dewan Direksi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Layanan Produksi */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-4 font-semibold">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>Film Production (Layar Lebar)</li>
              <li>Digital Series & Microdrama</li>
              <li>Creative Development & Script</li>
              <li>Commercial & Brand Film (TVC)</li>
              <li>Post-Production Suite</li>
              <li>Production Equipment & Crew</li>
            </ul>
          </div>

          {/* Col 5: Kontak & Kantor */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-4 font-semibold">
              Kontak Resmi
            </h4>
            <div className="space-y-3 text-xs font-mono text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Menara 165, Lt. 10, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="https://wa.me/6282112110112"
                  className="hover:text-amber-300 transition-colors"
                >
                  +62 821-1211-0112
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:cakrawangsacinema@gmail.com"
                  className="hover:text-amber-300 transition-colors break-all"
                >
                  cakrawangsacinema@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © 2026 PT. Cakrawangsa Cinema Production. All Rights Reserved. Powered by{" "}
            <a
              href="https://hozadigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
            >
              HozaDigital.com
            </a>
          </p>



          <button
            onClick={scrollToTop}
            data-cursor-text="TOP"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 text-amber-300 hover:border-amber-400 hover:text-white transition-all bg-black/40"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
