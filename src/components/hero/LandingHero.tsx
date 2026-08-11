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
    <div className="relative h-screen w-full min-h-[700px] max-h-screen overflow-hidden bg-forest-950 flex flex-col items-center justify-between select-none">
      {/* ── BACKGROUND DOODLE LAYER (PERIMETER ONLY) ── */}
      <GoaDoodles mousePos={mousePos} />

      {/* ── RADIAL SPOTLIGHT ATMOSPHERE ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 48%, rgba(11,79,50,0.22) 0%, rgba(5,46,29,0.75) 60%, rgba(5,46,29,0.98) 100%)",
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
          TOP / BRANDING AREA (UPPER-LEFT, Approx 18% Left, 24% Top)
          ================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute left-[8vw] sm:left-[14vw] md:left-[18vw] top-[6vh] sm:top-[12vh] md:top-[18vh] z-30 pointer-events-auto"
      >
        <button
          onClick={onLogoTap}
          className="flex flex-col items-start leading-tight cursor-pointer group text-left"
          aria-label="2:47PM Studio - tap for manifesto"
        >
          <span
            className="text-hh-yellow font-black text-2xl sm:text-3xl md:text-4xl tracking-widest group-hover:text-yellow-300 transition-colors duration-200"
            style={{
              fontFamily: "'Noto Serif Devanagari', serif",
              textShadow: "0 0 16px rgba(250,204,21,0.55)",
            }}
          >
            2:47PM
          </span>
          <span
            className="text-hh-yellow font-bold text-base sm:text-lg md:text-xl tracking-[0.35em] group-hover:text-yellow-300 transition-colors duration-200"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            STUDIO
          </span>
        </button>
      </motion.div>

      {/* ==================================================
          CENTRAL HERO CONTENT COLUMN (Center = Content, 55-60% Width)
          ================================================== */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center my-auto px-4 w-full max-w-[92vw] sm:max-w-[75vw] md:max-w-[60vw]">

        {/* ── 1. TAGLINE ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-serif italic text-cream-50/90 text-lg sm:text-2xl md:text-3xl mb-8 tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Code.{" "}
          <span className="text-hh-pink not-italic font-bold">Create.</span>{" "}
          Escape. Repeat.
        </motion.p>

        {/* ── 2. MAIN TITLE (PRIMARY VISUAL FOCAL POINT) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-7 w-full flex items-center justify-center"
        >
          {/* Subtle Glow behind main title */}
          <div
            className="absolute inset-0 blur-3xl opacity-35 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 50%, #FFD700 0%, transparent 70%)",
            }}
          />

          {/* Title Container with small cute vector accents */}
          <div className="relative inline-flex items-center justify-center">

            {/* Accent 1: Cute Mini Palm Leaf Accent (Top Left) */}
            <motion.svg
              animate={{ rotate: [-4, 4, -4], y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-7 -left-7 sm:-top-9 sm:-left-11 w-7 h-7 sm:w-11 sm:h-11 text-hh-yellow drop-shadow-md pointer-events-none z-10"
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
              className="absolute -top-6 left-1/2 -translate-x-1/2 sm:-top-8 w-6 h-6 sm:w-8 sm:h-8 text-hh-yellow pointer-events-none z-10"
              viewBox="0 0 24 24"
              fill="#FFD700"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </motion.svg>

            {/* Accent 3: Mini Paper Plane (Top Right of Title) */}
            <motion.div
              animate={{ x: [-2, 3, -2], y: [0, -4, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-7 sm:-top-11 sm:-right-11 pointer-events-none z-10"
            >
              <svg className="w-8 h-8 sm:w-11 sm:h-11 drop-shadow-md" viewBox="0 0 40 40" fill="none">
                <path d="M 5 20 C 12 10, 22 25, 30 12" stroke="#FF007F" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                <path d="M 24 6 L 36 10 L 26 22 Z" fill="#FFD700" stroke="#FAF7F2" strokeWidth="1.2" />
                <path d="M 26 13 L 26 22" stroke="#FF007F" strokeWidth="1.2" />
              </svg>
            </motion.div>

            {/* Main Title Heading */}
            <h1
              className="relative font-black leading-none tracking-tight select-none flex items-center justify-center whitespace-nowrap"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2.2rem, 7.2vw, 6.2rem)",
                color: "#FFD700",
                textShadow:
                  "0 0 40px rgba(255,215,0,0.5), 0 4px 0 rgba(180,130,0,0.6), 0 7px 0 rgba(100,70,0,0.3), 2px 2px 0 rgba(255,215,0,0.3)",
                WebkitTextStroke: "1px rgba(255,215,0,0.25)",
              }}
            >
              <span>HACKER</span>

              {/* Hindi "गोवा" Accent Badge */}
              <motion.span
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="inline-flex items-center justify-center px-3 sm:px-5 py-0.5 sm:py-1 rounded-xl mx-2 sm:mx-3.5 align-middle border-2 border-pink-400/50 relative shadow-pink-glow"
                style={{
                  background:
                    "linear-gradient(135deg, #FF007F 0%, #FF4DA6 100%)",
                  color: "#FAF7F2",
                  fontSize: "clamp(1.7rem, 5.5vw, 4.6rem)",
                  textShadow: "0 2px 8px rgba(0,0,0,0.35)",
                  WebkitTextStroke: "0",
                  fontFamily: "'Noto Sans Devanagari', 'Playfair Display', sans-serif",
                  fontWeight: "800",
                  letterSpacing: "0.02em",
                  boxShadow: "0 6px 25px rgba(255,0,127,0.65)",
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
              className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-8 px-2 py-0.5 rounded-md bg-forest-900 border border-yellow-400/60 text-hh-yellow font-mono text-[9px] sm:text-xs font-bold tracking-widest pointer-events-none shadow-md"
            >
              &lt;/&gt;
            </motion.div>

          </div>
        </motion.div>

        {/* ── 3. EVENT INFORMATION ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-9"
        >
          <span className="font-mono font-bold text-sm sm:text-lg md:text-xl tracking-[0.25em] text-cream-100 uppercase">
            GOA, INDIA
          </span>
          <span className="text-hh-pink text-base sm:text-xl">★</span>
          <span className="font-mono font-bold text-sm sm:text-lg md:text-xl tracking-[0.25em] text-cream-100 uppercase">
            28 – 31 OCT 2026
          </span>
        </motion.div>

        {/* ── 4. PRIMARY CTA (SECOND STRONGEST FOCAL POINT) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <button
            id="begin-verification-btn"
            onClick={handleBegin}
            className="group relative inline-flex items-center justify-center gap-3.5 w-[340px] sm:w-[420px] max-w-[90vw] h-[62px] sm:h-[72px] rounded-full font-black text-sm sm:text-base md:text-lg tracking-[0.18em] uppercase text-forest-950 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] sheen-effect overflow-hidden cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, #FFD700 0%, #FACC15 45%, #FFD700 100%)",
              boxShadow:
                "0 0 28px rgba(250,204,21,0.4), 0 8px 24px rgba(0,0,0,0.35)",
            }}
            aria-label="Begin Builder Verification"
          >
            {/* Fingerprint Icon */}
            <Fingerprint className="w-6 h-6 sm:w-7 sm:h-7 text-hh-pink flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />

            <span>BEGIN VERIFICATION</span>
          </button>
        </motion.div>

        {/* ── 5. SUPPORTING INFORMATION ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="font-mono text-[11px] sm:text-xs md:text-sm text-emerald-300/70 tracking-[0.25em] uppercase font-semibold"
        >
          247 BUILDERS • 4 DAYS • ONE BEACHFRONT RESIDENCY
        </motion.p>
      </div>

      {/* ── TAKEOFF OVERLAY ANIMATION ── */}
      <GoaAirlinesTakeoff isTakingOff={isTakingOff} onComplete={onBegin} />
    </div>
  );
};
