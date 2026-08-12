"use client";

import React from "react";
import { Lightbulb, Code, Hammer, Users, PresentationIcon, Flag, Waves } from "lucide-react";

export const CredentialStamp: React.FC = () => {
  const journeySteps = [
    { icon: Lightbulb, label: "IDEA", color: "#F4C430" },
    { icon: Code, label: "CODE", color: "#073B2A" },
    { icon: Hammer, label: "BUILD", color: "#E52E73" },
    { icon: Users, label: "PARTNER", color: "#073B2A" },
    { icon: PresentationIcon, label: "DEMO", color: "#073B2A" },
    { icon: Flag, label: "247", color: "#E52E73" },
  ];

  return (
    <div className="w-full pt-3 border-t border-dashed border-[#073B2A]/20 flex flex-col gap-4 select-none font-mono">
      {/* ── Builder Journey Dotted Progression Line ── */}
      <div className="flex flex-col gap-1">
        <div className="text-[9px] font-black text-[#073B2A]/60 tracking-widest uppercase mb-1 flex items-center gap-1">
          <span className="text-[#E52E73]">+</span>
          <span>BUILDER JOURNEY</span>
        </div>

        <div className="relative flex items-center justify-between px-2">
          {/* Connector Dotted Line */}
          <div className="absolute left-6 right-6 top-3 border-t-2 border-dashed border-[#E52E73]/50 pointer-events-none" />

          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === journeySteps.length - 1;
            return (
              <div key={step.label} className="relative flex flex-col items-center gap-1 z-10">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center border-2 shadow-xs"
                  style={{
                    backgroundColor: isLast ? "#E52E73" : "#FFFDF8",
                    borderColor: isLast ? "#E52E73" : step.color,
                  }}
                >
                  <Icon
                    className="w-3 h-3"
                    style={{ color: isLast ? "#FFFDF8" : step.color }}
                  />
                </div>
                <span
                  className="text-[8px] font-black tracking-wide uppercase"
                  style={{ color: isLast ? "#E52E73" : "#073B2A" }}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Immigration Stamp & Coordinates ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
        {/* GOA ENTRY Immigration Box Stamp */}
        <div className="px-3.5 py-1.5 rounded-xl border-2 border-dashed border-[#073B2A] bg-[#4C9A91]/15 text-center transform rotate-1 shrink-0">
          <div className="text-[8px] font-black text-[#073B2A] tracking-widest uppercase">
            IMMIGRATION
          </div>
          <div className="font-serif text-lg font-black text-[#E52E73] tracking-wider leading-none my-0.5">
            GOA ENTRY
          </div>
          <div className="text-[8px] font-black text-[#073B2A] tracking-tight">
            ARRIVED 28 OCT 2026
          </div>
        </div>

        {/* Geographic Coordinates & Tagline */}
        <div className="text-center sm:text-right text-[10px] text-[#073B2A]/70 font-bold">
          <div>15.2993° N, 74.1240° E</div>
          <div className="flex items-center justify-center sm:justify-end gap-1 text-[#E52E73] font-black italic mt-0.5">
            <span>find your waves</span>
            <Waves className="w-3.5 h-3.5 text-[#073B2A]" />
          </div>
        </div>
      </div>
    </div>
  );
};
