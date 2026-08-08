"use client";

import React from "react";
import { motion } from "framer-motion";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className = "",
  size = 150,
  duration = 8,
  borderWidth = 1.5,
  colorFrom = "#FF007F",
  colorTo = "#FACC15",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <motion.div
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute aspect-square opacity-80"
        style={{
          width: `${size}px`,
          offsetPath: `rect(0 100% 100% 0 round ${borderWidth}px)`,
          background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
        }}
      />
    </div>
  );
};
