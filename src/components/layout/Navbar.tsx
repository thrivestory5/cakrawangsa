"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Film } from "lucide-react";
import AmbientSound from "../ui/AmbientSound";

const NAV_LINKS = [
  { label: "Tentang", href: "#about" },
  { label: "Visi & Misi", href: "#vision" },
  { label: "Ekosistem", href: "#ecosystem" },
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Distribusi", href: "#distribution" },
  { label: "Direksi", href: "#leadership" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-3 sm:py-4 px-4 sm:px-8 ${
          scrolled ? "backdrop-blur-md bg-black/60 border-b border-amber-500/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            data-cursor-text="HOME"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500/40 bg-black/60 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
              <Image
                src="/cw_emblem.png"
                alt="Cakrawangsa Cinema Emblem"
                width={36}
                height={36}
                className="w-auto h-auto object-contain p-1"
              />

            </div>

            <div className="flex flex-col">
              <span className="font-serif text-sm tracking-[0.2em] font-bold text-amber-200 group-hover:text-amber-300 transition-colors uppercase leading-none">
                Cakrawangsa
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] text-slate-400 group-hover:text-slate-300 transition-colors leading-tight mt-0.5">
                CINEMA PRODUCTION
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full border border-amber-500/15 bg-black/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor-text="GO"
                  className={`px-3 py-1 text-xs font-mono tracking-wider transition-all duration-300 rounded-full relative ${
                    isActive
                      ? "text-black bg-amber-400 font-semibold shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                      : "text-slate-300 hover:text-amber-200 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Sound + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <AmbientSound />

            <Link
              href="#contact"
              data-cursor-text="LET'S TALK"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 text-amber-200 text-xs font-mono font-medium tracking-wider hover:border-amber-300 hover:text-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <span>KOLABORASI</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-amber-500/20 bg-black/50 text-amber-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center px-8 py-20 animate-in fade-in duration-300">
          <div className="flex flex-col gap-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4 text-amber-400">
              <Film className="w-6 h-6" />
              <span className="font-serif tracking-widest text-lg">CAKRAWANGSA</span>
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-widest text-slate-300 hover:text-amber-400 transition-colors uppercase py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8 border-t border-amber-500/20">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-amber-400 text-black font-serif font-bold tracking-wider hover:bg-amber-300 transition-colors"
              >
                MULAI KOLABORASI
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
