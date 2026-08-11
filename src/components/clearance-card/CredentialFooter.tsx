"use client";

import React from "react";
import { Heart, Sparkles } from "lucide-react";

export const CredentialFooter: React.FC = () => {
  return (
    <div className="w-full pt-4 mt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#073B2A] border-t-2 border-[#073B2A]/20 select-none">
      {/* Footer Tagline Motto */}
      <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-black text-[#073B2A]">
        <span>CODE</span>
        <span className="text-[#E52E73]">·</span>
        <span>CREATE</span>
        <span className="text-[#E52E73]">·</span>
        <span>ESCAPE</span>
        <span className="text-[#E52E73]">·</span>
        <span className="text-[#E52E73]">REPEAT</span>
      </div>

      {/* Collectible Badge Note */}
      <div className="flex items-center gap-2 text-[10px] font-bold text-[#073B2A]/80">
        <Sparkles className="w-3.5 h-3.5 text-[#F4C430]" />
        <span>COLLECTIBLE BUILDER CREDENTIAL</span>
        <Heart className="w-3.5 h-3.5 text-[#E52E73] fill-[#E52E73]" />
      </div>
    </div>
  );
};
