"use client";

import React from "react";
import { Plane, QrCode } from "lucide-react";
import { DynamicQRCode } from "../ui/DynamicQRCode";

interface TravelDetailsProps {
  versionedJsonPayload: string;
  builderNumber: string;
  onQrHover?: (isHovered: boolean) => void;
}

export const TravelDetails: React.FC<TravelDetailsProps> = ({
  versionedJsonPayload,
  builderNumber,
  onQrHover,
}) => {
  return (
    <div className="flex flex-col items-center select-none w-full max-w-[220px]">
      {/* Hanging Twine Loop SVG */}
      <svg width="32" height="26" viewBox="0 0 32 26" className="opacity-80 mb-0" aria-hidden="true">
        <path d="M12 0 Q10 8 11 14 Q11.5 20 12 26" stroke="#8B6914" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <path d="M20 0 Q22 8 21 14 Q20.5 20 20 26" stroke="#8B6914" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <path d="M10 13 Q16 11 22 13" stroke="#6B4F10" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Boarding Pass Luggage Tag Card */}
      <div
        className="tag-sway relative w-full bg-[#F9EDD5] rounded-2xl border-2 border-[#073B2A] shadow-xl flex flex-col justify-between text-[#073B2A] font-mono overflow-hidden"
        style={{ boxShadow: "3px 4px 18px rgba(7,59,42,0.18)" }}
      >
        {/* Top Brass Eyelet Ring */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#073B2A] border-2 border-[#F4C430] flex items-center justify-center z-20 shadow-md">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F9EDD5]" />
        </div>

        {/* Boarding Pass Header Banner */}
        <div className="bg-[#E52E73] text-[#FFFDF8] text-center text-[10px] font-black tracking-[0.2em] uppercase py-1.5 mt-2">
          BOARDING PASS
        </div>

        <div className="px-3.5 py-3 flex flex-col gap-2">
          {/* Destination */}
          <div className="text-center pb-2 border-b border-dashed border-[#073B2A]/25">
            <div className="text-[8px] font-black text-[#073B2A]/70 tracking-widest uppercase">
              DESTINATION
            </div>
            <div className="flex items-center justify-center gap-1.5 font-serif text-3xl font-black text-[#073B2A] tracking-tight leading-none mt-1">
              <span>GOA</span>
              <Plane className="w-5 h-5 text-[#E52E73] transform rotate-45 stroke-[2.5] -mt-1" />
            </div>
          </div>

          {/* Flight & Seat */}
          <div className="grid grid-cols-2 gap-1 pb-2 border-b border-dashed border-[#073B2A]/25 text-center">
            <div>
              <span className="text-[7px] text-[#073B2A]/70 font-bold uppercase block">FLIGHT</span>
              <span className="font-black text-[#E52E73] text-xs">HH247</span>
            </div>
            <div>
              <span className="text-[7px] text-[#073B2A]/70 font-bold uppercase block">SEAT</span>
              <span className="font-black text-[#073B2A] text-xs">B19</span>
            </div>
          </div>

          {/* Boarding Time & Gate */}
          <div className="grid grid-cols-2 gap-1 pb-2 border-b border-dashed border-[#073B2A]/25 text-center">
            <div>
              <span className="text-[7px] text-[#073B2A]/70 font-bold uppercase block">BOARDING</span>
              <span className="font-black text-[#E52E73] text-[10px]">BUILD TIME</span>
            </div>
            <div>
              <span className="text-[7px] text-[#073B2A]/70 font-bold uppercase block">GATE</span>
              <span className="font-black text-[#073B2A] text-sm leading-none">∞</span>
            </div>
          </div>

          {/* Scannable Dynamic QR Code */}
          <div className="flex flex-col items-center pt-1">
            <span className="text-[8px] font-black text-[#073B2A] tracking-widest uppercase mb-1.5 flex items-center gap-1">
              <QrCode className="w-3 h-3 text-[#E52E73]" />
              <span>SCAN TO IMMIGRATE</span>
            </span>

            <div
              onMouseEnter={() => onQrHover?.(true)}
              onMouseLeave={() => onQrHover?.(false)}
              className="p-1.5 rounded-xl bg-[#FFFDF8] border border-[#073B2A] hover:border-[#E52E73] transition-colors shadow-xs cursor-pointer"
              title={`Scan to verify Builder Credential Payload [${builderNumber}]`}
            >
              <DynamicQRCode
                value={versionedJsonPayload}
                size={90}
                fgColor="#073B2A"
                bgColor="#FFFDF8"
              />
            </div>

            <div className="mt-2 w-full py-1 bg-[#073B2A] text-[#F4C430] rounded-lg text-[8px] text-center font-black tracking-widest uppercase shadow-xs">
              OFFICIAL VERIFICATION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
