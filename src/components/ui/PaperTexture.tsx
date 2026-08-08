"use client";

import React from "react";

export const PaperTexture: React.FC<{ opacity?: number }> = ({ opacity = 0.04 }) => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg className="w-full h-full">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
};
