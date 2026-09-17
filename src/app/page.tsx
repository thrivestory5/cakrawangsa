import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import VisionMissionSection from "../components/sections/VisionMissionSection";
import EcosystemSection from "../components/sections/EcosystemSection";
import ServicesSection from "../components/sections/ServicesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import DistributionSection from "../components/sections/DistributionSection";
import LeadershipSection from "../components/sections/LeadershipSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050508] text-slate-100 selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* Navigation Capsule */}
      <Navbar />

      {/* Hero with Viewfinder HUD */}
      <HeroSection />

      {/* About & Core Values */}
      <AboutSection />

      {/* Vision & 6 Strategic Missions */}
      <VisionMissionSection />

      {/* 9-Hub Interactive Ecosystem */}
      <EcosystemSection />

      {/* Full-Spectrum Services & Pipeline */}
      <ServicesSection />

      {/* Signature Theatrical & Digital Portfolio */}
      <PortfolioSection />

      {/* Multiplatform Global Distribution */}
      <DistributionSection />

      {/* Board of Directors & Executive Dossiers */}
      <LeadershipSection />

      {/* Partnership & Direct Collaboration Portal */}
      <ContactSection />

      {/* Infinite Marquee & Sitemap Footer */}
      <Footer />
    </main>
  );
}
