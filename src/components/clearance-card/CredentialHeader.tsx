"use client";

import React from "react";
import { Palmtree, Sparkles } from "lucide-react";

interface CredentialHeaderProps {
  builderNumber: string;
}

export const CredentialHeader: React.FC<CredentialHeaderProps> = ({ builderNumber }) => {
  return (
    <header className="relative w-full pb-4 mb-1 border-b-2 border-dashed border-[#073B2A]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 select-none">
      {/* Left: Main Header Title Block */}
      <div className="flex flex-col">
        {/* Sub-label */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono font-black tracking-[0.25em] text-[#E52E73] uppercase mb-0.5">
          <span>✦—</span>
          <span>REPUBLIC OF BUILDERS</span>
          <span>—✦</span>
        </div>

        {/* Large Serif Title */}
        <h1 className="font-serif font-black text-[#073B2A] text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-xs">
          BUILDER PASSPORT
        </h1>

        {/* Tagline */}
        <div className="flex items-center gap-2 mt-1">
          <span className="h-0.5 w-6 bg-[#E52E73]" />
          <span className="font-mono text-xs font-black text-[#E52E73] tracking-widest uppercase">
            ROAD TO 247
          </span>
          <span className="h-0.5 w-6 bg-[#E52E73]" />
        </div>
      </div>

      {/* Right: Postmark, Quote & Credential Badge */}
      <div className="flex items-center gap-4 shrink-0">
        {/* Double-Ring Circular Ink Postmark Stamp */}
        <div className="relative w-20 h-20 rounded-full flex flex-col items-center justify-center text-center rotate-6 shrink-0 bg-[#E52E73]/5 border-2 border-dashed border-[#E52E73] p-1 shadow-xs pointer-events-none">
          <div className="absolute inset-[3px] rounded-full border border-[#E52E73]/40 pointer-events-none" />
          <span className="text-[7px] font-mono font-black text-[#E52E73] tracking-tight uppercase leading-tight">
            HACKER HOUSE
          </span>
          <Palmtree className="w-4 h-4 text-[#073B2A] my-0.5" />
          <span className="text-[9px] font-mono font-black text-[#073B2A]">GOA</span>
          <span className="text-[7px] font-mono font-bold text-[#E52E73]">2026</span>
        </div>

        {/* Quote Block */}
        <div className="hidden lg:flex flex-col max-w-[170px] text-left">
          <span className="text-[#073B2A] font-serif text-xl leading-none font-black">&ldquo;&ldquo;</span>
          <p className="font-serif italic text-xs font-semibold text-[#073B2A] leading-snug">
            We don&apos;t just write code, we build what matters.
          </p>
          <div className="flex items-center gap-1 mt-1">
            <Sparkles className="w-3 h-3 text-[#F4C430]" />
            <span className="font-mono text-[8px] font-black text-[#073B2A]/60 tracking-widest uppercase">
              Hacker House 2026
            </span>
          </div>
        </div>

        {/* Credential Number Badge */}
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-[8px] font-mono font-extrabold text-[#073B2A]/70 uppercase tracking-widest">
            CREDENTIAL NO.
          </span>
          <div className="px-3.5 py-1 rounded-xl bg-[#073B2A] text-[#F4C430] border-2 border-[#F4C430] font-mono text-xs font-black tracking-wider shadow-md mt-0.5">
            {builderNumber}
          </div>
        </div>
      </div>
    </header>
  );
};
