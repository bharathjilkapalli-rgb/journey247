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
    <div className="relative flex flex-col items-center select-none w-full max-w-[270px]">
      {/* Brass Clip Accent */}
      <div className="absolute -top-4 left-8 z-30 opacity-95 pointer-events-none">
        <Paperclip className="w-8 h-8 text-[#073B2A] transform rotate-45 stroke-[2.5]" />
      </div>

      {/* Tilted Rubber Stamp Label above Polaroid */}
      <div
        className="absolute -top-3 right-2 z-20 px-2.5 py-0.5 border-2 border-[#C4364E] bg-[#F6EDDC] text-[#C4364E] font-mono text-[8px] font-black tracking-wider uppercase transform rotate-6 shadow-xs pointer-events-none"
      >
        BUILT IN GOA · SHIPPED TO IMPACT
      </div>

      {/* Pink Offset Frame Layer */}
      <div className="absolute inset-0 rounded-2xl bg-[#E52E73] transform translate-x-1.5 translate-y-1.5 rotate-2 opacity-75 z-0" />

      {/* Main Polaroid Photo Card Container */}
      <div className="relative z-10 w-full p-3.5 bg-[#FFFDF8] rounded-2xl shadow-xl border-2 border-[#073B2A] transform -rotate-1 transition-transform hover:rotate-0 duration-300">
        {/* Top-Right Taped Corner */}
        <div className="absolute -top-2.5 -right-2.5 w-12 h-5 bg-[#F4C430]/70 border border-[#F4C430] transform rotate-12 z-20 pointer-events-none shadow-xs" />
        <div className="absolute -top-2.5 -left-2.5 w-9 h-4 bg-[#F4C430]/50 border border-[#F4C430]/70 transform -rotate-6 z-20 pointer-events-none" />

        {/* Photo Box Container */}
        <div className="relative w-full h-56 sm:h-64 bg-[#073B2A] rounded-xl border-2 border-[#073B2A] overflow-hidden shadow-inner flex items-center justify-center">
          {selfieUrl ? (
            /* eslint-disable-next-html-image-element */
            <img
              src={selfieUrl}
              alt={name}
              className={`w-full h-full object-cover ${filterClasses[photoFilter] || ""}`}
            />
          ) : (
            <div className="w-full h-full bg-[#162E25] flex flex-col items-center justify-center p-3 text-center text-[#F5E6C8]">
              <div className="w-14 h-14 rounded-full bg-[#073B2A] border border-[#F4C430]/40 flex items-center justify-center mb-2">
                <span className="font-serif text-2xl font-black text-[#F4C430]">
                  {name.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-[#F4C430]">
                PHOTOGRAPH VERIFIED
              </span>
            </div>
          )}

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Signature & Fingerprint Bottom Banner */}
        <div className="mt-2.5 flex items-center justify-between px-1 pt-1">
          <span className="font-signature font-bold text-xl sm:text-2xl text-[#073B2A] tracking-wide whitespace-nowrap overflow-hidden text-ellipsis max-w-[170px]">
            {name}
          </span>
          <Fingerprint className="w-5 h-5 text-[#E52E73] shrink-0" />
        </div>
      </div>

      {/* Circular VERIFIED HH BUILDER Silver Rubber Stamp */}
      <div className="absolute -bottom-4 -left-4 z-20 w-18 h-18 rounded-full border-2 border-dashed border-[#6B7280] flex flex-col items-center justify-center text-center bg-[#F6EDDC]/95 backdrop-blur-xs transform -rotate-12 opacity-90 shadow-md pointer-events-none p-1">
        <span className="text-[7px] font-mono font-black text-[#6B7280] tracking-tighter uppercase leading-tight">
          VERIFIED
        </span>
        <span className="text-xs font-mono font-black text-[#374151] leading-none my-0.5">HH</span>
        <span className="text-[7px] font-mono font-black text-[#6B7280] tracking-tighter uppercase leading-tight">
          BUILDER
        </span>
      </div>
    </div>
  );
};
