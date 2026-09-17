"use client";

import { useState } from "react";
import {
  Film,
  Tv,
  Lightbulb,
  Megaphone,
  Sliders,
  Users,
  CheckCircle2,
  Workflow,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    id: "film-production",
    code: "01",
    icon: Film,
    title: "Film Production",
    desc: "Produksi film layar lebar (theatrical), serial drama premium, FTV, dan sinematografi naratif berskala besar.",
    highlights: ["Theatrical Feature Film", "Premium TV Series & FTV", "Cinematic Direction & DP", "Full Production Scale"],
  },
  {
    id: "digital-content",
    code: "02",
    icon: Tv,
    title: "Digital Content",
    desc: "Microdrama berdurasi padat, web series multi-episode, konten platform vertikal, dan program hiburan digital inovatif.",
    highlights: ["Microdrama & Vertical Content", "Web Series Original", "Platform-Native Content", "Viral Narrative Design"],
  },
  {
    id: "creative-development",
    code: "03",
    icon: Lightbulb,
    title: "Creative Development",
    desc: "Eksplorasi ide orisinal, riset antropologis-sosial, penulisan skenario berbobot, moodboard visual, dan perencanaan kreatif.",
    highlights: ["Scriptwriting & Screenplay", "Visual Concept & Moodboard", "Story Research & Worldbuilding", "IP & Story Development"],
  },
  {
    id: "commercial-brand",
    code: "04",
    icon: Megaphone,
    title: "Commercial & Brand Content",
    desc: "Iklan televisi (TVC), profil korporat prestisius, branded entertainment, dan kampanye audiovisual komersial.",
    highlights: ["Television Commercials (TVC)", "Corporate Brand Films", "Branded Storytelling", "High-Impact Product Launch"],
  },
  {
    id: "post-production",
    code: "05",
    icon: Sliders,
    title: "Post-Production Suite",
    desc: "Offline & online editing, color grading sinematik DaVinci Resolve, Dolby Atmos sound design, motion graphics, dan CGI VFX.",
    highlights: ["High-End Color Grading", "5.1 / Atmos Sound Design", "Visual Effects (CGI/VFX)", "DCP Theatrical Mastering"],
  },
  {
    id: "production-services",
    code: "06",
    icon: Users,
    title: "Production Services",
    desc: "Penyediaan kru profesional, rental kamera sinema & lighting, casting manajemen talent, izin lokasi syuting, dan logistik lapangan.",
    highlights: ["Catering & Full Crew Support", "Camera & Lighting Gear", "Talent Casting & Management", "Location Permits & Recce"],
  },
];

const WORKFLOW_STEPS = [
  { step: "01", name: "Concept & Dev", detail: "Ideation, Script, Moodboard, Budgeting" },
  { step: "02", name: "Pre-Production", detail: "Casting, Location Recce, Production Schedule" },
  { step: "03", name: "Production", detail: "Principal Photography, Audio Sync, Directing" },
  { step: "04", name: "Post-Production", detail: "Edit, Color Grade, Sound Mix, CGI/VFX" },
  { step: "05", name: "Master & Deliver", detail: "DCP Bioskop, OTT Stream, Theatrical Premiere" },
];

export default function ServicesSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="services" className="relative w-full py-28 bg-[#050508] overflow-hidden border-t border-amber-500/10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-amber-500/15">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold mb-3">
              <Workflow className="w-3.5 h-3.5 text-amber-400" />
              <span>Section 04 // Layanan & Kapabilitas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              Layanan Kami: <br />
              <span className="text-gold-gradient">Dari Konsep Hingga Layar.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-xs sm:text-sm leading-relaxed">
            Menghadirkan layanan produksi terpadu (End-to-End Creative Production) dengan standar teknis sinematik teruji untuk mewujudkan imajinasi menjadi karya berkelas dunia.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                data-cursor-text={srv.code}
                className="group p-8 rounded-2xl bg-gradient-to-b from-[#0e1422] to-[#080b12] border border-amber-500/15 hover:border-amber-400/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-amber-400/70 tracking-widest uppercase">
                      SERVICE {srv.code}
                    </span>
                    <div className="p-3 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20 group-hover:bg-amber-400 group-hover:text-black group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold uppercase text-white group-hover:text-amber-200 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
                  {srv.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* End-to-End Production Pipeline (Interactive Timeline) */}
        <div className="mt-20 p-8 rounded-3xl bg-[#0a0e17] border border-amber-500/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-500/15">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold">
                END-TO-END PRODUCTION TIMELINE
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                Alur Produksi Terpadu Cakrawangsa
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400">
              5 Tahapan Eksekusi Presisi
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WORKFLOW_STEPS.map((w, index) => (
              <div
                key={w.step}
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeStep === index
                    ? "bg-amber-400/10 border-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    : "bg-black/30 border-white/10 hover:border-amber-400/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-amber-400">
                    STEP {w.step}
                  </span>
                  {activeStep === index && (
                    <Sparkles className="w-3 h-3 text-amber-400" />
                  )}
                </div>
                <h5 className="font-serif text-sm font-bold uppercase text-white">
                  {w.name}
                </h5>
                <p className="text-[11px] text-slate-400 font-mono mt-1">
                  {w.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="font-serif italic text-sm sm:text-base text-amber-100">
              &ldquo;Satu visi, satu proses, satu karya yang berkesan.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
