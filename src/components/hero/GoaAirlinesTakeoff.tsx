"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Sun } from "lucide-react";

interface GoaAirlinesTakeoffProps {
  isTakingOff: boolean;
  onComplete: () => void;
}

export const GoaAirlinesTakeoff: React.FC<GoaAirlinesTakeoffProps> = ({
  isTakingOff,
  onComplete,
}) => {
  const echoDelays = [0.06, 0.12, 0.18];

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isTakingOff && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest-950/95 backdrop-blur-xl overflow-hidden pointer-events-auto"
        >
          {/* Goa Sunset Golden Hour Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 via-forest-900/50 to-forest-950" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-amber-400/20 via-hh-pink/10 to-transparent blur-3xl rounded-full pointer-events-none" />

          {/* Realistic Cumulus Cloud Formations (Left & Right - Bisected by Flight Path) */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Left Realistic Cloud Mass */}
            <motion.svg
              animate={{ x: ["-10%", "-35%", "-10%"] }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute top-1/4 -left-20 w-[550px] h-[350px] text-cream-100/20 drop-shadow-2xl"
              viewBox="0 0 400 250"
              fill="currentColor"
            >
              <path d="M50 180 C20 180 0 160 0 130 C0 105 20 85 45 85 C55 45 95 15 140 15 C185 15 220 40 235 75 C255 65 285 70 300 90 C325 90 345 110 345 135 C345 160 325 180 295 180 Z" />
            </motion.svg>

            {/* Right Realistic Cloud Mass */}
            <motion.svg
              animate={{ x: ["10%", "35%", "10%"] }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute top-1/3 -right-20 w-[580px] h-[360px] text-cream-100/20 drop-shadow-2xl"
              viewBox="0 0 400 250"
              fill="currentColor"
            >
              <path d="M50 180 C20 180 0 160 0 130 C0 105 20 85 45 85 C55 45 95 15 140 15 C185 15 220 40 235 75 C255 65 285 70 300 90 C325 90 345 110 345 135 C345 160 325 180 295 180 Z" />
            </motion.svg>
          </div>

          {/* MOTION ECHOES EFFECT: 3 Trailing Ghost Echo Planes */}
          {echoDelays.map((delay, idx) => (
            <motion.div
              key={idx}
              initial={{ y: "85vh", scale: 0.7, opacity: 0 }}
              animate={{
                y: ["85vh", "20vh", "-110vh"],
                scale: [0.7, 1.25, 1.6],
                opacity: [0, (0.35 - idx * 0.1), 0],
              }}
              transition={{ duration: 1.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
              className="absolute flex flex-col items-center pointer-events-none z-20"
            >
              <svg
                className="w-48 h-48 sm:w-60 sm:h-60 text-hh-pink opacity-40 blur-[1px]"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <path d="M100 15 C106 15 114 35 114 115 L114 155 L128 178 L128 188 L100 180 L72 188 L72 178 L86 155 L86 115 C86 35 94 15 100 15 Z" />
                <path d="M100 75 L188 130 L182 144 L100 110 L18 144 L12 130 Z" />
              </svg>
            </motion.div>
          ))}

          {/* MAIN GOA AIRLINES AIRPLANE (LAUNCHING FROM BOTTOM TO TOP BISECTING THE CLOUDS) */}
          <motion.div
            initial={{ y: "85vh", scale: 0.7, opacity: 0 }}
            animate={{
              y: ["85vh", "20vh", "-110vh"],
              scale: [0.7, 1.25, 1.6],
              opacity: [0, 1, 1],
            }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={onComplete}
            className="relative flex flex-col items-center z-30"
          >
            {/* Jet Vapor Trail Behind Airplane */}
            <div className="absolute top-44 left-1/2 -translate-x-1/2 w-4 h-96 bg-gradient-to-b from-white/60 via-amber-200/30 to-transparent blur-md rounded-full pointer-events-none" />

            {/* Jet Airliner Vector Graphic */}
            <div className="relative">
              <svg
                className="w-48 h-48 sm:w-60 sm:h-60 text-hh-yellow drop-shadow-gold-glow"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Fuselage */}
                <path
                  d="M100 15 C106 15 114 35 114 115 L114 155 L128 178 L128 188 L100 180 L72 188 L72 178 L86 155 L86 115 C86 35 94 15 100 15 Z"
                  fill="#FACC15"
                  stroke="#FFD700"
                  strokeWidth="2.5"
                />
                {/* Wings */}
                <path
                  d="M100 75 L188 130 L182 144 L100 110 L18 144 L12 130 Z"
                  fill="#FF007F"
                  stroke="#FF4DA6"
                  strokeWidth="2.5"
                />
                {/* Tail Wing */}
                <path
                  d="M100 150 L138 178 L132 186 L100 172 L68 186 L62 178 Z"
                  fill="#0B4F32"
                  stroke="#FACC15"
                  strokeWidth="1.5"
                />
                {/* Cockpit Glass */}
                <path
                  d="M93 30 Q100 24 107 30 L105 38 Q100 34 95 38 Z"
                  fill="#052E1D"
                />
                {/* Engine Turbines */}
                <rect x="136" y="120" width="9" height="20" rx="4.5" fill="#0B4F32" stroke="#FACC15" strokeWidth="1.2" />
                <rect x="55" y="120" width="9" height="20" rx="4.5" fill="#0B4F32" stroke="#FACC15" strokeWidth="1.2" />
                {/* Navigation Wing Lights */}
                <circle cx="186" cy="135" r="3.5" fill="#FF007F" className="animate-ping" />
                <circle cx="14" cy="135" r="3.5" fill="#00F0FF" className="animate-ping" />
              </svg>

              <Sparkles className="absolute -bottom-2 -left-2 w-8 h-8 text-hh-pink animate-pulse" />
            </div>

            {/* TRAILING EDITORIAL SILK BANNER */}
            <motion.div
              animate={{ rotate: [-2, 2, -2], y: [0, 4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative mt-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-hh-pink via-pink-600 to-hh-pink border-2 border-yellow-300 shadow-2xl text-center backdrop-blur-md"
            >
              <div className="absolute -top-5 left-8 w-0.5 h-6 bg-amber-200/90" />
              <div className="absolute -top-5 right-8 w-0.5 h-6 bg-amber-200/90" />

              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-hh-yellow animate-spin" style={{ animationDuration: "8s" }} />
                <span className="text-xs font-mono tracking-[0.25em] text-white font-black uppercase">
                  ✈ GOA AIRLINES · FLIGHT 247
                </span>
              </div>
              <span className="text-[10px] font-mono text-hh-yellow uppercase block font-bold tracking-wider mt-0.5">
                NON-STOP TO HACKER HOUSE GOA 2026
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
