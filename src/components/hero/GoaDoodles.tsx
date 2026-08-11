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
        className="w-full h-full opacity-85"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* ==================================================
            1. TOP LEFT: COOL SUN WEARING SUNGLASSES 🕶️☀️
            ================================================== */}
        <g transform="translate(50, 60)">
          {/* Outer Sun Glow */}
          <circle cx="50" cy="50" r="32" fill="#FFD700" opacity="0.15" />
          
          {/* Sun Body */}
          <circle cx="50" cy="50" r="26" fill="#FFD700" stroke="#FF007F" strokeWidth="2.5" />

          {/* Sun Rays */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line
              key={angle}
              x1={50 + 31 * Math.cos((angle * Math.PI) / 180)}
              y1={50 + 31 * Math.sin((angle * Math.PI) / 180)}
              x2={50 + 42 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 42 * Math.sin((angle * Math.PI) / 180)}
              stroke="#FFD700"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}

          {/* Cool Wayfarer Sunglasses */}
          <g transform="translate(26, 36)">
            {/* Left Lens */}
            <path d="M 0 4 L 20 4 L 17 17 Q 10 21, 3 17 Z" fill="#052E1D" stroke="#FF007F" strokeWidth="2" />
            {/* Right Lens */}
            <path d="M 27 4 L 47 4 L 44 17 Q 37 21, 30 17 Z" fill="#052E1D" stroke="#FF007F" strokeWidth="2" />
            {/* Sunglasses Bridge */}
            <line x1="20" y1="6" x2="27" y2="6" stroke="#FF007F" strokeWidth="2.5" />
            {/* Lens Glare Lines */}
            <line x1="4" y1="7" x2="10" y2="15" stroke="#FAF7F2" strokeWidth="1.5" opacity="0.7" />
            <line x1="31" y1="7" x2="37" y2="15" stroke="#FAF7F2" strokeWidth="1.5" opacity="0.7" />
          </g>

          {/* Cheeky Smirk Smile */}
          <path d="M 40 60 Q 50 67, 58 60" stroke="#052E1D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </g>

        {/* CODE TAG top left </> */}
        <g transform="translate(145, 185)">
          <rect x="0" y="0" width="50" height="28" rx="6" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2" />
          <text x="8" y="19" fill="#FFD700" fontSize="14" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
        </g>

        {/* ===== PAPER AIRPLANE + dashed trajectory ===== */}
        <g transform="translate(390, 50)">
          <path
            d="M -120 55 C -70 20, 0 80, 60 30 C 100 -10, 180 15, 210 5"
            stroke="#FF007F"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            fill="none"
            opacity="0.9"
          />
          <g transform="translate(212, 5) rotate(-12)">
            <path d="M 0 0 L 32 -12 L 15 28 Z" fill="#FFD700" stroke="#FAF7F2" strokeWidth="2" />
            <path d="M 15 -5 L 15 28" stroke="#FF007F" strokeWidth="2" />
          </g>
        </g>

        {/* ===== Stars scattered ===== */}
        {[
          [200, 80, "#FFD700"], [380, 130, "#FF007F"], [980, 95, "#FFD700"],
          [1100, 200, "#FF007F"], [1230, 350, "#FFD700"], [280, 680, "#FF007F"],
          [700, 750, "#FFD700"], [820, 680, "#FF007F"], [1050, 720, "#FFD700"],
          [150, 340, "#FFD700"], [460, 480, "#FF007F"],
        ].map(([cx, cy, color], i) => (
          <g key={i} transform={`translate(${cx}, ${cy})`}>
            <path
              d="M0 -8 L2.5 -2.5 L8 0 L2.5 2.5 L0 8 L-2.5 2.5 L-8 0 L-2.5 -2.5 Z"
              fill={color as string}
              opacity="0.9"
            />
          </g>
        ))}

        {/* Small diamond dots */}
        {[
          [330, 70], [560, 100], [850, 65], [1050, 120], [1320, 260], [70, 510], [1380, 580],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="#FFD700" opacity="0.7" />
        ))}

        {/* ===== TOP RIGHT: GOA SIGNBOARD ===== */}
        <g transform="translate(1240, 110)">
          <path d="M0 0 L115 0 L140 26 L115 52 L0 52 Z" stroke="#FFD700" strokeWidth="3" fill="#0B6B3A" />
          <text x="14" y="34" fill="#FFD700" fontSize="18" fontWeight="bold" fontFamily="monospace">
            GOA <tspan fill="#FF007F">❤</tspan>
          </text>
          <line x1="58" y1="52" x2="58" y2="100" stroke="#FFD700" strokeWidth="4" />
          <ellipse cx="58" cy="102" rx="14" ry="6" fill="#FFD700" opacity="0.4" />
        </g>

        {/* ==================================================
            2. LEFT SIDE: REAL LUSH COCONUT PALM TREE 🌴
            ================================================== */}
        <g transform="translate(15, 380)">
          {/* Curved Palm Trunk with Bark Rings */}
          <path d="M 85 490 Q 65 300, 105 130 Q 115 50, 120 0" stroke="#FFD700" strokeWidth="6" fill="none" strokeLinecap="round" />
          {/* Bark texture rings */}
          {[60, 120, 180, 240, 300, 360, 420].map((y, i) => (
            <line key={i} x1={70 + i * 4} y1={y} x2={88 + i * 4} y2={y - 8} stroke="#052E1D" strokeWidth="2.5" />
          ))}

          {/* Coconut Bunch */}
          <circle cx="110" cy="18" r="9" fill="#FF007F" stroke="#FFD700" strokeWidth="2" />
          <circle cx="126" cy="26" r="9" fill="#FF007F" stroke="#FFD700" strokeWidth="2" />
          <circle cx="114" cy="34" r="9" fill="#FFD700" stroke="#052E1D" strokeWidth="2" />

          {/* Detailed Palm Fronds */}
          {/* Frond 1 (Top Left) */}
          <path d="M 120 0 Q 40 -40, -40 20" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 90 -20 Q 55 -5, 10 30 M 70 -25 Q 35 15, -15 40 M 50 -15 Q 15 25, -30 50" stroke="#1DB979" strokeWidth="2" fill="none" />

          {/* Frond 2 (High Center) */}
          <path d="M 120 0 Q 70 -80, 25 -120" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 100 -50 Q 65 -85, 15 -115 M 80 -65 Q 45 -100, 0 -130" stroke="#1DB979" strokeWidth="2" fill="none" />

          {/* Frond 3 (Top Right) */}
          <path d="M 120 0 Q 200 -80, 275 -35" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 155 -45 Q 205 -65, 260 -25 M 185 -30 Q 230 -40, 280 0" stroke="#1DB979" strokeWidth="2" fill="none" />

          {/* Frond 4 (Right Low) */}
          <path d="M 120 0 Q 210 5, 270 55" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 160 5 Q 220 25, 275 70 M 180 20 Q 235 45, 280 85" stroke="#1DB979" strokeWidth="2" fill="none" />
        </g>

        {/* ===== LEFT: SURFBOARDS ===== */}
        <g transform="translate(60, 680) rotate(-18)">
          <path d="M 0 0 Q 18 -60, 35 -120 Q 52 -60, 70 0 Z" fill="#FF007F" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="35" y1="-115" x2="35" y2="-5" stroke="#FFD700" strokeWidth="2.5" />
        </g>
        <g transform="translate(110, 680) rotate(-8)">
          <path d="M 0 0 Q 12 -50, 25 -100 Q 38 -50, 50 0 Z" fill="#FFD700" stroke="#0B6B3A" strokeWidth="2.5" />
        </g>

        {/* ===== LEFT: BEACH UMBRELLA + CHAIR ===== */}
        <g transform="translate(155, 730)">
          {/* Umbrella */}
          <path d="M 0 0 C 18 -42, 85 -42, 102 0 Z" fill="#FFD700" stroke="#FF007F" strokeWidth="2.5" />
          <line x1="51" y1="0" x2="51" y2="70" stroke="#FAF7F2" strokeWidth="3" />
          {/* Chair slats */}
          <path d="M 20 58 L 70 48 L 75 68 L 25 78 Z" stroke="#FFD700" strokeWidth="2" fill="none" />
        </g>

        {/* ===== BOTTOM LEFT: COCONUT DRINK ===== */}
        <g transform="translate(85, 780)">
          <ellipse cx="30" cy="48" rx="30" ry="32" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2.5" />
          <ellipse cx="30" cy="20" rx="30" ry="11" fill="#0B4F32" stroke="#FFD700" strokeWidth="2" />
          {/* Straw */}
          <line x1="38" y1="14" x2="60" y2="-22" stroke="#FAF7F2" strokeWidth="3" strokeLinecap="round" />
          {/* Umbrella pick */}
          <path d="M 45 0 C 52 -20, 75 -20, 82 0 Z" fill="#FFD700" stroke="#FF007F" strokeWidth="1.5" />
          <line x1="64" y1="-20" x2="64" y2="5" stroke="#FFD700" strokeWidth="2" />
        </g>

        {/* ==================================================
            3. RIGHT SIDE: REAL SECOND LUSH COCONUT PALM TREE 🌴
            ================================================== */}
        <g transform="translate(1310, 360)">
          {/* Curved Trunk leaning into view */}
          <path d="M 60 510 Q 75 320, 20 140 Q 5 60, 0 0" stroke="#FFD700" strokeWidth="6" fill="none" strokeLinecap="round" />
          {/* Bark Rings */}
          {[60, 130, 200, 270, 340, 410].map((y, i) => (
            <line key={i} x1={30 - i * 3} y1={y} x2={50 - i * 3} y2={y - 8} stroke="#052E1D" strokeWidth="2.5" />
          ))}

          {/* Coconut Bunch */}
          <circle cx="-12" cy="18" r="9" fill="#FFD700" stroke="#FF007F" strokeWidth="2" />
          <circle cx="-2" cy="28" r="9" fill="#FF007F" stroke="#FFD700" strokeWidth="2" />

          {/* Palm Fronds extending Left into perimeter */}
          <path d="M 0 0 Q -80 -60, -160 -10" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M -40 -35 Q -90 -45, -145 0 M -70 -25 Q -120 -30, -170 15" stroke="#1DB979" strokeWidth="2" fill="none" />

          <path d="M 0 0 Q -100 10, -180 70" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M -50 10 Q -110 35, -170 85 M -80 25 Q -130 50, -185 100" stroke="#1DB979" strokeWidth="2" fill="none" />
        </g>

        {/* ===== BOTTOM CENTER-LEFT: HEADPHONES ===== */}
        <g transform="translate(295, 780)">
          <path d="M 0 30 Q 0 -8, 40 -8 Q 80 -8, 80 30" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <rect x="-9" y="24" width="18" height="28" rx="6" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2.5" />
          <rect x="71" y="24" width="18" height="28" rx="6" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2.5" />
        </g>

        {/* ===== BOTTOM CENTER: LAPTOP WITH CODE ===== */}
        <g transform="translate(388, 700)">
          {/* Screen */}
          <rect x="0" y="0" width="150" height="95" rx="8" fill="#053B1F" stroke="#FFD700" strokeWidth="3" />
          {/* Code lines */}
          <line x1="15" y1="24" x2="75" y2="24" stroke="#FF007F" strokeWidth="3" />
          <line x1="15" y1="40" x2="110" y2="40" stroke="#FFD700" strokeWidth="3" />
          <line x1="15" y1="56" x2="88" y2="56" stroke="#1DB979" strokeWidth="3" />
          <line x1="15" y1="72" x2="62" y2="72" stroke="#FAF7F2" strokeWidth="2" opacity="0.6" />
          {/* Hinge / base */}
          <path d="M -12 95 L 162 95 L 152 108 L -22 108 Z" fill="#FFD700" stroke="#053B1F" strokeWidth="1.5" />
        </g>

        {/* CODE TAG center </> */}
        <g transform="translate(558, 820)">
          <rect x="0" y="0" width="50" height="30" rx="6" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2" />
          <text x="7" y="20" fill="#FFD700" fontSize="14" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
        </g>

        {/* ===== BOTTOM CENTER: COFFEE MUG with steam ===== */}
        <g transform="translate(620, 745)">
          <rect x="0" y="0" width="34" height="40" rx="6" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2.5" />
          <path d="M 34 9 C 46 9, 46 30, 34 30" stroke="#FFD700" strokeWidth="2.5" fill="none" />
          {/* Steam */}
          <path d="M 9 -14 Q 15 -7, 9 0 M 22 -16 Q 30 -8, 22 0" stroke="#FF007F" strokeWidth="2" fill="none" />
        </g>

        {/* ===== CENTER RIGHT: FUNCTION CODE BLOCK ===== */}
        <g transform="translate(688, 685)">
          <rect x="0" y="0" width="150" height="115" rx="8" fill="#053B1F" stroke="#FFD700" strokeWidth="2.5" />
          <text x="10" y="23" fill="#FF007F" fontSize="11" fontFamily="monospace">function</text>
          <text x="10" y="39" fill="#FFD700" fontSize="11" fontFamily="monospace">goaTrip()&#123;</text>
          <text x="14" y="55" fill="#1DB979" fontSize="11" fontFamily="monospace">packBags();</text>
          <text x="14" y="71" fill="#1DB979" fontSize="11" fontFamily="monospace">codeAllNight();</text>
          <text x="14" y="87" fill="#1DB979" fontSize="11" fontFamily="monospace">beachAllDay();</text>
          <text x="14" y="103" fill="#1DB979" fontSize="11" fontFamily="monospace">repeat();</text>
        </g>

        {/* ===== CENTER: TODO NOTEBOOK ===== */}
        <g transform="translate(850, 700)">
          <rect x="0" y="0" width="75" height="95" rx="6" fill="#053B1F" stroke="#FFD700" strokeWidth="2.5" />
          {/* Spiral binding dots */}
          {[8, 18, 28, 38, 48, 58, 68, 78].map((y, i) => (
            <circle key={i} cx="5" cy={y} r="2.5" fill="#FFD700" opacity="0.7" />
          ))}
          {/* Header */}
          <line x1="14" y1="15" x2="65" y2="15" stroke="#FF007F" strokeWidth="2" />
          <text x="14" y="12" fill="#FF007F" fontSize="9" fontFamily="monospace" fontWeight="bold">TODO:</text>
          <text x="14" y="32" fill="#FFD700" fontSize="9.5" fontFamily="monospace">✓ CODE</text>
          <text x="14" y="49" fill="#FFD700" fontSize="9.5" fontFamily="monospace">✓ DESIGN</text>
          <text x="14" y="66" fill="#FFD700" fontSize="9.5" fontFamily="monospace">✓ COFFEE</text>
          <text x="14" y="83" fill="#FFD700" fontSize="9.5" fontFamily="monospace">✓ REPEAT</text>
        </g>

        {/* ===== CENTER RIGHT: TERMINAL WINDOW ===== */}
        <g transform="translate(942, 725)">
          <rect x="0" y="0" width="82" height="58" rx="7" fill="#053B1F" stroke="#FFD700" strokeWidth="2.5" />
          <circle cx="11" cy="11" r="3" fill="#FF007F" />
          <circle cx="22" cy="11" r="3" fill="#FFD700" />
          <circle cx="33" cy="11" r="3" fill="#1DB979" />
          <text x="11" y="39" fill="#FFD700" fontSize="14" fontFamily="monospace" fontWeight="bold">&gt; _</text>
        </g>

        {/* ===== RIGHT: STICKY NOTE SHIP IT! ===== */}
        <g transform="translate(1040, 730) rotate(6)">
          <rect x="0" y="0" width="58" height="58" rx="4" fill="#FF007F" stroke="#FFD700" strokeWidth="1.5" />
          {/* Pin */}
          <circle cx="29" cy="-5" r="5" fill="#FAF7F2" />
          <line x1="29" y1="-5" x2="29" y2="5" stroke="#FAF7F2" strokeWidth="2" />
          <text x="7" y="24" fill="#FAF7F2" fontSize="10" fontFamily="sans-serif" fontWeight="bold">SHIP</text>
          <text x="9" y="38" fill="#FAF7F2" fontSize="10" fontFamily="sans-serif" fontWeight="bold">IT!</text>
          <text x="32" y="52" fill="#FFD700" fontSize="14">❤</text>
        </g>

        {/* ===== BOTTOM RIGHT: BINARY NUMBERS ===== */}
        <g transform="translate(1100, 705)">
          <text fill="#FFD700" fontSize="11" fontFamily="monospace" fontWeight="bold">10101</text>
          <text y="15" fill="#FFD700" fontSize="11" fontFamily="monospace" fontWeight="bold">01010</text>
          <text y="30" fill="#FFD700" fontSize="11" fontFamily="monospace" fontWeight="bold">11001</text>
        </g>

        {/* ===== BOTTOM RIGHT: VW SURF VAN ===== */}
        <g transform="translate(1115, 695)">
          {/* Surfboard on top */}
          <path d="M 20 18 Q 80 0, 150 18" stroke="#FF007F" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Van body */}
          <rect x="0" y="20" width="168" height="72" rx="14" fill="#0B6B3A" stroke="#FFD700" strokeWidth="3" />
          {/* Windows */}
          <rect x="15" y="30" width="44" height="25" rx="4" stroke="#FFD700" strokeWidth="1.8" fill="#053B1F" />
          <rect x="66" y="30" width="44" height="25" rx="4" stroke="#FFD700" strokeWidth="1.8" fill="#053B1F" />
          {/* Peace sign */}
          <circle cx="125" cy="54" r="11" stroke="#FF007F" strokeWidth="2.5" fill="none" />
          <line x1="125" y1="43" x2="125" y2="65" stroke="#FF007F" strokeWidth="2.5" />
          <line x1="117" y1="60" x2="125" y2="65" stroke="#FF007F" strokeWidth="2.5" />
          <line x1="133" y1="60" x2="125" y2="65" stroke="#FF007F" strokeWidth="2.5" />
          {/* Wheels */}
          <circle cx="36" cy="92" r="16" fill="#FFD700" stroke="#0B6B3A" strokeWidth="3" />
          <circle cx="36" cy="92" r="7" fill="#0B6B3A" />
          <circle cx="132" cy="92" r="16" fill="#FFD700" stroke="#0B6B3A" strokeWidth="3" />
          <circle cx="132" cy="92" r="7" fill="#0B6B3A" />
        </g>

        {/* ===== LIGHTHOUSE (far right bottom) ===== */}
        <g transform="translate(1300, 690)">
          {/* Tower */}
          <path d="M 12 105 L 6 32 L 38 32 L 32 105 Z" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2.5" />
          {/* Stripes */}
          <line x1="6" y1="58" x2="38" y2="58" stroke="#FF007F" strokeWidth="2.5" />
          <line x1="8" y1="80" x2="36" y2="80" stroke="#FFD700" strokeWidth="2.5" />
          {/* Light housing */}
          <rect x="2" y="24" width="40" height="14" rx="3" fill="#FFD700" stroke="#0B6B3A" strokeWidth="2" />
          {/* Light rays */}
          <line x1="22" y1="18" x2="22" y2="2" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="22" y1="18" x2="38" y2="6" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="22" y1="18" x2="6" y2="6" stroke="#FFD700" strokeWidth="2.5" />
        </g>

        {/* ===== WAVE LINES (bottom strip) ===== */}
        <g transform="translate(0, 865)" opacity="0.4">
          <path d="M 0 15 Q 80 0, 160 15 Q 240 30, 320 15 Q 400 0, 480 15 Q 560 30, 640 15 Q 720 0, 800 15 Q 880 30, 960 15 Q 1040 0, 1120 15 Q 1200 30, 1280 15 Q 1360 0, 1440 15" stroke="#FFD700" strokeWidth="2.5" fill="none" />
        </g>

      </svg>
    </motion.div>
  );
};
