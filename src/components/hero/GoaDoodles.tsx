"use client";

import React from "react";
import { motion } from "framer-motion";

interface GoaDoodlesProps {
  mousePos: { x: number; y: number };
}

export const GoaDoodles: React.FC<GoaDoodlesProps> = ({ mousePos }) => {
  return (
    <motion.div
      animate={{
        x: mousePos.x * 1.2,
        y: mousePos.y * 1.2,
      }}
      transition={{ type: "spring", stiffness: 45, damping: 22 }}
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full text-[#FFD700] opacity-90"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ================= TOP LEFT: SUN & CLOUDS ================= */}
        <g transform="translate(50, 70)">
          <circle cx="40" cy="40" r="20" stroke="#FFD700" strokeWidth="2" strokeDasharray="3 2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1={40 + 24 * Math.cos((angle * Math.PI) / 180)}
              y1={40 + 24 * Math.sin((angle * Math.PI) / 180)}
              x2={40 + 32 * Math.cos((angle * Math.PI) / 180)}
              y2={40 + 32 * Math.sin((angle * Math.PI) / 180)}
              stroke="#FFD700"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Paper Airplane Trajectory Loop */}
        <g transform="translate(420, 60)">
          <path
            d="M -100 40 C -40 10, 0 70, 60 20 C 100 -20, 160 10, 200 0"
            stroke="#FF007F"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          <g transform="translate(200, 0) rotate(-10)">
            <path d="M 0 0 L 28 -10 L 14 24 Z" fill="#FFD700" stroke="#FAF7F2" strokeWidth="1.5" />
            <path d="M 14 -5 L 14 24" stroke="#FF007F" strokeWidth="1.5" />
          </g>
        </g>

        {/* Top Right Wooden Signboard */}
        <g transform="translate(1260, 140)">
          <path d="M0 0 L100 0 L120 22 L100 44 L0 44 Z" stroke="#FFD700" strokeWidth="2.5" fill="#0B6B3A" />
          <text x="25" y="28" fill="#FFD700" fontSize="16" fontWeight="bold" fontFamily="monospace">
            GOA <tspan fill="#FF007F">❤</tspan>
          </text>
          <line x1="50" y1="44" x2="50" y2="80" stroke="#FFD700" strokeWidth="3" />
        </g>

        {/* ================= BOTTOM LEFT: PALM TREE, SURFBOARD & UMBRELLA ================= */}
        <g transform="translate(30, 520)">
          {/* Palm Fronds */}
          <path d="M 90 270 Q 70 130, 110 10" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <circle cx="105" cy="25" r="6" fill="#FF007F" />
          <circle cx="118" cy="30" r="6" fill="#FF007F" />
          <path d="M 110 10 Q 40 -20, -10 20 M 110 10 Q 70 -50, 30 -80 M 110 10 Q 160 -60, 210 -20 M 110 10 Q 170 0, 220 40" stroke="#FFD700" strokeWidth="2" fill="none" />
        </g>

        {/* Surfboard */}
        <g transform="translate(80, 690) rotate(-15)">
          <path d="M 0 0 Q 14 -50, 28 -100 Q 42 -50, 56 0 Z" fill="#FF007F" stroke="#FFD700" strokeWidth="2" />
          <line x1="28" y1="-95" x2="28" y2="-5" stroke="#FFD700" strokeWidth="2" />
        </g>

        {/* Beach Umbrella & Chair */}
        <g transform="translate(160, 730)">
          <path d="M 0 0 C 18 -35, 72 -35, 90 0 Z" fill="#FFD700" stroke="#FF007F" strokeWidth="2" />
          <line x1="45" y1="0" x2="45" y2="70" stroke="#FAF7F2" strokeWidth="2.5" />
        </g>

        {/* ================= BOTTOM CENTER: WORKSTATION DOODLES ================= */}
        {/* Laptop with Code */}
        <g transform="translate(420, 710)">
          <rect x="0" y="0" width="130" height="80" rx="8" fill="#053B1F" stroke="#FFD700" strokeWidth="2" />
          <line x1="15" y1="20" x2="65" y2="20" stroke="#FF007F" strokeWidth="2" />
          <line x1="15" y1="35" x2="95" y2="35" stroke="#FFD700" strokeWidth="2" />
          <line x1="15" y1="50" x2="75" y2="50" stroke="#1DB979" strokeWidth="2" />
          <path d="M -10 80 L 140 80 L 130 90 L -20 90 Z" fill="#FFD700" stroke="#053B1F" strokeWidth="1" />
        </g>

        {/* Steaming Coffee Mug */}
        <g transform="translate(580, 750)">
          <rect x="0" y="0" width="30" height="35" rx="5" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2" />
          <path d="M 30 8 C 40 8, 40 25, 30 25" stroke="#FFD700" strokeWidth="2" fill="none" />
          <path d="M 8 -10 Q 15 -5, 8 0 M 20 -10 Q 27 -5, 20 0" stroke="#FF007F" strokeWidth="1.5" fill="none" />
        </g>

        {/* TODO Notebook */}
        <g transform="translate(640, 720)">
          <rect x="0" y="0" width="60" height="75" rx="5" fill="#053B1F" stroke="#FFD700" strokeWidth="2" />
          <line x1="10" y1="15" x2="50" y2="15" stroke="#FF007F" strokeWidth="2" />
          <text x="10" y="35" fill="#FFD700" fontSize="9" fontFamily="monospace">✓ CODE</text>
          <text x="10" y="48" fill="#FFD700" fontSize="9" fontFamily="monospace">✓ DESIGN</text>
          <text x="10" y="61" fill="#FFD700" fontSize="9" fontFamily="monospace">✓ REPEAT</text>
        </g>

        {/* Terminal Window > _ */}
        <g transform="translate(730, 740)">
          <rect x="0" y="0" width="70" height="50" rx="6" fill="#053B1F" stroke="#FFD700" strokeWidth="2" />
          <circle cx="8" cy="8" r="2" fill="#FF007F" />
          <circle cx="15" cy="8" r="2" fill="#FFD700" />
          <circle cx="22" cy="8" r="2" fill="#1DB979" />
          <text x="10" y="32" fill="#FFD700" fontSize="11" fontFamily="monospace" fontWeight="bold">
            &gt; _
          </text>
        </g>

        {/* Sticky Note SHIP IT! */}
        <g transform="translate(820, 750) rotate(5)">
          <rect x="0" y="0" width="45" height="45" rx="3" fill="#FF007F" opacity="0.9" />
          <text x="6" y="20" fill="#FAF7F2" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
            SHIP IT!
          </text>
        </g>

        {/* ================= BOTTOM RIGHT: VW SURF VAN & LIGHTHOUSE ================= */}
        {/* Retro VW Beach Van */}
        <g transform="translate(1120, 700)">
          <rect x="0" y="20" width="150" height="65" rx="14" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2.5" />
          <rect x="15" y="30" width="38" height="22" rx="4" stroke="#FFD700" strokeWidth="1.5" fill="none" />
          <rect x="62" y="30" width="38" height="22" rx="4" stroke="#FFD700" strokeWidth="1.5" fill="none" />
          <circle cx="30" cy="85" r="14" fill="#FFD700" stroke="#0B6B3A" strokeWidth="3" />
          <circle cx="120" cy="85" r="14" fill="#FFD700" stroke="#0B6B3A" strokeWidth="3" />
          <path d="M 10 12 Q 75 0, 140 12" stroke="#FF007F" strokeWidth="3.5" fill="none" />
        </g>

        {/* Stars */}
        {[[180, 260], [1020, 160], [1200, 320], [300, 650]].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx}, ${cy})`}>
            <path d="M0 -7 L2 -2 L7 0 L2 2 L0 7 L-2 2 L-7 0 L-2 -2 Z" fill={i % 2 === 0 ? "#FFD700" : "#FF007F"} />
          </g>
        ))}
      </svg>
    </motion.div>
  );
};
