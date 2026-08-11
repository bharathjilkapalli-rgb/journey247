"use client";

import React from "react";
import { Laptop, Coffee, Terminal, Waves, Palmtree, Compass, Navigation } from "lucide-react";

export const CredentialStamp: React.FC = () => {
  return (
    <div className="w-full pt-4 border-t-2 border-dashed border-[#073B2A]/20 flex flex-col md:flex-row items-center justify-between gap-6 select-none font-mono">
      {/* Hand-Drawn Goa x Hacker Illustration Scene Clusters */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#073B2A]">
        {/* Scene Cluster 1: Palm + Surfboard */}
        <div className="flex items-center gap-2 p-2 rounded-xl bg-[#073B2A]/5 border border-[#073B2A]/15">
          <Palmtree className="w-5 h-5 text-[#073B2A]" />
          <div className="text-[10px] font-extrabold leading-tight">
            <div>GOA BEACH</div>
            <div className="text-[#E52E73]">ROAD TO 247</div>
          </div>
        </div>

        {/* Scene Cluster 2: Laptop + Coconut + Coffee */}
        <div className="flex items-center gap-2 p-2 rounded-xl bg-[#073B2A]/5 border border-[#073B2A]/15">
          <Laptop className="w-5 h-5 text-[#E52E73]" />
          <Coffee className="w-4 h-4 text-[#F4C430]" />
          <div className="text-[10px] font-extrabold leading-tight">
            <div>CTRL + COFFEE</div>
            <div className="text-[#073B2A]/70">$ git push origin goa</div>
          </div>
        </div>

        {/* Scene Cluster 3: Terminal Note */}
        <div className="flex items-center gap-2 p-2 rounded-xl bg-[#073B2A]/5 border border-[#073B2A]/15">
          <Terminal className="w-4 h-4 text-[#073B2A]" />
          <span className="text-[10px] font-bold text-[#E52E73]">
            BUILD. SHIP. REPEAT.
          </span>
        </div>
      </div>

      {/* Immigration Goa Stamp & Coordinates */}
      <div className="flex items-center gap-4">
        {/* GOA ENTRY Rectangular Green Stamp Box */}
        <div className="px-4 py-2 rounded-xl border-3 border-dashed border-[#073B2A] bg-[#4C9A91]/20 text-center transform rotate-2">
          <div className="text-[9px] font-black text-[#073B2A] tracking-widest uppercase">
            IMMIGRATION
          </div>
          <div className="font-serif text-xl font-black text-[#E52E73] tracking-wider">
            GOA ENTRY
          </div>
          <div className="text-[9px] font-black text-[#073B2A] tracking-tight">
            ARRIVED 28 OCT 2026
          </div>
        </div>

        {/* Coordinates */}
        <div className="text-right text-[10px] text-[#073B2A]/80 font-bold">
          <div>15.2993° N, 74.1240° E</div>
          <div className="flex items-center justify-end gap-1 text-[#E52E73] font-black italic">
            <span>find your waves</span>
            <Waves className="w-3.5 h-3.5 text-[#073B2A]" />
          </div>
        </div>
      </div>
    </div>
  );
};
