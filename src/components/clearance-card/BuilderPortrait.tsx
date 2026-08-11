"use client";

import React from "react";
import { Fingerprint, Paperclip } from "lucide-react";

interface BuilderPortraitProps {
  selfieUrl: string | null;
  name: string;
  photoFilter: "warm" | "emerald" | "noir" | "sunset";
  builderNumber: string;
}

export const BuilderPortrait: React.FC<BuilderPortraitProps> = ({
  selfieUrl,
  name,
  photoFilter,
  builderNumber,
}) => {
  const filterClasses = {
    warm: "filter-warm",
    emerald: "filter-emerald",
    noir: "filter-noir",
    sunset: "filter-sunset",
  };

  return (
    <div className="relative flex flex-col items-center select-none w-full max-w-[280px]">
      {/* Brass Clip Accent */}
      <div className="absolute -top-4 left-10 z-30 opacity-95 pointer-events-none">
        <Paperclip className="w-9 h-9 text-[#073B2A] transform rotate-45 stroke-[2.5]" />
      </div>

      {/* Off-Set Pink Underlay Frame */}
      <div className="absolute inset-0 rounded-2xl bg-[#E52E73] transform translate-x-2 translate-y-2 rotate-2 opacity-80 z-0" />

      {/* Large Taped Polaroid Photo Card Frame */}
      <div className="relative z-10 w-full p-4 bg-[#FFFDF8] rounded-2xl shadow-2xl border-2 border-[#073B2A] transform -rotate-1 transition-transform hover:rotate-0 duration-300">
        {/* Top-Right Taped Corner */}
        <div className="absolute -top-3 -right-3 w-14 h-6 bg-[#F4C430]/70 border border-[#F4C430] transform rotate-12 backdrop-blur-xs shadow-xs z-20 pointer-events-none" />

        {/* Large Photo Frame Container */}
        <div className="relative w-full h-64 sm:h-72 bg-[#073B2A] rounded-xl border-2 border-[#073B2A] overflow-hidden shadow-inner">
          {selfieUrl ? (
            /* eslint-disable-next-html-image-element */
            <img
              src={selfieUrl}
              alt={name}
              className={`w-full h-full object-cover ${filterClasses[photoFilter]}`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#F5E6C8] font-mono text-sm">
              NO PHOTO
            </div>
          )}
          {/* Subtle Vintage Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Signature & Fingerprint Bottom Banner */}
        <div className="mt-3 flex items-center justify-between px-1 pt-1">
          <span className="font-serif italic text-xl font-black text-[#073B2A] tracking-wide">
            {name}
          </span>
          <Fingerprint className="w-6 h-6 text-[#E52E73]" />
        </div>
      </div>

      {/* Circular VERIFIED HH BUILDER Rubber Stamp */}
      <div className="absolute -bottom-6 -left-4 z-20 w-20 h-20 rounded-full border-3 border-dashed border-[#E52E73] flex flex-col items-center justify-center text-center bg-[#F5E6C8]/90 backdrop-blur-xs transform -rotate-12 opacity-95 shadow-md pointer-events-none">
        <span className="text-[8px] font-mono font-black text-[#E52E73] tracking-tighter uppercase">
          VERIFIED
        </span>
        <span className="text-xs font-mono font-black text-[#073B2A]">HH</span>
        <span className="text-[8px] font-mono font-black text-[#E52E73] tracking-tighter uppercase">
          BUILDER
        </span>
      </div>
    </div>
  );
};
