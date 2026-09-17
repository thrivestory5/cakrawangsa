"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with mouse
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setMousePos({ x: e.clientX, y: e.clientY });


      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("a, button, [data-cursor], input, select, textarea");
      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute("data-cursor-text");
        setHoverText(customText || "");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Reticle Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-amber-400/60 pointer-events-none flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePos.x - (isHovered ? 36 : 18),
          y: mousePos.y - (isHovered ? 36 : 18),
          width: isHovered ? 72 : 36,
          height: isHovered ? 72 : 36,
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0.03)",
          borderColor: isHovered ? "#F3E5AB" : "rgba(212, 175, 55, 0.5)",
          boxShadow: isHovered
            ? "0 0 25px rgba(212, 175, 55, 0.5)"
            : "0 0 10px rgba(212, 175, 55, 0.2)",
        }}
        transition={{
          type: "spring",
          damping: 26,
          stiffness: 350,
          mass: 0.4,
        }}
      >
        {/* Cinema Crosshair markers */}
        <span className="absolute top-0 w-[1px] h-[4px] bg-amber-400/80" />
        <span className="absolute bottom-0 w-[1px] h-[4px] bg-amber-400/80" />
        <span className="absolute left-0 h-[1px] w-[4px] bg-amber-400/80" />
        <span className="absolute right-0 h-[1px] w-[4px] bg-amber-400/80" />

        {hoverText && (
          <span className="text-[9px] font-mono tracking-widest text-amber-200 uppercase font-bold">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-amber-300 pointer-events-none shadow-[0_0_8px_#D4AF37]"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 600,
          mass: 0.1,
        }}
      />
    </div>
  );
}
