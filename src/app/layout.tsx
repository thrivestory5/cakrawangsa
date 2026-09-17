import type { Metadata } from "next";
import { Inter, Cinzel, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cakrawangsa-cinema.vercel.app"),
  title: "PT. CAKRAWANGSA CINEMA PRODUCTION | Transforming Stories Into Cinematic Experiences",
  description: "Perusahaan kreatif terkemuka di Indonesia yang bergerak dalam produksi film layar lebar, konten audiovisual, media kreatif, periklanan korporat, dan hiburan berskala nasional dan internasional.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "PT. Cakrawangsa Cinema Production",
    description: "Transforming Stories Into Cinematic Experiences - Rumah Produksi Film & Media Kreatif Indonesia",
    images: ["/cakrawangsa_logo.png"],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${cinzel.variable} ${mono.variable} font-sans antialiased bg-[#050508] text-slate-100 selection:bg-[#D4AF37] selection:text-black min-h-screen relative`}
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
