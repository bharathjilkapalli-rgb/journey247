"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Sun } from "lucide-react";

export const HangingGoaSignboard: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
    }
  }, []);

  return (
    <div className="relative w-full flex justify-center z-30 pointer-events-none select-none my-4">
      {/* Container for Ropes & Swaying Pink Hindi GOA Board */}
      <motion.div
        initial={{ y: -140, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center"
      >
        {/* TWIN ROPES SUSPENDED FROM TOP OF VIEWPORT */}
        <div className="absolute -top-36 left-8 sm:left-12 w-1.5 h-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200 via-amber-300 to-yellow-500 rounded-full shadow-md z-0">
          <div className="w-full h-full opacity-50 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:4px_6px]" />
        </div>
        <div className="absolute -top-36 right-8 sm:right-12 w-1.5 h-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200 via-amber-300 to-yellow-500 rounded-full shadow-md z-0">
          <div className="w-full h-full opacity-50 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:4px_6px]" />
        </div>

        {/* VIBRANT PINK SIGNBOARD WITH HINDI "गोवा" TEXT & SWAYING MOTION */}
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  rotate: [-2, 2, -2],
                  y: [0, 4, 0],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top center" }}
          className="relative bg-gradient-to-r from-hh-pink via-pink-600 to-hh-pink px-8 py-3.5 sm:px-14 sm:py-4.5 rounded-3xl shadow-pink-glow border-2 border-yellow-300/80 z-30 flex items-center justify-center gap-4 backdrop-blur-md transform -rotate-2"
        >
          {/* Sun Icon */}
          <Sun className="w-7 h-7 sm:w-8 sm:h-8 text-hh-yellow animate-spin" style={{ animationDuration: "10s" }} />

          {/* Main Hindi Text: "गोवा" */}
          <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-widest drop-shadow-lg">
            गोवा
          </span>

          {/* Sparkles Icon */}
          <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-hh-yellow animate-pulse" />
        </motion.div>
      </motion.div>
    </div>
  );
};
