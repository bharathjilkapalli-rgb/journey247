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
import { OfficialSeal } from "./OfficialSeal";
import { BorderBeam } from "../ui/BorderBeam";
import { RotateCw, ShieldCheck, Key, Palmtree } from "lucide-react";

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

  // Subconscious parallax
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

  // Structured Versioned JSON Payload for Scannable Attendance & Scanner Apps
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
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#073B2A] border-2 border-[#F4C430] text-[#F4C430] hover:text-white hover:border-[#E52E73] text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-lg cursor-pointer"
        >
          <RotateCw className="w-4 h-4 text-[#E52E73]" />
          <span>{isFlipped ? "View Passport Front" : "View Passport Back"}</span>
        </button>
      </div>

      {/* Main Collectible Builder Passport Container */}
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
        className="relative w-full max-w-5xl rounded-3xl bg-[#F5E6C8] border-4 border-[#073B2A] shadow-2xl overflow-hidden paper-texture select-none"
      >
        {/* Border Beam Glow */}
        <BorderBeam size={240} duration={10} colorFrom="#E52E73" colorTo="#F4C430" />

        <AnimatePresence mode="wait">
          {!isFlipped ? (
            /* ================= FRONT SIDE: BUILDER PASSPORT ================= */
            <motion.div
              key="front"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col md:flex-row"
            >
              {/* Left Leather Spine Margin */}
              <div className="w-full md:w-16 bg-[#073B2A] text-[#F4C430] p-4 md:py-8 flex flex-row md:flex-col items-center justify-between border-b md:border-b-0 md:border-r-3 border-[#073B2A] shrink-0">
                {/* Top Brass Eyelet Ring */}
                <div className="w-7 h-7 rounded-full bg-[#F4C430] border-2 border-[#073B2A] shadow-inner flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#073B2A]" />
                </div>

                {/* Vertical Tagline */}
                <div className="md:[writing-mode:vertical-lr] md:rotate-180 font-mono text-xs font-black tracking-[0.25em] text-[#F5E6C8] uppercase my-auto">
                  CODE · CREATE · ESCAPE · REPEAT.
                </div>

                {/* Bottom Logo Emblem */}
                <div className="w-7 h-7 rounded-full bg-[#E52E73] border-2 border-[#F4C430] shadow-inner flex items-center justify-center">
                  <Palmtree className="w-4 h-4 text-[#F4C430]" />
                </div>
              </div>

              {/* Main Credential Body */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#F5E6C8]">
                {/* Official Passport Header */}
                <CredentialHeader builderNumber={payload.builderNumber} />

                {/* Middle Content Row: Photo, Metadata & Boarding Pass QR */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Photo Section (4 Cols) */}
                  <div className="md:col-span-4 flex justify-center">
                    <BuilderPortrait
                      selfieUrl={payload.selfieUrl}
                      name={payload.name}
                      photoFilter={payload.photoFilter}
                      builderNumber={payload.builderNumber}
                    />
                  </div>

                  {/* Builder Metadata (5 Cols) */}
                  <div className="md:col-span-4 px-1">
                    <BuilderIdentity payload={payload} />
                  </div>

                  {/* Boarding Pass Luggage Tag & QR Code (4 Cols) */}
                  <div className="md:col-span-4 flex justify-center">
                    <TravelDetails
                      versionedJsonPayload={versionedJsonPayload}
                      builderNumber={payload.builderNumber}
                      onQrHover={onQrHover}
                    />
                  </div>
                </div>

                {/* Bottom Row: Immigration Stamp & Footer */}
                <CredentialStamp />
                <CredentialFooter />
              </div>
            </motion.div>
          ) : (
            /* ================= BACK SIDE: ATTENDANCE & VERIFICATION SPEC ================= */
            <motion.div
              key="back"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ transform: "scaleX(-1)" }}
              className="w-full p-8 flex flex-col justify-between text-left min-h-[520px] bg-[#F5E6C8]"
            >
              {/* Back Header */}
              <header className="pb-4 border-b-2 border-[#073B2A]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#E52E73] font-black uppercase">
                    OFFICIAL EVENT ATTENDANCE & IMMIGRATION SPEC
                  </span>
                  <h2 className="font-serif text-3xl font-black text-[#073B2A]">
                    Hacker House Goa 2026
                  </h2>
                </div>
                <ShieldCheck className="w-10 h-10 text-[#E52E73]" />
              </header>

              {/* Back Content Body */}
              <div className="my-auto space-y-4 py-4 text-xs font-mono text-[#073B2A]">
                <div className="p-5 rounded-2xl bg-[#FFFDF8] border-2 border-[#073B2A] space-y-3 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[#E52E73] font-black uppercase">BUILDER PASSPORT ID:</span>
                    <span className="text-[#073B2A] font-black text-base">{payload.builderNumber}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#E52E73] font-black uppercase">BUILDER NAME:</span>
                    <span className="text-[#073B2A] font-black">{payload.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#E52E73] font-black uppercase">TRACK SPECIFICATION:</span>
                    <span className="text-[#073B2A] font-extrabold">{preset.label}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#E52E73] font-black uppercase">IMMIGRATION STATUS:</span>
                    <span className="text-[#073B2A] font-black">CLEARANCE GRANTED</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#073B2A] border-2 border-[#073B2A] text-[10px] font-mono text-[#F5E6C8] space-y-1.5 shadow-md">
                  <div className="flex items-center gap-1.5 text-[#E52E73] font-black">
                    <Key className="w-4 h-4" />
                    <span>EMBEDDED JSON QR PAYLOAD (v1.0)</span>
                  </div>
                  <p className="break-all opacity-90 text-[9px] font-mono text-[#F4C430]">
                    {versionedJsonPayload}
                  </p>
                </div>
              </div>

              {/* Back Footer */}
              <footer className="pt-4 border-t-2 border-[#073B2A]/30 flex items-center justify-between text-[10px] font-mono text-[#073B2A] font-black">
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
