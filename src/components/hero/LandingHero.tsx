"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SelectionJourney } from "./SelectionJourney";
import { GoaAirlinesTakeoff } from "./GoaAirlinesTakeoff";
import { HangingGoaSignboard } from "./HangingGoaSignboard";
import { ArrowRight, Sun, Waves, Sparkles } from "lucide-react";

interface LandingHeroProps {
  onBegin: () => void;
  onLogoTap: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ onBegin, onLogoTap }) => {
  const [isTakingOff, setIsTakingOff] = useState(false);

  const handleBeginJourneyClick = () => {
    setIsTakingOff(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between py-6 px-4 md:px-8 max-w-7xl mx-auto z-20">
      {/* Flight Takeoff Overlay Animation */}
      <GoaAirlinesTakeoff
        isTakingOff={isTakingOff}
        onComplete={onBegin}
      />

      {/* TOP DESI-INSPIRED HEADER BAR */}
      <header className="flex items-center justify-between gap-4 pb-6 border-b border-forest-800/60 text-xs font-mono tracking-[0.2em] text-cream-300/70">
        {/* Left: 2:47PM STUDIO Custom Desi Logo */}
        <button
          onClick={onLogoTap}
          type="button"
          className="text-left focus:outline-none group cursor-pointer"
          title="Tap 5 times for manifesto"
        >
          <div className="font-serif text-xl sm:text-2xl md:text-3xl font-black text-hh-yellow drop-shadow-gold-glow flex items-center gap-2">
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-hh-pink animate-spin" style={{ animationDuration: "12s" }} />
            <span>2:47PM.STUDIO</span>
          </div>
        </button>

        {/* Right Header Status */}
        <div className="flex items-center gap-2 text-hh-yellow font-bold text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EDITION 2026 · GOA, INDIA</span>
        </div>
      </header>

      {/* MAIN HERO SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center my-6 text-center">
        {/* HANGING GOA SIGNBOARD SUSPENDED FROM TOP OF SCREEN */}
        <HangingGoaSignboard />

        {/* HERO TITLE LAYOUT: HACKER & HOUSE SIDE-BY-SIDE */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center select-none pt-2 pb-2">
          {/* Side-by-Side HACKER HOUSE Headlines */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-hh-yellow uppercase leading-none drop-shadow-editorial flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            <span>HACKER</span>
            <span>HOUSE</span>
          </h1>
        </div>

        {/* Hero Taglines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 max-w-2xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl font-serif text-cream-50 italic">
            247 Builders. One Journey.
          </h2>

          <p className="mt-2 text-sm sm:text-base text-cream-200/90 font-sans leading-relaxed">
            &ldquo;Not everyone reaches Goa. Every builder begins the journey. This is yours.&rdquo;
          </p>
        </motion.div>

        {/* Selection Framework Timeline */}
        <SelectionJourney />

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6"
        >
          <button
            type="button"
            onClick={handleBeginJourneyClick}
            className="group relative inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-forest-950 font-mono text-sm font-extrabold tracking-widest uppercase shadow-gold-glow hover:brightness-110 transition-all cursor-pointer border-2 border-yellow-200"
          >
            <div className="absolute inset-1 rounded-xl border border-dashed border-forest-950/40 pointer-events-none" />
            <span className="relative z-10 flex items-center gap-3">
              <span>BEGIN BUILDER JOURNEY</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>

        <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/90 border border-yellow-500/50 text-hh-yellow font-mono text-xs font-bold tracking-[0.2em] shadow-md hover:border-hh-pink transition-colors">
          <span className="w-2 h-2 rounded-full bg-hh-pink shadow-pink-glow animate-pulse" />
          <span>ESTIMATED TIME: 60 SECONDS · BUILDER ONBOARDING</span>
        </div>
      </main>

      {/* FOOTER METADATA BAR */}
      <footer className="pt-6 border-t border-forest-800/60 flex flex-wrap justify-between items-center text-xs font-mono text-cream-300/70 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-hh-pink shadow-pink-glow animate-pulse" />
          <span>GOA, INDIA · 28 – 31 OCT 2026</span>
        </div>
        <div className="text-hh-yellow font-bold tracking-widest">
          2:47 PM STUDIO
        </div>
      </footer>
    </div>
  );
};
