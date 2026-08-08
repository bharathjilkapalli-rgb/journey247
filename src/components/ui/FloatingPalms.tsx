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
      // Section 4 Layer 2: Palm leaves move 5px max
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 5,
        y: (e.clientY / window.innerHeight - 0.5) * 5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* SECTION 4: LAYER 2 - PALM LEAVES SILHOUETTES (5px Parallax) */}
      <motion.div
        animate={{
          rotate: [-1.5, 1.5, -1.5],
          y: isMobile ? 0 : [0, -6, 0],
          x: isMobile ? 0 : mousePos.x,
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-12 opacity-20 text-emerald-800"
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
        className="absolute -bottom-16 -right-16 opacity-15 text-emerald-900"
      >
        <svg className="w-96 h-96 sm:w-[480px] sm:h-[480px]" viewBox="0 0 200 200" fill="currentColor">
          <path d="M190,190 Q110,120 30,50 Q60,90 190,190 Z" opacity="0.9" />
          <path d="M165,165 Q110,95 50,30 Q90,80 165,165 Z" opacity="0.7" />
        </svg>
      </motion.div>
    </div>
  );
};
