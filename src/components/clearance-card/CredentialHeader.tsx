"use client";

import React from "react";
import { Palmtree, Sparkles } from "lucide-react";

interface CredentialHeaderProps {
  builderNumber: string;
}

export const CredentialHeader: React.FC<CredentialHeaderProps> = ({ builderNumber }) => {
  return (
    <header className="relative w-full pb-5 mb-5 border-b-2 border-dashed border-[#073B2A]/20 flex flex-col md:flex-row items-center justify-between gap-4 select-none">
      {/* Top Left Branding */}
      <div className="flex items-center gap-4 text-left">
        {/* Emblem Seal Icon */}
        <div className="w-14 h-14 rounded-2xl bg-[#073B2A] text-[#F4C430] border-2 border-[#E52E73] shadow-md flex items-center justify-center shrink-0 transform -rotate-3">
          <Palmtree className="w-7 h-7 text-[#E52E73]" />
        </div>

        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#E52E73] uppercase">
            <span>✦ HACKER HOUSE GOA 2026 ✦</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#073B2A] tracking-tight leading-none mt-1 drop-shadow-xs">
            ROAD TO 247
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-0.5 w-8 bg-[#E52E73]" />
            <span className="font-mono text-xs font-extrabold text-[#073B2A] uppercase tracking-widest">
              OFFICIAL BUILDER CREDENTIAL
            </span>
          </div>
        </div>
      </div>

      {/* Top Right Vintage Travel Stamp Postmark */}
      <div className="flex items-center gap-4">
        {/* Circular Ink Postmark */}
        <div className="relative w-20 h-20 rounded-full border-2 border-dashed border-[#E52E73] flex flex-col items-center justify-center text-center rotate-6 shrink-0 bg-[#E52E73]/5 shadow-xs">
          <span className="text-[8px] font-mono font-black text-[#E52E73] tracking-tighter uppercase">
            HACKER HOUSE
          </span>
          <Palmtree className="w-4 h-4 text-[#073B2A] my-0.5" />
          <span className="text-[9px] font-mono font-black text-[#073B2A]">GOA 2026</span>
        </div>

        {/* Builder Badge Pill */}
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-[9px] font-mono font-extrabold text-[#073B2A]/70 uppercase tracking-widest">
            CREDENTIAL NO.
          </span>
          <div className="px-4 py-1.5 rounded-xl bg-[#073B2A] text-[#F4C430] border-2 border-[#F4C430] font-mono text-sm font-black tracking-wider shadow-md">
            {builderNumber}
          </div>
        </div>
      </div>
    </header>
  );
};
