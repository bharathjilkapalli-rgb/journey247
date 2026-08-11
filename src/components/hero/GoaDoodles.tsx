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
        className="w-full h-full opacity-45"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* ===== TOP LEFT: SUN with rays ===== */}
        <g transform="translate(60, 80)">
          <circle cx="38" cy="38" r="18" stroke="#FFD700" strokeWidth="2" strokeDasharray="3 2" fill="rgba(255,215,0,0.08)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1={38 + 22 * Math.cos((angle * Math.PI) / 180)}
              y1={38 + 22 * Math.sin((angle * Math.PI) / 180)}
              x2={38 + 30 * Math.cos((angle * Math.PI) / 180)}
              y2={38 + 30 * Math.sin((angle * Math.PI) / 180)}
              stroke="#FFD700"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* CODE TAG top left </>  */}
        <g transform="translate(130, 185)">
          <text fill="#FFD700" fontSize="20" fontFamily="monospace" fontWeight="bold" opacity="0.7">&lt;/&gt;</text>
        </g>

        {/* ===== PAPER AIRPLANE + dashed trajectory ===== */}
        <g transform="translate(390, 55)">
          <path
            d="M -120 55 C -70 20, 0 80, 60 30 C 100 -10, 180 15, 210 5"
            stroke="#FF007F"
            strokeWidth="2"
            strokeDasharray="5 4"
            fill="none"
            opacity="0.9"
          />
          <g transform="translate(212, 5) rotate(-12)">
            <path d="M 0 0 L 30 -11 L 14 26 Z" fill="#FFD700" stroke="#FAF7F2" strokeWidth="1.5" />
            <path d="M 14 -5 L 14 26" stroke="#FF007F" strokeWidth="1.5" />
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
              d="M0 -7 L2 -2 L7 0 L2 2 L0 7 L-2 2 L-7 0 L-2 -2 Z"
              fill={color as string}
              opacity="0.85"
            />
          </g>
        ))}

        {/* Small diamond dots */}
        {[
          [330, 70], [560, 100], [850, 65], [1050, 120], [1320, 260], [70, 510], [1380, 580],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#FFD700" opacity="0.5" />
        ))}

        {/* ===== TOP RIGHT: GOA SIGNBOARD ===== */}
        <g transform="translate(1250, 130)">
          <path d="M0 0 L108 0 L130 24 L108 48 L0 48 Z" stroke="#FFD700" strokeWidth="2.5" fill="#0B6B3A" opacity="0.95" />
          <text x="12" y="30" fill="#FFD700" fontSize="16" fontWeight="bold" fontFamily="monospace">
            GOA <tspan fill="#FF007F">❤</tspan>
          </text>
          <line x1="54" y1="48" x2="54" y2="88" stroke="#FFD700" strokeWidth="3" />
          {/* Post ground bump */}
          <ellipse cx="54" cy="90" rx="12" ry="5" fill="#FFD700" opacity="0.3" />
        </g>

        {/* TOP RIGHT palm fronds */}
        <g transform="translate(1330, 0)" opacity="0.6">
          <path d="M 60 0 Q 20 60, -40 130 M 60 0 Q 80 80, 40 170 M 60 0 Q 110 70, 130 150" stroke="#FFD700" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 60 0 Q 0 40, -80 60 M 60 0 Q 10 -20, -20 20" stroke="#FFD700" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>

        {/* ===== LEFT SIDE: PALM TREE ===== */}
        <g transform="translate(20, 490)">
          {/* Trunk */}
          <path d="M 80 370 Q 75 240, 92 120 Q 100 40, 105 0" stroke="#FFD700" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Coconuts */}
          <circle cx="98" cy="20" r="7" fill="#FF007F" opacity="0.9" />
          <circle cx="112" cy="30" r="7" fill="#FF007F" opacity="0.9" />
          {/* Fronds */}
          <path d="M 105 0 Q 30 -30, -25 15" stroke="#FFD700" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 105 0 Q 60 -65, 20 -95" stroke="#FFD700" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 105 0 Q 170 -65, 225 -28" stroke="#FFD700" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 105 0 Q 175 5, 230 45" stroke="#FFD700" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Frond leaves detail */}
          <path d="M 80 -20 Q 55 -30, 30 -15" stroke="#FFD700" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M 130 -20 Q 165 -30, 195 -10" stroke="#FFD700" strokeWidth="1.5" fill="none" opacity="0.5" />
        </g>

        {/* ===== LEFT: SURFBOARDS ===== */}
        <g transform="translate(55, 700) rotate(-18)">
          <path d="M 0 0 Q 15 -55, 30 -110 Q 45 -55, 60 0 Z" fill="#FF007F" stroke="#FFD700" strokeWidth="2" opacity="0.9" />
          <line x1="30" y1="-105" x2="30" y2="-5" stroke="#FFD700" strokeWidth="2" />
        </g>
        <g transform="translate(100, 700) rotate(-8)">
          <path d="M 0 0 Q 10 -45, 22 -90 Q 34 -45, 46 0 Z" fill="#FFD700" stroke="#0B6B3A" strokeWidth="2" opacity="0.7" />
        </g>

        {/* ===== LEFT: BEACH UMBRELLA + CHAIR ===== */}
        <g transform="translate(145, 740)">
          {/* Umbrella */}
          <path d="M 0 0 C 15 -38, 78 -38, 95 0 Z" fill="#FFD700" stroke="#FF007F" strokeWidth="2" opacity="0.9" />
          <line x1="47" y1="0" x2="47" y2="65" stroke="#FAF7F2" strokeWidth="2.5" />
          {/* Chair slats */}
          <path d="M 20 55 L 65 45 L 70 62 L 25 72 Z" stroke="#FFD700" strokeWidth="1.5" fill="none" opacity="0.6" />
        </g>

        {/* ===== BOTTOM LEFT: COCONUT DRINK ===== */}
        <g transform="translate(75, 790)">
          <ellipse cx="28" cy="45" rx="28" ry="30" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2" />
          <ellipse cx="28" cy="18" rx="28" ry="10" fill="#0B4F32" stroke="#FFD700" strokeWidth="1.5" />
          {/* Straw */}
          <line x1="35" y1="12" x2="55" y2="-20" stroke="#FAF7F2" strokeWidth="2.5" strokeLinecap="round" />
          {/* Umbrella pick */}
          <path d="M 42 0 C 48 -18, 70 -18, 76 0 Z" fill="#FFD700" opacity="0.8" />
          <line x1="59" y1="-18" x2="59" y2="4" stroke="#FFD700" strokeWidth="1.5" />
        </g>

        {/* ===== BOTTOM CENTER-LEFT: HEADPHONES ===== */}
        <g transform="translate(295, 790)">
          <path d="M 0 30 Q 0 -8, 38 -8 Q 76 -8, 76 30" stroke="#FFD700" strokeWidth="3" fill="none" strokeLinecap="round" />
          <rect x="-8" y="24" width="16" height="26" rx="6" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2" />
          <rect x="68" y="24" width="16" height="26" rx="6" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2" />
        </g>

        {/* ===== BOTTOM CENTER: LAPTOP WITH CODE ===== */}
        <g transform="translate(388, 710)">
          {/* Screen */}
          <rect x="0" y="0" width="145" height="90" rx="8" fill="#053B1F" stroke="#FFD700" strokeWidth="2.5" />
          {/* Code lines */}
          <line x1="14" y1="22" x2="70" y2="22" stroke="#FF007F" strokeWidth="2.5" />
          <line x1="14" y1="38" x2="105" y2="38" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="14" y1="54" x2="82" y2="54" stroke="#1DB979" strokeWidth="2.5" />
          <line x1="14" y1="70" x2="58" y2="70" stroke="#FAF7F2" strokeWidth="1.5" opacity="0.5" />
          {/* Hinge / base */}
          <path d="M -12 90 L 157 90 L 148 102 L -22 102 Z" fill="#FFD700" stroke="#053B1F" strokeWidth="1" />
        </g>

        {/* CODE TAG center </>  */}
        <g transform="translate(558, 826)">
          <rect x="0" y="0" width="46" height="28" rx="6" fill="#0B6B3A" stroke="#FFD700" strokeWidth="1.5" opacity="0.85" />
          <text x="6" y="19" fill="#FFD700" fontSize="13" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
        </g>

        {/* ===== BOTTOM CENTER: COFFEE MUG with steam ===== */}
        <g transform="translate(618, 750)">
          <rect x="0" y="0" width="32" height="38" rx="5" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2" />
          <path d="M 32 8 C 44 8, 44 28, 32 28" stroke="#FFD700" strokeWidth="2" fill="none" />
          {/* Steam */}
          <path d="M 8 -12 Q 14 -6, 8 0 M 20 -14 Q 28 -7, 20 0" stroke="#FF007F" strokeWidth="1.5" fill="none" opacity="0.8" />
        </g>

        {/* ===== CENTER RIGHT: FUNCTION CODE BLOCK ===== */}
        <g transform="translate(685, 690)">
          <rect x="0" y="0" width="145" height="110" rx="7" fill="#053B1F" stroke="#FFD700" strokeWidth="2" opacity="0.95" />
          <text x="10" y="22" fill="#FF007F" fontSize="10" fontFamily="monospace">function</text>
          <text x="10" y="37" fill="#FFD700" fontSize="10" fontFamily="monospace">goaTrip()&#123;</text>
          <text x="14" y="52" fill="#1DB979" fontSize="10" fontFamily="monospace">packBags();</text>
          <text x="14" y="67" fill="#1DB979" fontSize="10" fontFamily="monospace">codeAllNight();</text>
          <text x="14" y="82" fill="#1DB979" fontSize="10" fontFamily="monospace">beachAllDay();</text>
          <text x="14" y="97" fill="#1DB979" fontSize="10" fontFamily="monospace">repeat();</text>
          <text x="10" y="108" fill="#FFD700" fontSize="10" fontFamily="monospace">&#125;</text>
        </g>

        {/* ===== CENTER: TODO NOTEBOOK ===== */}
        <g transform="translate(848, 705)">
          <rect x="0" y="0" width="70" height="90" rx="5" fill="#053B1F" stroke="#FFD700" strokeWidth="2" opacity="0.95" />
          {/* Spiral binding dots */}
          {[8, 18, 28, 38, 48, 58, 68].map((y, i) => (
            <circle key={i} cx="5" cy={y} r="2.5" fill="#FFD700" opacity="0.5" />
          ))}
          {/* Header */}
          <line x1="12" y1="14" x2="60" y2="14" stroke="#FF007F" strokeWidth="2" />
          <text x="12" y="11" fill="#FF007F" fontSize="8" fontFamily="monospace" fontWeight="bold">TODO:</text>
          <text x="12" y="30" fill="#FFD700" fontSize="9" fontFamily="monospace">✓ CODE</text>
          <text x="12" y="46" fill="#FFD700" fontSize="9" fontFamily="monospace">✓ DESIGN</text>
          <text x="12" y="62" fill="#FFD700" fontSize="9" fontFamily="monospace">✓ COFFEE</text>
          <text x="12" y="78" fill="#FFD700" fontSize="9" fontFamily="monospace">✓ REPEAT</text>
        </g>

        {/* ===== CENTER RIGHT: TERMINAL WINDOW ===== */}
        <g transform="translate(938, 730)">
          <rect x="0" y="0" width="78" height="55" rx="7" fill="#053B1F" stroke="#FFD700" strokeWidth="2" />
          <circle cx="10" cy="10" r="3" fill="#FF007F" />
          <circle cx="20" cy="10" r="3" fill="#FFD700" />
          <circle cx="30" cy="10" r="3" fill="#1DB979" />
          <text x="10" y="36" fill="#FFD700" fontSize="13" fontFamily="monospace" fontWeight="bold">&gt; _</text>
        </g>

        {/* ===== RIGHT: STICKY NOTE SHIP IT! ===== */}
        <g transform="translate(1035, 735) rotate(6)">
          <rect x="0" y="0" width="55" height="55" rx="3" fill="#FF007F" opacity="0.92" />
          {/* Pin */}
          <circle cx="27" cy="-5" r="5" fill="#FAF7F2" opacity="0.8" />
          <line x1="27" y1="-5" x2="27" y2="5" stroke="#FAF7F2" strokeWidth="2" />
          <text x="6" y="22" fill="#FAF7F2" fontSize="9" fontFamily="sans-serif" fontWeight="bold">SHIP</text>
          <text x="8" y="35" fill="#FAF7F2" fontSize="9" fontFamily="sans-serif" fontWeight="bold">IT!</text>
          <text x="30" y="50" fill="#FF007F" fontSize="14">❤</text>
        </g>

        {/* ===== BOTTOM RIGHT: BINARY NUMBERS ===== */}
        <g transform="translate(1090, 710)" opacity="0.6">
          <text fill="#FFD700" fontSize="10" fontFamily="monospace">10101</text>
          <text y="14" fill="#FFD700" fontSize="10" fontFamily="monospace">01010</text>
          <text y="28" fill="#FFD700" fontSize="10" fontFamily="monospace">11001</text>
        </g>

        {/* ===== BOTTOM RIGHT: VW SURF VAN ===== */}
        <g transform="translate(1110, 700)">
          {/* Surfboard on top */}
          <path d="M 20 18 Q 75 2, 145 18" stroke="#FF007F" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Van body */}
          <rect x="0" y="20" width="162" height="70" rx="14" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2.5" />
          {/* Windows */}
          <rect x="14" y="30" width="42" height="24" rx="4" stroke="#FFD700" strokeWidth="1.5" fill="#053B1F" opacity="0.8" />
          <rect x="64" y="30" width="42" height="24" rx="4" stroke="#FFD700" strokeWidth="1.5" fill="#053B1F" opacity="0.8" />
          {/* Peace sign */}
          <circle cx="120" cy="52" r="10" stroke="#FF007F" strokeWidth="2" fill="none" />
          <line x1="120" y1="42" x2="120" y2="62" stroke="#FF007F" strokeWidth="2" />
          <line x1="113" y1="58" x2="120" y2="62" stroke="#FF007F" strokeWidth="2" />
          <line x1="127" y1="58" x2="120" y2="62" stroke="#FF007F" strokeWidth="2" />
          {/* Wheels */}
          <circle cx="34" cy="90" r="15" fill="#FFD700" stroke="#0B6B3A" strokeWidth="3" />
          <circle cx="34" cy="90" r="6" fill="#0B6B3A" />
          <circle cx="128" cy="90" r="15" fill="#FFD700" stroke="#0B6B3A" strokeWidth="3" />
          <circle cx="128" cy="90" r="6" fill="#0B6B3A" />
        </g>

        {/* ===== TOP RIGHT AREA: Cloud doodles ===== */}
        <g transform="translate(820, 40)" opacity="0.4">
          <path d="M0 30 Q10 10, 30 10 Q35 0, 50 5 Q70 -5, 80 15 Q95 10, 100 30 Z" stroke="#FFD700" strokeWidth="1.5" fill="none" />
        </g>
        <g transform="translate(980, 20)" opacity="0.35">
          <path d="M0 25 Q8 8, 25 8 Q28 0, 42 4 Q58 -4, 68 12 Q80 8, 84 25 Z" stroke="#FFD700" strokeWidth="1.5" fill="none" />
        </g>

        {/* ===== LIGHTHOUSE (far right bottom) ===== */}
        <g transform="translate(1290, 700)">
          {/* Tower */}
          <path d="M 10 100 L 5 30 L 35 30 L 30 100 Z" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2" />
          {/* Stripes */}
          <line x1="5" y1="55" x2="35" y2="55" stroke="#FFD700" strokeWidth="2" />
          <line x1="6" y1="75" x2="34" y2="75" stroke="#FFD700" strokeWidth="2" />
          {/* Light housing */}
          <rect x="2" y="22" width="36" height="12" rx="3" fill="#FFD700" stroke="#0B6B3A" strokeWidth="1.5" />
          {/* Light rays */}
          <line x1="20" y1="18" x2="20" y2="5" stroke="#FFD700" strokeWidth="2" opacity="0.7" />
          <line x1="20" y1="18" x2="35" y2="8" stroke="#FFD700" strokeWidth="2" opacity="0.5" />
          <line x1="20" y1="18" x2="5" y2="8" stroke="#FFD700" strokeWidth="2" opacity="0.5" />
          {/* Base */}
          <ellipse cx="20" cy="100" rx="20" ry="6" fill="#FFD700" opacity="0.3" />
        </g>

        {/* ===== WAVE LINES (bottom strip) ===== */}
        <g transform="translate(0, 870)" opacity="0.2">
          <path d="M 0 15 Q 80 0, 160 15 Q 240 30, 320 15 Q 400 0, 480 15 Q 560 30, 640 15 Q 720 0, 800 15 Q 880 30, 960 15 Q 1040 0, 1120 15 Q 1200 30, 1280 15 Q 1360 0, 1440 15" stroke="#FFD700" strokeWidth="2" fill="none" />
        </g>

        {/* ===== SMALL DECORATIVE: code angle brackets scattered ===== */}
        <g transform="translate(282, 800)" opacity="0.5">
          <text fill="#FFD700" fontSize="16" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
        </g>

        {/* Lightning bolt right side */}
        <g transform="translate(1190, 460)" opacity="0.6">
          <path d="M 20 0 L 5 25 L 16 25 L 0 50 L 20 20 L 8 20 Z" fill="#FFD700" />
        </g>

      </svg>
    </motion.div>
  );
};
