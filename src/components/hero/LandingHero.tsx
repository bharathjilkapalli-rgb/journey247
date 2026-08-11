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
    <div className="relative min-h-screen w-full overflow-hidden bg-forest-950 flex flex-col items-center justify-center">
      {/* ── BACKGROUND DOODLE LAYER ── */}
      <GoaDoodles mousePos={mousePos} />

      {/* ── RADIAL SPOTLIGHT ATMOSPHERE ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(11,79,50,0.18) 0%, rgba(5,46,29,0.7) 60%, rgba(5,46,29,0.97) 100%)",
        }}
      />

      {/* ── VIGNETTE EDGES ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5,46,29,0.85) 100%)",
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 py-8 w-full max-w-5xl mx-auto">

        {/* ── TOP BAR: Logo ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute top-6 left-0 right-0 flex items-center justify-between pl-4 pr-6 sm:pl-6 sm:pr-10"
        >
          {/* 2:47PM STUDIO Logo */}
          <button
            onClick={onLogoTap}
            className="flex flex-col items-start leading-tight cursor-pointer group select-none"
            aria-label="2:47PM Studio - tap for manifesto"
          >
            <span
              className="text-hh-yellow font-black text-3xl sm:text-4xl md:text-5xl tracking-widest group-hover:text-yellow-300 transition-colors duration-200"
              style={{
                fontFamily: "'Noto Serif Devanagari', serif",
                textShadow: "0 0 12px rgba(250,204,21,0.5)",
              }}
            >
              2:47PM
            </span>
            <span
              className="text-hh-yellow font-bold text-xl sm:text-2xl md:text-3xl tracking-[0.35em] group-hover:text-yellow-300 transition-colors duration-200"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              STUDIO
            </span>
          </button>
        </motion.div>

        {/* ── TAGLINE ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-serif italic text-cream-50/80 text-lg sm:text-2xl md:text-3xl mb-2 mt-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Code.{" "}
          <span className="text-hh-pink not-italic">Create.</span>{" "}
          Escape. Repeat.
        </motion.p>

        {/* ── MAIN TITLE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-4 w-full flex items-center justify-center"
        >
          {/* Glow behind title */}
          <div
            className="absolute inset-0 blur-3xl opacity-35 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, #FFD700 0%, transparent 70%)",
              transform: "scaleY(0.5)",
            }}
          />

          {/* Title Container with cute floating doodles */}
          <div className="relative inline-flex items-center justify-center">

            {/* Doodle 1: Cute Mini Palm Leaf Accent (Top Left) */}
            <motion.svg
              animate={{ rotate: [-4, 4, -4], y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 sm:-top-8 sm:-left-10 w-8 h-8 sm:w-12 sm:h-12 text-hh-yellow drop-shadow-md pointer-events-none z-10"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path d="M 5 35 Q 20 10, 35 5" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 35 5 Q 15 5, 8 18" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M 35 5 Q 25 22, 18 32" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="28" cy="12" r="2.5" fill="#FF007F" />
            </motion.svg>

            {/* Doodle 2: Glowing Sparkle (Top Right of Hindi Badge) */}
            <motion.svg
              animate={{ scale: [0.85, 1.15, 0.85], rotate: [0, 90, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 left-1/2 -translate-x-1/2 sm:-top-7 w-6 h-6 sm:w-8 sm:h-8 text-hh-yellow pointer-events-none z-10"
              viewBox="0 0 24 24"
              fill="#FFD700"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </motion.svg>

            {/* Doodle 3: Mini Paper Plane (Top Right of Title) */}
            <motion.g
              animate={{ x: [-2, 3, -2], y: [0, -4, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-7 -right-6 sm:-top-10 sm:-right-10 pointer-events-none z-10"
            >
              <svg className="w-8 h-8 sm:w-11 sm:h-11 drop-shadow-md" viewBox="0 0 40 40" fill="none">
                <path d="M 5 20 C 12 10, 22 25, 30 12" stroke="#FF007F" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                <path d="M 24 6 L 36 10 L 26 22 Z" fill="#FFD700" stroke="#FAF7F2" strokeWidth="1.2" />
                <path d="M 26 13 L 26 22" stroke="#FF007F" strokeWidth="1.2" />
              </svg>
            </motion.g>

            {/* Single Line Headline */}
            <h1
              className="relative font-black leading-none tracking-tight select-none flex items-center justify-center whitespace-nowrap"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2rem, 7.5vw, 6.5rem)",
                color: "#FFD700",
                textShadow:
                  "0 0 35px rgba(255,215,0,0.45), 0 4px 0 rgba(180,130,0,0.6), 0 7px 0 rgba(100,70,0,0.3), 2px 2px 0 rgba(255,215,0,0.3)",
                WebkitTextStroke: "1px rgba(255,215,0,0.2)",
              }}
            >
              <span>HACKER</span>

              {/* Hindi Goa Badge */}
              <motion.span
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="inline-flex items-center justify-center px-3 sm:px-5 py-0.5 sm:py-1 rounded-xl mx-2 sm:mx-3 align-middle border-2 border-pink-400/50 relative shadow-pink-glow"
                style={{
                  background:
                    "linear-gradient(135deg, #FF007F 0%, #FF4DA6 100%)",
                  color: "#FAF7F2",
                  fontSize: "clamp(1.6rem, 5.5vw, 4.8rem)",
                  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
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

            {/* Doodle 4: Cute Mini Code Tag Badge (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-8 px-2 py-0.5 rounded-md bg-forest-900 border border-yellow-400/60 text-hh-yellow font-mono text-[9px] sm:text-xs font-bold tracking-widest pointer-events-none shadow-md"
            >
              &lt;/&gt;
            </motion.div>

          </div>
        </motion.div>

        {/* ── EVENT DATE & LOCATION ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span
            className="font-mono font-bold text-base sm:text-xl tracking-widest text-cream-50/90 uppercase"
          >
            GOA, INDIA
          </span>
          <span className="text-hh-pink text-xl">★</span>
          <span className="text-cream-50/50 text-lg">📅</span>
          <span
            className="font-mono font-bold text-base sm:text-xl tracking-widest text-cream-50/90 uppercase"
          >
            28 – 31 OCT 2026
          </span>
        </motion.div>

        {/* ── CTA BUTTON ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            id="begin-verification-btn"
            onClick={handleBegin}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg tracking-[0.15em] uppercase text-forest-950 transition-all duration-300 hover:scale-105 active:scale-95 sheen-effect overflow-hidden shadow-gold-glow"
            style={{
              background:
                "linear-gradient(135deg, #FFD700 0%, #FACC15 40%, #FFD700 100%)",
              boxShadow:
                "0 0 30px rgba(250,204,21,0.4), 0 4px 20px rgba(0,0,0,0.3)",
            }}
            aria-label="Begin Builder Verification"
          >
            {/* Fingerprint Icon */}
            <Fingerprint className="w-6 h-6 sm:w-7 sm:h-7 text-hh-pink flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />

            <span>BEGIN VERIFICATION</span>
          </button>
        </motion.div>

        {/* ── SUBTLE BOTTOM TAGLINE ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 font-mono text-xs sm:text-sm text-cream-50/40 tracking-[0.2em] uppercase"
        >
          247 Builders · 4 Days · One Beachfront Residency
        </motion.p>
      </div>

      {/* ── TAKEOFF OVERLAY ── */}
      <GoaAirlinesTakeoff isTakingOff={isTakingOff} onComplete={onBegin} />
    </div>
  );
};
