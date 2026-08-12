"use client";

import React from "react";
import { User, Code, Star, Calendar, Quote } from "lucide-react";
import { BuilderPayload } from "@/lib/types";
import { STACK_PRESETS } from "@/lib/stack-presets";

interface BuilderIdentityProps {
  payload: BuilderPayload;
}

export const BuilderIdentity: React.FC<BuilderIdentityProps> = ({ payload }) => {
  const preset = STACK_PRESETS[payload.stack];
  const nameParts = payload.name.trim().split(" ");
  const firstName = nameParts[0] || payload.name;
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div className="relative flex flex-col space-y-2.5 text-[#073B2A] font-mono select-none">
      {/* ── BUILDER NAME ── */}
      <div className="pb-2 border-b border-[#073B2A]/20">
        <div className="flex items-center gap-1.5 text-[9px] text-[#073B2A]/70 font-black tracking-widest uppercase mb-0.5">
          <User className="w-3 h-3 text-[#E52E73]" />
          <span>BUILDER NAME</span>
        </div>
        <h2 className="font-serif font-black text-2xl sm:text-3xl leading-tight tracking-tight mt-0.5">
          <span className="text-[#073B2A]">{firstName} </span>
          {lastName && <span className="text-[#E52E73]">{lastName}</span>}
        </h2>
      </div>

      {/* ── BUILDER CLASS ── */}
      <div className="pb-2 border-b border-[#073B2A]/20">
        <div className="flex items-center gap-1.5 text-[9px] text-[#073B2A]/70 font-black tracking-widest uppercase mb-0.5">
          <Code className="w-3 h-3 text-[#073B2A]" />
          <span>BUILDER CLASS</span>
        </div>
        <div className="text-xs sm:text-sm font-extrabold text-[#073B2A] uppercase tracking-wide">
          {preset.builderType}
        </div>
      </div>

      {/* ── TRACK ── */}
      <div className="pb-2 border-b border-[#073B2A]/20">
        <div className="flex items-center gap-1.5 text-[9px] text-[#073B2A]/70 font-black tracking-widest uppercase mb-0.5">
          <Code className="w-3 h-3 text-[#E52E73]" />
          <span>TRACK</span>
        </div>
        <div className="text-xs sm:text-sm font-extrabold text-[#073B2A] uppercase tracking-wide">
          {preset.label}
        </div>
      </div>

      {/* ── BUILDER ID ── */}
      <div className="pb-2 border-b border-[#073B2A]/20">
        <div className="flex items-center gap-1.5 text-[9px] text-[#073B2A]/70 font-black tracking-widest uppercase mb-0.5">
          <Star className="w-3 h-3 text-[#F4C430]" />
          <span>BUILDER ID</span>
        </div>
        <div className="text-xs sm:text-sm font-black text-[#E52E73] tracking-widest">
          {payload.builderNumber}
        </div>
      </div>

      {/* ── ISSUED ON ── */}
      <div className="pb-2 border-b border-[#073B2A]/20">
        <div className="flex items-center gap-1.5 text-[9px] text-[#073B2A]/70 font-black tracking-widest uppercase mb-0.5">
          <Calendar className="w-3 h-3 text-[#073B2A]" />
          <span>ISSUED ON</span>
        </div>
        <div className="text-xs sm:text-sm font-bold text-[#073B2A]">
          {payload.issueDate}
        </div>
      </div>

      {/* ── BUILDER PRINCIPLE ── */}
      <div className="pt-1">
        <div className="flex items-center gap-1.5 text-[9px] text-[#073B2A]/70 font-black tracking-widest uppercase mb-0.5">
          <Quote className="w-3 h-3 text-[#E52E73]" />
          <span>BUILDER PRINCIPLE</span>
        </div>
        <p className="font-signature font-bold text-lg sm:text-xl text-[#073B2A] italic leading-tight mt-0.5">
          &ldquo;{payload.principle || preset.principle}&rdquo;
        </p>
      </div>
    </div>
  );
};
