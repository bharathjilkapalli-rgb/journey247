"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BuilderPayload } from "@/lib/types";
import { STACK_PRESETS } from "@/lib/stack-presets";
import { generateVersionedJSONPayload } from "@/lib/qr";
import { StackBackground } from "./StackBackground";
import { OfficialSeal } from "./OfficialSeal";
import { DynamicQRCode } from "../ui/DynamicQRCode";
import { BorderBeam } from "../ui/BorderBeam";
import { MapPin, Calendar, Compass, ArrowRight, RotateCw, ShieldCheck, Key } from "lucide-react";

interface ClearanceCardProps {
  payload: BuilderPayload;
  onSealClick?: () => void;
  onQrHover?: (isHovered: boolean) => void;
}

export const ClearanceCard: React.FC<ClearanceCardProps> = ({
  payload,
  onSealClick,
  onQrHover,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const preset = STACK_PRESETS[payload.stack];

  // Card Flip State (Front / Back View)
  const [isFlipped, setIsFlipped] = useState(false);

  // SECTION 4: Subconscious parallax max 3px
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringChild, setIsHoveringChild] = useState(false);

  // Typewriter reveal state for Builder Number
  const [typedNumber, setTypedNumber] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)");

    const handleMouseMove = (e: MouseEvent) => {
      if (mediaQuery.matches || isHoveringChild || isFlipped) return;
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 3,
        y: (e.clientY / window.innerHeight - 0.5) * 3,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHoveringChild, isFlipped]);

  useEffect(() => {
    let index = 0;
    const fullNumber = payload.builderNumber;
    const interval = setInterval(() => {
      if (index <= fullNumber.length) {
        setTypedNumber(fullNumber.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [payload.builderNumber]);

  const filterClasses = {
    warm: "filter-warm",
    emerald: "filter-emerald",
    noir: "filter-noir",
    sunset: "filter-sunset",
  };

  // Structured Versioned JSON Payload for Attendance Verification & Event Scanner Apps
  const versionedJsonPayload = generateVersionedJSONPayload(
    payload.builderNumber,
    payload.name,
    payload.stack.toUpperCase(),
    preset.builderType,
    payload.isoTimestamp || new Date().toISOString()
  );

  return (
    <div className="perspective-1000 flex flex-col items-center justify-center py-4 w-full">
      {/* Flip Toggle Button */}
      <div className="mb-4 flex items-center justify-center z-30">
        <button
          type="button"
          onClick={() => setIsFlipped(!isFlipped)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 border border-yellow-500/40 text-hh-yellow hover:border-hh-yellow text-xs font-mono tracking-wider uppercase transition-all shadow-md cursor-pointer"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>{isFlipped ? "View Credential Front" : "View Credential Back"}</span>
        </button>
      </div>

      {/* Hero Credential Container (Width ~580px - 640px) */}
      <motion.div
        ref={cardRef}
        id="clearance-card-container"
        initial={{ y: 60, opacity: 0, scale: 0.98 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
          x: isHoveringChild || isFlipped ? 0 : mousePos.x,
          rotateY: isHoveringChild ? 0 : isFlipped ? 180 : 0,
        }}
        transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative w-full max-w-2xl aspect-[4/5] rounded-[36px] bg-forest-950 border-2 border-yellow-500/40 shadow-2xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden sheen-effect paper-texture select-none"
      >
        {/* 21st.dev Inspired Border Beam Glow */}
        <BorderBeam size={180} duration={9} colorFrom="#FF007F" colorTo="#FACC15" />

        <AnimatePresence mode="wait">
          {!isFlipped ? (
            /* ================= FRONT SIDE ================= */
            <motion.div
              key="front"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col justify-between"
            >
              {/* Stack Background Pattern Overlay */}
              <div className="pointer-events-none">
                <StackBackground stack={payload.stack} />
              </div>

              {/* Ambient Top Glow Accent */}
              <div
                className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ backgroundColor: preset.accentColor }}
              />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none bg-hh-pink" />

              {/* Header Bar */}
              <header className="relative z-10 flex items-start justify-between pb-6 border-b border-forest-800/80 pointer-events-none">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-hh-pink shadow-pink-glow animate-pulse" />
                    <span className="text-xs font-mono tracking-[0.25em] text-hh-yellow uppercase">
                      HACKER HOUSE GOA 2026
                    </span>
                  </div>
                  <h1 className="font-serif text-3xl sm:text-4xl font-black text-cream-50 tracking-tight mt-1">
                    ROAD TO 247
                  </h1>
                  <span className="text-xs font-mono tracking-widest text-cream-300/80 uppercase block mt-0.5">
                    BUILDER JOURNEY CREDENTIAL
                  </span>
                </div>

                {/* Builder Number Badge with Typewriter Reveal */}
                <div className="flex flex-col items-end">
                  <span className="text-[9px] font-mono text-cream-400 tracking-wider uppercase">
                    BUILDER NO.
                  </span>
                  <div className="px-4 py-1.5 rounded-xl bg-forest-900 border border-yellow-500/50 shadow-md text-hh-yellow font-mono text-base font-bold tracking-wider">
                    {typedNumber || "HHG26-...."}
                  </div>
                </div>
              </header>

              {/* Middle Section: Photo & Core Metadata */}
              <div className="relative z-10 grid grid-cols-12 gap-6 my-auto items-center py-4">
                {/* Portrait Photo Frame (Left 5 Cols) */}
                <div className="col-span-5 flex flex-col items-center">
                  <div
                    className={`relative w-36 h-44 sm:w-44 sm:h-56 rounded-2xl p-1 bg-gradient-to-b from-yellow-400/80 via-hh-pink/60 to-forest-900 shadow-2xl border ${preset.borderColor}`}
                  >
                    <div className="w-full h-full rounded-xl overflow-hidden bg-forest-900 relative">
                      {payload.selfieUrl ? (
                        /* eslint-disable-next-html-image-element */
                        <img
                          src={payload.selfieUrl}
                          alt={payload.name}
                          className={`w-full h-full object-cover ${filterClasses[payload.photoFilter]}`}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-cream-400 text-xs font-mono">
                          NO PHOTO
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/90 border border-yellow-500/40 text-xs font-mono text-hh-yellow">
                    <Compass className="w-3 h-3 text-hh-pink" />
                    <span>JOURNEY BEGUN</span>
                  </div>
                </div>

                {/* Builder Details (Right 7 Cols) */}
                <div className="col-span-7 flex flex-col justify-center space-y-4 pl-2">
                  {/* Builder Name */}
                  <div>
                    <span className="text-[9px] font-mono text-cream-400 tracking-widest uppercase block">
                      BUILDER IDENTITY
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-cream-50 leading-tight tracking-tight line-clamp-2">
                      {payload.name}
                    </h2>
                  </div>

                  {/* Builder Type Badge */}
                  <div>
                    <span className="text-[9px] font-mono text-cream-400 tracking-widest uppercase block">
                      TRACK SPECIFICATION
                    </span>
                    <div
                      className={`inline-block px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase border mt-1 ${preset.badgeBg} ${preset.badgeText}`}
                    >
                      {preset.builderType}
                    </div>
                  </div>

                  {/* Journey Progression Stage */}
                  <div>
                    <span className="text-[9px] font-mono text-hh-pink tracking-widest uppercase block">
                      JOURNEY PROGRESSION
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-cream-200 mt-1">
                      <span className="px-2 py-0.5 rounded bg-hh-pink/20 text-hh-pink border border-hh-pink/40 font-bold">
                        OPEN TRIAL
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-cream-400" />
                      <span className="text-cream-400/80">PARTNER TRIAL</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cream-400/50" />
                      <span className="text-cream-400/50">GOA</span>
                    </div>
                  </div>

                  {/* Builder Principle */}
                  <div>
                    <span className="text-[9px] font-mono text-hh-yellow tracking-widest uppercase block">
                      BUILDER PRINCIPLE
                    </span>
                    <p className="font-serif text-sm font-semibold text-cream-100 italic leading-snug">
                      &ldquo;{payload.principle || preset.principle}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Seal, QR Code & Event Metadata */}
              <footer className="relative z-10 pt-5 border-t border-forest-800/80 flex items-end justify-between">
                {/* Left Info */}
                <div className="space-y-1.5 text-xs font-mono text-cream-300/80 pointer-events-none">
                  <div className="flex items-center gap-2 text-cream-100 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-hh-pink" />
                    <span>GOA, INDIA · 28–31 OCT 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-hh-yellow" />
                    <span>ISSUED: {payload.issueDate}</span>
                  </div>
                  <div className="text-[9px] text-cream-400/60 tracking-wider">
                    ROAD TO 247 · HACKER HOUSE GOA
                  </div>
                </div>

                {/* Center / Right: Official Seal & Dynamic Structured JSON QR Code */}
                <div className="flex items-center gap-4">
                  {/* Scannable Structured JSON Dynamic QR Code — Completely Static & Vibration-Free */}
                  <div className="flex flex-col items-center">
                    <div
                      onMouseEnter={() => {
                        setIsHoveringChild(true);
                        onQrHover?.(true);
                      }}
                      onMouseLeave={() => {
                        setIsHoveringChild(false);
                        onQrHover?.(false);
                      }}
                      className="p-1 rounded-xl bg-cream-50 border-2 border-yellow-400/80 hover:border-hh-pink transition-colors duration-200 cursor-pointer flex items-center justify-center shadow-md select-none"
                      style={{ transform: "none", willChange: "auto" }}
                      title={`Scan for Builder Details — JSON Payload [${payload.builderNumber}]`}
                    >
                      <DynamicQRCode
                        value={versionedJsonPayload}
                        size={64}
                        fgColor="#052E1D"
                        bgColor="#FAF7F2"
                      />
                    </div>
                    <span className="text-[7px] font-mono text-cream-400/80 tracking-tighter uppercase mt-1">
                      SCAN FOR BUILDER DETAILS
                    </span>
                  </div>

                  {/* Interactive Official Seal with Stamp Lock */}
                  <div
                    onMouseEnter={() => setIsHoveringChild(true)}
                    onMouseLeave={() => setIsHoveringChild(false)}
                  >
                    <OfficialSeal onClick={onSealClick} size="md" />
                  </div>
                </div>
              </footer>
            </motion.div>
          ) : (
            /* ================= BACK SIDE ================= */
            <motion.div
              key="back"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ transform: "scaleX(-1)" }}
              className="w-full h-full flex flex-col justify-between text-left"
            >
              {/* Back Header */}
              <header className="pb-4 border-b border-forest-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-hh-pink uppercase">
                    EVENT ATTENDANCE & CHECK-IN
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-cream-50">
                    Hacker House Goa 2026
                  </h2>
                </div>
                <ShieldCheck className="w-8 h-8 text-hh-yellow" />
              </header>

              {/* Back Content Body */}
              <div className="my-auto space-y-4 py-4 text-xs font-mono text-cream-200">
                <div className="p-4 rounded-2xl bg-forest-900/80 border border-forest-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-hh-yellow font-bold uppercase">BUILDER ID:</span>
                    <span className="text-cream-50 font-bold">{payload.builderNumber}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-hh-yellow font-bold uppercase">BUILDER NAME:</span>
                    <span className="text-cream-50">{payload.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-hh-yellow font-bold uppercase">TRACK SPEC:</span>
                    <span className="text-cream-50">{preset.label}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-hh-yellow font-bold uppercase">JOURNEY STAGE:</span>
                    <span className="text-emerald-400 font-bold">OPEN TRIAL</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-forest-950 border border-forest-800 text-[10px] font-mono text-cream-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-hh-pink font-bold">
                    <Key className="w-3.5 h-3.5" />
                    <span>EMBEDDED QR PAYLOAD SPEC (JSON v1.0)</span>
                  </div>
                  <p className="break-all opacity-90 text-[9px] font-mono text-cream-400">
                    {versionedJsonPayload}
                  </p>
                </div>
              </div>

              {/* Back Footer */}
              <footer className="pt-4 border-t border-forest-800 flex items-center justify-between text-[10px] font-mono text-cream-400">
                <span>GOA, INDIA · 28–31 OCT 2026</span>
                <span className="text-hh-yellow font-bold">247 BUILDERS · ONE COMMUNITY</span>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
