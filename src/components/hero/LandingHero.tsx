"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";
import { GoaDoodles } from "./GoaDoodles";
import { GoaAirlinesTakeoff } from "./GoaAirlinesTakeoff";

interface LandingHeroProps {
  onBegin: () => void;
  onLogoTap: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onBegin,
  onLogoTap,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTakingOff, setIsTakingOff] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(max-width: 768px), (prefers-reduced-motion: reduce)"
    );
    setIsMobile(mq.matches);

    const handleMouseMove = (e: MouseEvent) => {
      if (mq.matches) return;
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 8,
        y: (e.clientY / window.innerHeight - 0.5) * 8,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleBegin = () => {
    setIsTakingOff(true);
  };

  return (
    <div className="relative h-screen w-full min-h-[720px] max-h-screen overflow-hidden bg-forest-950 flex flex-col items-center justify-between select-none">
      {/* ── BACKGROUND DOODLE LAYER (UPPER & PERIMETER DISTRIBUTED) ── */}
      <GoaDoodles mousePos={mousePos} />

      {/* ── RADIAL SPOTLIGHT ATMOSPHERE ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 48%, rgba(11,79,50,0.22) 0%, rgba(5,46,29,0.75) 60%, rgba(5,46,29,0.98) 100%)",
        }}
      />

      {/* ── VIGNETTE EDGES ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 95% 95% at 50% 50%, transparent 45%, rgba(5,46,29,0.85) 100%)",
        }}
      />

      {/* ==================================================
          TOP / BRANDING AREA (UPPER-LEFT)
          ================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute top-4 left-4 sm:top-6 sm:left-8 md:top-6 md:left-8 z-30 pointer-events-auto"
      >
        <button
          onClick={onLogoTap}
          className="flex flex-col items-start leading-none cursor-pointer group text-left select-none"
          aria-label="2:47PM Studio - tap for manifesto"
        >
          <div
            className="text-hh-yellow flex items-baseline tracking-wide group-hover:text-yellow-300 transition-colors duration-200"
            style={{
              fontFamily: "'Luckiest Guy', cursive",
              textShadow: "0 0 16px rgba(250,204,21,0.55)",
            }}
          >
            <span className="text-3xl sm:text-4xl md:text-5xl">2:47</span>
            <span className="text-base sm:text-lg md:text-xl ml-1">PM</span>
          </div>
          <span
            className="text-hh-yellow text-xl sm:text-2xl md:text-3xl tracking-widest group-hover:text-yellow-300 transition-colors duration-200 -mt-1 font-normal"
            style={{
              fontFamily: "'Luckiest Guy', cursive",
              textShadow: "0 0 16px rgba(250,204,21,0.55)",
            }}
          >
            STUDIO
          </span>
        </button>
      </motion.div>

      {/* ==================================================
          CENTRAL HERO CONTENT COLUMN (PERFECT FULL PAGE FIT)
          ================================================== */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center my-auto px-4 w-full max-w-[96vw] sm:max-w-[85vw] md:max-w-[76vw] lg:max-w-[72vw]">

        {/* ── 1. TAGLINE ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-serif italic text-cream-50/90 text-xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Code.{" "}
          <span className="text-hh-pink not-italic font-bold">Create.</span>{" "}
          Escape. Repeat.
        </motion.p>

        {/* ── 2. MAIN TITLE (INCREASED SIZE TO FIT PAGE PERFECTLY) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 sm:mb-8 w-full flex items-center justify-center"
        >
          {/* Glow behind main title */}
          <div
            className="absolute inset-0 blur-3xl opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 85% 55% at 50% 50%, #FFD700 0%, transparent 70%)",
            }}
          />

          {/* Title Container with cute vector accents */}
          <div className="relative inline-flex items-center justify-center w-full">

            {/* Accent 1: Cute Mini Palm Leaf Accent (Top Left) */}
            <motion.svg
              animate={{ rotate: [-4, 4, -4], y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-9 -left-8 sm:-top-12 sm:-left-14 w-9 h-9 sm:w-14 sm:h-14 text-hh-yellow drop-shadow-md pointer-events-none z-10"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path d="M 5 35 Q 20 10, 35 5" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 35 5 Q 15 5, 8 18" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M 35 5 Q 25 22, 18 32" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="28" cy="12" r="2.5" fill="#FF007F" />
            </motion.svg>

            {/* Accent 2: Glowing Sparkle (Top Center above Hindi Badge) */}
            <motion.svg
              animate={{ scale: [0.85, 1.15, 0.85], rotate: [0, 90, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-7 left-1/2 -translate-x-1/2 sm:-top-10 w-7 h-7 sm:w-10 sm:h-10 text-hh-yellow pointer-events-none z-10"
              viewBox="0 0 24 24"
              fill="#FFD700"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </motion.svg>

            {/* Accent 3: Mini Paper Plane (Top Right of Title) */}
            <motion.div
              animate={{ x: [-2, 3, -2], y: [0, -4, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-8 sm:-top-14 sm:-right-14 pointer-events-none z-10"
            >
              <svg className="w-9 h-9 sm:w-14 sm:h-14 drop-shadow-md" viewBox="0 0 40 40" fill="none">
                <path d="M 5 20 C 12 10, 22 25, 30 12" stroke="#FF007F" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                <path d="M 24 6 L 36 10 L 26 22 Z" fill="#FFD700" stroke="#FAF7F2" strokeWidth="1.2" />
                <path d="M 26 13 L 26 22" stroke="#FF007F" strokeWidth="1.2" />
              </svg>
            </motion.div>

            {/* Expanded Main Title Heading */}
            <h1
              className="relative font-black leading-none tracking-tight select-none flex items-center justify-center whitespace-nowrap w-full"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2.6rem, 9.2vw, 8.2rem)",
                color: "#FFD700",
                textShadow:
                  "0 0 45px rgba(255,215,0,0.55), 0 5px 0 rgba(180,130,0,0.6), 0 8px 0 rgba(100,70,0,0.35), 2px 2px 0 rgba(255,215,0,0.3)",
                WebkitTextStroke: "1px rgba(255,215,0,0.3)",
              }}
            >
              <span>HACKER</span>

              {/* Hindi "गोवा" Accent Badge */}
              <motion.span
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-1 sm:py-2 rounded-2xl mx-2 sm:mx-4 align-middle border-2 sm:border-3 border-pink-400/60 relative shadow-pink-glow"
                style={{
                  background:
                    "linear-gradient(135deg, #FF007F 0%, #FF4DA6 100%)",
                  color: "#FAF7F2",
                  fontSize: "clamp(2rem, 7vw, 6.2rem)",
                  textShadow: "0 3px 10px rgba(0,0,0,0.35)",
                  WebkitTextStroke: "0",
                  fontFamily: "'Noto Sans Devanagari', 'Playfair Display', sans-serif",
                  fontWeight: "800",
                  letterSpacing: "0.02em",
                  boxShadow: "0 8px 30px rgba(255,0,127,0.7)",
                }}
              >
                गोवा
              </motion.span>

              <span>HOUSE</span>
            </h1>

            {/* Accent 4: Mini Code Tag Badge (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-5 sm:-bottom-7 sm:-right-10 px-2.5 py-1 rounded-md bg-forest-900 border border-yellow-400/60 text-hh-yellow font-mono text-[10px] sm:text-sm font-bold tracking-widest pointer-events-none shadow-md"
            >
              &lt;/&gt;
            </motion.div>

          </div>
        </motion.div>

        {/* ── 3. EVENT INFORMATION (SCALED UP) ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-8 sm:mb-10"
        >
          <span className="font-mono font-bold text-base sm:text-2xl md:text-3xl tracking-[0.3em] text-cream-100 uppercase">
            GOA, INDIA
          </span>
          <span className="text-hh-pink text-lg sm:text-2xl">★</span>
          <span className="font-mono font-bold text-base sm:text-2xl md:text-3xl tracking-[0.3em] text-cream-100 uppercase">
            28 – 31 OCT 2026
          </span>
        </motion.div>

        {/* ── 4. PRIMARY CTA (SCALED UP FOR PROPORTIONAL FIT) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7"
        >
          <button
            id="begin-verification-btn"
            onClick={handleBegin}
            className="group relative inline-flex items-center justify-center gap-4 w-[360px] sm:w-[480px] max-w-[92vw] h-[68px] sm:h-[80px] rounded-full font-black text-base sm:text-xl tracking-[0.2em] uppercase text-forest-950 transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] sheen-effect overflow-hidden cursor-pointer shadow-gold-glow"
            style={{
              background:
                "linear-gradient(135deg, #FFD700 0%, #FACC15 45%, #FFD700 100%)",
              boxShadow:
                "0 0 35px rgba(250,204,21,0.45), 0 10px 30px rgba(0,0,0,0.4)",
            }}
            aria-label="Begin Builder Verification"
          >
            {/* Fingerprint Icon */}
            <Fingerprint className="w-7 h-7 sm:w-9 sm:h-9 text-hh-pink flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />

            <span>BEGIN VERIFICATION</span>
          </button>
        </motion.div>

        {/* ── 5. SUPPORTING INFORMATION (SCALED UP) ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="font-mono text-xs sm:text-sm md:text-base text-emerald-300/80 tracking-[0.3em] uppercase font-bold"
        >
          247 BUILDERS • 4 DAYS • ONE BEACHFRONT RESIDENCY
        </motion.p>
      </div>

      {/* ── TAKEOFF OVERLAY ANIMATION ── */}
      <GoaAirlinesTakeoff isTakingOff={isTakingOff} onComplete={onBegin} />
    </div>
  );
};
