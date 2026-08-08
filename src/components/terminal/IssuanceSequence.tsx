"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STACK_PRESETS } from "@/lib/stack-presets";
import { StackType } from "@/lib/types";

interface IssuanceSequenceProps {
  name: string;
  stack: StackType;
  builderNumber: string;
  onComplete: () => void;
}

export const IssuanceSequence: React.FC<IssuanceSequenceProps> = ({
  name,
  stack,
  builderNumber,
  onComplete,
}) => {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(0);

  const captions = [
    "Every Builder Begins Somewhere.",
    "The Road to 247 Starts Here.",
    "Destination: Hacker House Goa.",
    "Preparing Your Builder Journey.",
    "Arriving at Road to 247.",
  ];

  const milestones = [
    { label: "Open Trial", phase: "Aug 2026" },
    { label: "Partner Trial", phase: "Sept 2026" },
    { label: "RSVP & Stake", phase: "Late Sept" },
    { label: "Residency", phase: "Goa · Oct 28–31" },
  ];

  // Rotate narrative captions every 1.1 seconds (5.5s total duration)
  useEffect(() => {
    const captionTimer = setInterval(() => {
      setCaptionIndex((prev) => {
        if (prev < captions.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1100);

    // Highlight milestones sequentially in sync with flight progress
    const milestoneTimer = setInterval(() => {
      setActiveMilestone((prev) => {
        if (prev < milestones.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1300);

    // Complete sequence after 5.5 seconds and trigger credential reveal
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5600);

    return () => {
      clearInterval(captionTimer);
      clearInterval(milestoneTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-5xl mx-auto py-8 px-4 flex flex-col justify-between min-h-[550px] select-none"
    >
      {/* SECTION 2: TOP FULL-WIDTH DEPARTURE BOARD BANNER */}
      <div className="w-full p-8 md:p-10 rounded-3xl bg-forest-900/90 border border-yellow-500/30 shadow-2xl relative overflow-hidden backdrop-blur-md paper-texture">
        {/* Subtle Goa Sun Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-amber-400/10 via-hh-pink/5 to-transparent blur-3xl pointer-events-none" />

        {/* Airport Departure Header Metadata */}
        <header className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-forest-800 text-xs font-mono tracking-[0.25em] text-cream-300/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-hh-pink shadow-pink-glow animate-pulse" />
            <span className="text-hh-yellow font-bold uppercase">NOW BOARDING</span>
            <span className="text-cream-400">· FLIGHT 247</span>
          </div>

          <div className="flex items-center gap-4 text-cream-100 font-semibold">
            <span>ROAD TO 247</span>
            <span>→</span>
            <span className="text-hh-yellow">DESTINATION: HACKER HOUSE GOA</span>
          </div>

          <div className="text-hh-pink font-mono font-bold">GOA · INDIA</div>
        </header>

        {/* Narrative Cross-Fading Captions (Apple Keynote Style) */}
        <div className="my-8 text-center min-h-[70px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={captionIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              className="font-serif text-3xl md:text-5xl font-bold text-cream-50 italic tracking-tight"
            >
              &ldquo;{captions[captionIndex]}&rdquo;
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* SECTION 1: THE FLIGHT JOURNEY ANIMATION */}
        <div className="relative w-full h-24 my-6 flex items-center">
          {/* Subtle Curved Flight Path Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <path
              d="M 10 70 Q 500 10 980 60"
              fill="none"
              stroke="rgba(250, 204, 21, 0.2)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Curved Flight Path Trail Layer */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5.2, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformOrigin: "left center" }}
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <svg className="w-full h-full overflow-visible">
              <path
                d="M 10 70 Q 500 10 980 60"
                fill="none"
                stroke="rgba(255, 0, 127, 0.6)"
                strokeWidth="2.5"
              />
            </svg>
          </motion.div>

          {/* Premium Aircraft Moving from Left to Right along Gentle Curve */}
          <motion.div
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 5.2, ease: [0.65, 0, 0.35, 1] }}
            style={{
              offsetPath: `path('M 10 70 Q 500 10 980 60')`,
              position: "absolute",
            }}
            className="flex items-center gap-3 transform -translate-y-1/2 z-20"
          >
            {/* Minimalist Editorial Aircraft Vector */}
            <div className="relative">
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-hh-yellow drop-shadow-gold-glow transform rotate-90"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M50,5 L58,40 L95,65 L90,72 L58,58 L58,85 L72,96 L68,100 L50,94 L32,100 L28,96 L42,85 L42,58 L10,72 L5,65 L42,40 Z" />
              </svg>
            </div>

            {/* Aircraft Identifier Label */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-950/90 border border-yellow-400/60 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-hh-pink animate-pulse" />
              <span className="text-[10px] font-mono text-cream-100 font-bold tracking-wider uppercase">
                FLIGHT 247 · {STACK_PRESETS[stack].builderType.toUpperCase()}
              </span>
            </div>
          </motion.div>
        </div>

        {/* SECTION 3: ROAD TO 247 TIMELINE MILESTONE PROGRESSION */}
        <div className="pt-6 border-t border-forest-800 grid grid-cols-2 md:grid-cols-4 gap-4">
          {milestones.map((m, idx) => {
            const isLit = idx <= activeMilestone;
            return (
              <div
                key={m.label}
                className={`p-3 rounded-2xl border transition-all duration-700 flex flex-col justify-between ${
                  isLit
                    ? "bg-forest-950 border-hh-pink shadow-pink-glow ring-1 ring-hh-pink/40"
                    : "bg-forest-950/40 border-forest-800/60 opacity-40"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono tracking-widest text-hh-yellow uppercase font-bold">
                    MILESTONE 0{idx + 1}
                  </span>
                  {isLit && (
                    <span className="w-2 h-2 rounded-full bg-hh-pink shadow-pink-glow animate-pulse" />
                  )}
                </div>
                <h4 className="font-serif text-sm font-bold text-cream-50">{m.label}</h4>
                <span className="text-[10px] font-mono text-cream-400 mt-1">{m.phase}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-xs font-mono text-cream-400/60 tracking-widest uppercase">
          ARRIVING AT ROAD TO 247 · BUILDER ONBOARDING
        </p>
      </div>
    </motion.div>
  );
};
