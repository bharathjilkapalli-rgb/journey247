"use client";

import React from "react";
import { User, Code, MapPin, Calendar, Star, Quote } from "lucide-react";
import { BuilderPayload } from "@/lib/types";
import { STACK_PRESETS } from "@/lib/stack-presets";

interface BuilderIdentityProps {
  payload: BuilderPayload;
}

export const BuilderIdentity: React.FC<BuilderIdentityProps> = ({ payload }) => {
  const preset = STACK_PRESETS[payload.stack];

  return (
    <div className="flex flex-col justify-between space-y-4 text-[#073B2A] font-mono select-none">
      {/* Prominent Builder Name */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-[#E52E73] font-extrabold tracking-widest uppercase">
          <User className="w-4 h-4 text-[#E52E73]" />
          <span>BUILDER IDENTITY</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-black tracking-tight leading-none mt-1">
          <span className="text-[#073B2A] block">{payload.name.split(" ")[0] || payload.name}</span>
          <span className="text-[#E52E73] block">{payload.name.split(" ").slice(1).join(" ")}</span>
        </h2>
      </div>

      {/* Track & Class */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-1 text-[10px] text-[#073B2A]/70 font-bold tracking-widest uppercase">
            <Code className="w-3 h-3 text-[#073B2A]" />
            <span>TRACK</span>
          </div>
          <div className="text-sm font-extrabold text-[#073B2A] uppercase tracking-wider mt-0.5">
            {preset.label}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 text-[10px] text-[#073B2A]/70 font-bold tracking-widest uppercase">
            <Star className="w-3 h-3 text-[#F4C430]" />
            <span>CLASS</span>
          </div>
          <div className="text-xs font-black text-[#E52E73] uppercase tracking-wider mt-0.5">
            {preset.builderType}
          </div>
        </div>
      </div>

      {/* Builder ID, Location & Dates Grid */}
      <div className="p-3.5 rounded-xl bg-[#073B2A]/5 border-2 border-[#073B2A]/20 grid grid-cols-2 gap-3 text-xs">
        <div>
          <span className="text-[9px] text-[#E52E73] font-black tracking-widest uppercase block">BUILDER ID</span>
          <span className="font-black text-[#073B2A] text-sm tracking-wider">{payload.builderNumber}</span>
        </div>

        <div>
          <span className="text-[9px] text-[#073B2A]/70 font-bold tracking-widest uppercase block">LOCATION</span>
          <span className="font-bold text-[#073B2A] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#E52E73]" />
            <span>GOA, INDIA</span>
          </span>
        </div>

        <div>
          <span className="text-[9px] text-[#073B2A]/70 font-bold tracking-widest uppercase block">EVENT DATES</span>
          <span className="font-bold text-[#073B2A]">28–31 OCT 2026</span>
        </div>

        <div>
          <span className="text-[9px] text-[#073B2A]/70 font-bold tracking-widest uppercase block">ISSUED</span>
          <span className="font-bold text-[#073B2A] flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#F4C430]" />
            <span>{payload.issueDate}</span>
          </span>
        </div>
      </div>

      {/* Builder Principle Motto with Illustrated Pink Underline */}
      <div className="pt-2 border-t-2 border-dashed border-[#073B2A]/20">
        <div className="flex items-center gap-1.5 text-[10px] text-[#E52E73] font-extrabold tracking-widest uppercase">
          <Quote className="w-3.5 h-3.5 text-[#E52E73]" />
          <span>BUILDER PRINCIPLE</span>
        </div>
        <p className="font-serif italic text-base sm:text-lg font-extrabold text-[#073B2A] mt-1 leading-snug">
          &ldquo;{payload.principle || preset.principle}&rdquo;
        </p>
        <div className="w-28 h-1 bg-[#E52E73] rounded-full mt-1.5 shadow-xs" />
      </div>
    </div>
  );
};
