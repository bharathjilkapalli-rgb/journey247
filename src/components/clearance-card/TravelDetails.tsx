"use client";

import React from "react";
import { Plane, QrCode, Ticket } from "lucide-react";
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
    <div className="relative w-full max-w-[260px] bg-[#F4C430] rounded-2xl p-4 border-3 border-[#073B2A] shadow-2xl flex flex-col justify-between text-[#073B2A] font-mono select-none transform rotate-1 transition-transform hover:rotate-0 duration-300">
      {/* Top Tag Brass Eyelet Ring */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#073B2A] border-2 border-[#F4C430] flex items-center justify-center z-20 shadow-md">
        <div className="w-3 h-3 rounded-full bg-[#F5E6C8]" />
      </div>

      {/* Ticket Header Banner */}
      <div className="bg-[#E52E73] text-[#FFFDF8] px-3 py-1.5 rounded-lg text-center text-xs font-black tracking-widest uppercase mb-3 shadow-sm flex items-center justify-center gap-1.5">
        <Ticket className="w-4 h-4 text-[#F4C430]" />
        <span>BOARDING PASS</span>
      </div>

      {/* Destination & Flight Info */}
      <div className="space-y-2 text-center pb-3 border-b-2 border-dashed border-[#073B2A]/30">
        <div className="text-[10px] font-black text-[#073B2A]/80 tracking-widest uppercase">
          DESTINATION
        </div>
        <div className="flex items-center justify-center gap-2 font-serif text-3xl font-black text-[#073B2A] tracking-tight">
          <span>GOA</span>
          <Plane className="w-6 h-6 text-[#E52E73] transform rotate-45 stroke-[2.5]" />
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
          <div>
            <span className="text-[8px] text-[#073B2A]/80 font-bold uppercase block">FLIGHT</span>
            <span className="font-black text-[#E52E73] text-sm">HH247</span>
          </div>
          <div>
            <span className="text-[8px] text-[#073B2A]/80 font-bold uppercase block">SEAT</span>
            <span className="font-black text-[#073B2A] text-sm">B19</span>
          </div>
        </div>
      </div>

      {/* Scannable Structured JSON QR Code Section */}
      <div className="pt-3 flex flex-col items-center">
        <span className="text-[9px] font-black text-[#073B2A] tracking-widest uppercase mb-1.5 flex items-center gap-1">
          <QrCode className="w-3.5 h-3.5 text-[#E52E73]" />
          <span>BUILDER VERIFICATION</span>
        </span>

        {/* Real QR Code Frame */}
        <div
          onMouseEnter={() => onQrHover?.(true)}
          onMouseLeave={() => onQrHover?.(false)}
          className="p-2.5 rounded-2xl bg-[#FFFDF8] border-3 border-[#073B2A] hover:border-[#E52E73] transition-colors shadow-md cursor-pointer"
          title={`Scan to verify Builder Credential Payload [${builderNumber}]`}
        >
          <DynamicQRCode
            value={versionedJsonPayload}
            size={104}
            fgColor="#073B2A"
            bgColor="#FFFDF8"
          />
        </div>

        <div className="mt-2.5 w-full py-1 bg-[#073B2A] text-[#F4C430] rounded-lg text-[9px] text-center font-black tracking-widest uppercase shadow-xs">
          SCAN TO VERIFY
        </div>
      </div>
    </div>
  );
};
