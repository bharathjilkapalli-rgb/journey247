"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FloatingPalms: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsMobile(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (mediaQuery.matches) return;
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 6,
        y: (e.clientY / window.innerHeight - 0.5) * 6,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* LAYERED GOA BEACH LANDSCAPE ARTWORK BACKGROUND */}
      <motion.div
        animate={{
          x: isMobile ? 0 : mousePos.x * 0.4,
          y: isMobile ? 0 : mousePos.y * 0.4,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 25 }}
        className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity bg-cover bg-center bg-no-repeat filter contrast-110 saturate-125 pointer-events-none"
        style={{
          backgroundImage: `url('/goa-beach-bg.jpg')`,
        }}
      />

      {/* Dark Forest Green Gradient Masking Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/85 via-forest-950/60 to-forest-950/90 z-0" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-forest-950/40 to-forest-950/95 z-0" />

      {/* FOREGROUND PALM LEAF PARALLAX SILHOUETTES */}
      <motion.div
        animate={{
          rotate: [-1.5, 1.5, -1.5],
          y: isMobile ? 0 : [0, -6, 0],
          x: isMobile ? 0 : mousePos.x,
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-12 opacity-30 text-emerald-700 z-10"
      >
        <svg className="w-80 h-80 sm:w-[420px] sm:h-[420px]" viewBox="0 0 200 200" fill="currentColor">
          <path d="M10,10 Q90,50 170,140 Q150,110 10,10 Z" opacity="0.9" />
          <path d="M40,28 Q90,15 130,40 Q90,38 40,28 Z" opacity="0.7" />
          <path d="M60,42 Q120,25 155,60 Q110,50 60,42 Z" opacity="0.8" />
          <path d="M80,58 Q140,45 175,85 Q130,70 80,58 Z" opacity="0.7" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          rotate: [1.5, -1.5, 1.5],
          y: isMobile ? 0 : [0, 6, 0],
          x: isMobile ? 0 : -mousePos.x,
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-16 -right-16 opacity-25 text-emerald-800 z-10"
      >
        <svg className="w-96 h-96 sm:w-[480px] sm:h-[480px]" viewBox="0 0 200 200" fill="currentColor">
          <path d="M190,190 Q110,120 30,50 Q60,90 190,190 Z" opacity="0.9" />
          <path d="M165,165 Q110,95 50,30 Q90,80 165,165 Z" opacity="0.7" />
        </svg>
      </motion.div>
    </div>
  );
};
