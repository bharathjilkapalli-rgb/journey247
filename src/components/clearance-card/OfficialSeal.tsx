"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Compass } from "lucide-react";

interface OfficialSealProps {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export const OfficialSeal: React.FC<OfficialSealProps> = ({ onClick, size = "md" }) => {
  const [foilAngle, setFoilAngle] = useState(135);

  // SECTION 6: Shift metallic foil reflection as cursor moves while keeping seal stationary
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xRatio = e.clientX / window.innerWidth;
      const yRatio = e.clientY / window.innerHeight;
      const angle = Math.floor(45 + xRatio * 180 + yRatio * 90);
      setFoilAngle(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const sizeClasses = {
    sm: "w-20 h-20 text-[9px]",
    md: "w-28 h-28 text-[10px]",
    lg: "w-36 h-36 text-[11px]",
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`relative rounded-full p-1 border-2 border-yellow-300/90 shadow-2xl cursor-pointer select-none group focus:outline-none transition-transform ${sizeClasses[size]}`}
      style={{
        background: `linear-gradient(${foilAngle}deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)`,
      }}
      title="Tap Official Seal for manifesto"
    >
      {/* Outer Metallic Gold Embossed Ring */}
      <div className="w-full h-full rounded-full bg-forest-950 border-2 border-yellow-400/60 p-2 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner">
        {/* Dynamic Metallic Light Sweep Reflection */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-150"
          style={{
            background: `linear-gradient(${foilAngle + 45}deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 70%)`,
          }}
        />

        {/* Circular Curved Text Header */}
        <div className="text-[9px] font-mono tracking-widest text-hh-yellow font-bold uppercase leading-none">
          HACKER HOUSE GOA
        </div>

        {/* Central Icon */}
        <div className="my-1 p-1.5 rounded-full bg-gradient-to-r from-hh-pink to-pink-600 text-white shadow-pink-glow">
          <Award className="w-4 h-4" />
        </div>

        {/* Status Tag */}
        <div className="text-[8px] font-mono tracking-widest text-cream-100 uppercase font-extrabold flex items-center gap-0.5">
          <Compass className="w-3 h-3 text-hh-yellow" />
          <span>JOURNEY PASS</span>
        </div>

        <div className="text-[7px] font-mono text-hh-yellow/80 tracking-tighter mt-0.5">
          2026 EDITION
        </div>
      </div>
    </motion.button>
  );
};
