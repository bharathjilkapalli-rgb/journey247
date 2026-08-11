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
          className="relative mb-4"
        >
          {/* Glow behind title */}
          <div
            className="absolute inset-0 blur-3xl opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, #FFD700 0%, transparent 70%)",
              transform: "scaleY(0.5)",
            }}
          />
          <h1
            className="relative font-black leading-none tracking-tight select-none"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              color: "#FFD700",
              textShadow:
                "0 0 40px rgba(255,215,0,0.5), 0 4px 0 rgba(180,130,0,0.6), 0 8px 0 rgba(100,70,0,0.3), 2px 2px 0 rgba(255,215,0,0.3)",
              WebkitTextStroke: "1px rgba(255,215,0,0.2)",
            }}
          >
            HACKER{" "}
            <span
              className="inline-block px-3 py-1 rounded-lg mx-1 align-middle"
              style={{
                background:
                  "linear-gradient(135deg, #FF007F 0%, #FF4DA6 100%)",
                color: "#FAF7F2",
                fontSize: "clamp(2rem, 7vw, 5.5rem)",
                textShadow: "none",
                WebkitTextStroke: "0",
                verticalAlign: "middle",
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                letterSpacing: "0.02em",
                boxShadow: "0 4px 20px rgba(255,0,127,0.5)",
              }}
            >
              गोवा
            </span>{" "}
            HOUSE
          </h1>
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
