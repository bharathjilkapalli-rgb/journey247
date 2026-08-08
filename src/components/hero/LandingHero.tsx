"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { SelectionJourney } from "./SelectionJourney";
import { GoaAirlinesTakeoff } from "./GoaAirlinesTakeoff";
import { HangingGoaSignboard } from "./HangingGoaSignboard";
import { ArrowRight, Compass, Sparkles, Sun, Waves } from "lucide-react";

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
    <div className="relative min-h-screen flex flex-col justify-between py-8 px-4 md:px-8 max-w-7xl mx-auto z-20">
      {/* Flight Takeoff Overlay Animation */}
      <GoaAirlinesTakeoff
        isTakingOff={isTakingOff}
        onComplete={onBegin}
      />

      {/* Top Editorial Header Bar */}
      <header className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-forest-800/60 text-xs font-mono tracking-[0.25em] text-cream-300/70">
        <button
          onClick={onLogoTap}
          type="button"
          className="hover:text-hh-yellow transition-colors cursor-pointer text-left focus:outline-none"
          title="Tap 5 times for manifesto"
        >
          247PM.STUDIO
        </button>

        <div className="hidden sm:flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-cream-200">
            <Waves className="w-3.5 h-3.5 text-hh-pink" />
            <span>HHGOA.COM</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-hh-pink" />
          <span className="flex items-center gap-1.5 text-hh-yellow">
            <Sun className="w-3.5 h-3.5 text-hh-yellow" />
            <span>GOA, INDIA · 28–31 OCT 2026</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-hh-yellow font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EDITION 2026</span>
        </div>
      </header>

      {/* Main Editorial Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center my-6 text-center">
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/80 border border-yellow-500/30 text-hh-yellow text-xs font-mono tracking-[0.2em] mb-4 shadow-editorial"
        >
          <Compass className="w-4 h-4 text-hh-pink animate-spin" style={{ animationDuration: "12s" }} />
          <span>BUILDER JOURNEY CREDENTIAL TERMINAL</span>
        </motion.div>

        {/* FEATURE: Iconic Luxury Handcrafted Hanging GOA Wooden Signboard */}
        <HangingGoaSignboard />

        {/* Unobscured Main HH Serif Headlines */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center select-none pt-2 pb-2">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl font-black tracking-tight text-hh-yellow uppercase leading-none drop-shadow-editorial">
            HACKER
          </h1>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl font-black tracking-tight text-hh-yellow uppercase leading-none -mt-2 sm:-mt-5 drop-shadow-editorial">
            HOUSE
          </h1>
        </div>

        {/* Hero Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-serif text-cream-50 italic">
            247 Builders. One Journey.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-cream-200/90 font-sans leading-relaxed">
            &ldquo;Not everyone reaches Goa. Every builder begins the journey. This is yours.&rdquo;
          </p>
        </motion.div>

        {/* Selection Framework Timeline */}
        <SelectionJourney />

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4"
        >
          <MagneticButton variant="gold" onClick={handleBeginJourneyClick} className="text-base py-5 px-10">
            <span className="flex items-center gap-3">
              <span>Begin Journey</span>
              <ArrowRight className="w-5 h-5" />
            </span>
          </MagneticButton>
        </motion.div>

        <p className="text-xs font-mono text-cream-400/60 mt-4 tracking-wider">
          ESTIMATED TIME: 60 SECONDS · BUILDER ONBOARDING
        </p>
      </main>

      {/* Footer Branding */}
      <footer className="pt-6 border-t border-forest-800/60 flex flex-wrap justify-between items-center text-xs font-mono text-cream-400/60 gap-2">
        <div>HACKER HOUSE GOA 2026 SELECTION FRAMEWORK</div>
        <div>247 BUILDERS · ONE COMMUNITY</div>
      </footer>
    </div>
  );
};
