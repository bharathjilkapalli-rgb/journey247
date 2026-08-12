"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BuilderPayload } from "@/lib/types";
import { STACK_PRESETS } from "@/lib/stack-presets";
import { generateVersionedJSONPayload } from "@/lib/qr";
import { CredentialHeader } from "./CredentialHeader";
import { BuilderPortrait } from "./BuilderPortrait";
import { BuilderIdentity } from "./BuilderIdentity";
import { TravelDetails } from "./TravelDetails";
import { CredentialStamp } from "./CredentialStamp";
import { CredentialFooter } from "./CredentialFooter";
import { BorderBeam } from "../ui/BorderBeam";
import { RotateCw, ShieldCheck, Key, Palmtree, Compass } from "lucide-react";

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

  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringChild, setIsHoveringChild] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)");
    const handleMouseMove = (e: MouseEvent) => {
      if (mediaQuery.matches || isHoveringChild || isFlipped) return;
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 4,
        y: (e.clientY / window.innerHeight - 0.5) * 4,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHoveringChild, isFlipped]);

  const versionedJsonPayload = generateVersionedJSONPayload(
    payload.builderNumber,
    payload.name,
    payload.stack.toUpperCase(),
    preset.builderType,
    payload.isoTimestamp || new Date().toISOString()
  );

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto select-none">
      {/* View Toggle Button */}
      <div className="mb-3 flex items-center justify-center z-30">
        <button
          type="button"
          onClick={() => setIsFlipped(!isFlipped)}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#073B2A] border-2 border-[#F4C430] text-[#F4C430] hover:text-white hover:border-[#E52E73] text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-lg cursor-pointer"
        >
          <RotateCw className="w-4 h-4 text-[#E52E73]" />
          <span>{isFlipped ? "View Passport Front" : "View Passport Back"}</span>
        </button>
      </div>

      {/* Main Builder Passport Container — Pure HTML/CSS Vintage Design */}
      <motion.div
        ref={cardRef}
        id="clearance-card-container"
        initial={{ y: 30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          x: isHoveringChild || isFlipped ? 0 : mousePos.x,
          rotateY: isHoveringChild ? 0 : isFlipped ? 180 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative w-full rounded-2xl border-4 border-[#073B2A] shadow-2xl overflow-hidden bg-[#F6EDDC] paper-texture"
      >
        <BorderBeam size={240} duration={10} colorFrom="#E52E73" colorTo="#F4C430" />

        {/* Coffee Ring Stain Accent Marks */}
        <div className="coffee-ring opacity-40 pointer-events-none" style={{ width: 75, height: 75, top: 40, left: 70 }} aria-hidden="true" />
        <div className="coffee-ring opacity-30 pointer-events-none" style={{ width: 50, height: 50, bottom: 45, left: "42%" }} aria-hidden="true" />

        {/* Subtle Vignette Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(90,60,20,0.06) 100%)" }}
          aria-hidden="true"
        />

        <AnimatePresence mode="wait">
          {!isFlipped ? (
            /* ================= FRONT SIDE: BUILDER PASSPORT ================= */
            <motion.div
              key="front"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col md:flex-row relative z-10"
            >
              {/* Left Green Leather Spine Margin */}
              <div className="w-full md:w-14 bg-[#073B2A] text-[#F4C430] p-3 md:py-6 flex flex-row md:flex-col items-center justify-between border-b md:border-b-0 md:border-r-2 border-[#073B2A] shrink-0">
                {/* Top Brass Eyelet Ring & Emblem */}
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-[#F4C430] border-2 border-[#073B2A] shadow-inner flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#073B2A]" />
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#0B4F32] border border-[#F4C430]/40 flex items-center justify-center shadow-xs">
                    <Palmtree className="w-5 h-5 text-[#F4C430]" />
                  </div>
                  <span className="text-[6px] font-mono font-black text-[#F5E6C8] tracking-tighter leading-tight uppercase hidden md:block">
                    HACKER<br />HOUSE<br />GOA
                  </span>
                </div>

                {/* Vertical Tagline */}
                <div
                  className="md:[writing-mode:vertical-lr] md:rotate-180 font-mono text-[9px] font-black tracking-[0.22em] text-[#F5E6C8] uppercase my-auto"
                >
                  CODE · CREATE · ESCAPE · REPEAT.
                </div>

                {/* Bottom Compass Emblem */}
                <Compass className="w-5 h-5 text-[#F4C430]/80 hidden md:block" />
              </div>

              {/* Main Passport Content Body */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-5 bg-transparent">
                {/* 1. Header */}
                <CredentialHeader builderNumber={payload.builderNumber} />

                {/* 2. Middle Row (Portrait, Identity, Travel Details) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                  {/* Photo Column (4 cols) */}
                  <div className="md:col-span-4 flex justify-center">
                    <BuilderPortrait
                      selfieUrl={payload.selfieUrl}
                      name={payload.name}
                      photoFilter={payload.photoFilter}
                      builderNumber={payload.builderNumber}
                    />
                  </div>

                  {/* Identity Column (4 cols) */}
                  <div className="md:col-span-4 px-1">
                    <BuilderIdentity payload={payload} />
                  </div>

                  {/* Travel Details Column (4 cols) */}
                  <div className="md:col-span-4 flex justify-center">
                    <TravelDetails
                      versionedJsonPayload={versionedJsonPayload}
                      builderNumber={payload.builderNumber}
                      onQrHover={onQrHover}
                    />
                  </div>
                </div>

                {/* 3. Bottom Journey & Footer */}
                <CredentialStamp />
                <CredentialFooter />
              </div>
            </motion.div>
          ) : (
            /* ================= BACK SIDE: SPECIFICATION ================= */
            <motion.div
              key="back"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ transform: "scaleX(-1)" }}
              className="w-full p-8 flex flex-col justify-between text-left min-h-[480px] bg-[#F6EDDC] relative z-10"
            >
              <header className="pb-4 border-b-2 border-[#073B2A]/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#E52E73] font-black uppercase">
                    OFFICIAL EVENT ATTENDANCE & IMMIGRATION SPEC
                  </span>
                  <h2 className="font-serif text-3xl font-black text-[#073B2A] mt-1">
                    Hacker House Goa 2026
                  </h2>
                </div>
                <ShieldCheck className="w-10 h-10 text-[#E52E73]" />
              </header>

              <div className="my-auto space-y-4 py-4 text-xs font-mono text-[#073B2A]">
                <div className="p-5 rounded-2xl bg-[#FFFDF8] border-2 border-[#073B2A] space-y-3 shadow-md">
                  {[
                    ["BUILDER PASSPORT ID:", payload.builderNumber],
                    ["BUILDER NAME:", payload.name],
                    ["TRACK SPECIFICATION:", preset.label],
                    ["IMMIGRATION STATUS:", "CLEARANCE GRANTED"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-[#E52E73] font-black uppercase">{label}</span>
                      <span className="text-[#073B2A] font-black text-sm">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#073B2A] text-xs font-mono text-[#F5E6C8] space-y-1.5 shadow-md">
                  <div className="flex items-center gap-1.5 text-[#E52E73] font-black">
                    <Key className="w-4 h-4" />
                    <span>EMBEDDED JSON QR PAYLOAD (v1.0)</span>
                  </div>
                  <p className="break-all opacity-90 text-[10px] text-[#F4C430] font-mono">
                    {versionedJsonPayload}
                  </p>
                </div>
              </div>

              <footer className="pt-4 border-t-2 border-[#073B2A]/30 flex items-center justify-between text-xs font-mono text-[#073B2A] font-black">
                <span>GOA, INDIA · 28–31 OCT 2026</span>
                <span className="text-[#E52E73] uppercase">247 BUILDERS · ONE COMMUNITY</span>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
