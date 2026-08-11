"use client";

import React from "react";
import { VerificationTerminal } from "@/components/terminal/VerificationTerminal";
import { AmbientDust } from "@/components/ui/AmbientDust";
import { FloatingPalms } from "@/components/ui/FloatingPalms";
import { PaperTexture } from "@/components/ui/PaperTexture";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-forest-950 text-cream-50 overflow-x-hidden selection:bg-hh-pink selection:text-white">
      {/* Background Visual Layers */}
      <PaperTexture opacity={0.04} />
      <AmbientDust />
      <FloatingPalms />

      {/* Main Terminal Orchestrator */}
      <div className="relative z-20">
        <VerificationTerminal />
      </div>
    </main>
  );
}
