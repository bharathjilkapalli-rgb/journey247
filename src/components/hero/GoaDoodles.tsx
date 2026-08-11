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
            1. TOP CENTER: TEASING WINKING SUN WITH SUNGLASSES 🕶️😉☀️
            ================================================== */}
        <g transform="translate(670, 20)">
          {/* Sun Glow */}
          <circle cx="50" cy="50" r="32" fill="#FFD700" opacity="0.2" />
          
          {/* Sun Body */}
          <circle cx="50" cy="50" r="26" fill="#FFD700" stroke="#FF007F" strokeWidth="2.5" />

          {/* Sun Rays Rotating */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          >
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
          </motion.g>

          {/* Sun Face Features Behind Sunglasses (Revealed when glasses lift) */}
          {/* Left Eye: Funny Teasing Wink 😉 */}
          <motion.path
            d="M 33 44 Q 40 38, 47 44"
            stroke="#052E1D"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{ scaleY: [1, 0.2, 1, 0.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Right Eye: Wide Open & Cheeky 👀 */}
          <circle cx="60" cy="42" r="3.5" fill="#052E1D" />
          <circle cx="61.5" cy="40.5" r="1.2" fill="#FAF7F2" />

          {/* Teasing Smile + Tongue Sticking Out 😛 */}
          <path d="M 40 56 Q 50 66, 60 56" stroke="#052E1D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <motion.path
            d="M 47 58 Q 50 65, 53 58 Z"
            fill="#FF007F"
            stroke="#052E1D"
            strokeWidth="1"
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated Sunglasses: Lifts off face, holds up while sun winks, lowers back down 🕶️ */}
          <motion.g
            animate={{
              y: [0, 0, -28, -28, 0, 0],
              rotate: [0, 0, -8, -8, 0, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.16, 1, 0.3, 1],
              times: [0, 0.3, 0.42, 0.75, 0.88, 1],
            }}
            transform="translate(26, 34)"
          >
            {/* Left Lens */}
            <path d="M 0 4 L 20 4 L 17 17 Q 10 21, 3 17 Z" fill="#052E1D" stroke="#FF007F" strokeWidth="2" />
            {/* Right Lens */}
            <path d="M 27 4 L 47 4 L 44 17 Q 37 21, 30 17 Z" fill="#052E1D" stroke="#FF007F" strokeWidth="2" />
            {/* Sunglasses Bridge */}
            <line x1="20" y1="6" x2="27" y2="6" stroke="#FF007F" strokeWidth="2.5" />
            {/* Glare Lines */}
            <line x1="4" y1="7" x2="10" y2="15" stroke="#FAF7F2" strokeWidth="1.5" opacity="0.7" />
            <line x1="31" y1="7" x2="37" y2="15" stroke="#FAF7F2" strokeWidth="1.5" opacity="0.7" />
          </motion.g>
        </g>

        {/* CODE TAG top left </> */}
        <g transform="translate(145, 175)">
          <rect x="0" y="0" width="50" height="28" rx="6" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2" />
          <text x="8" y="19" fill="#FFD700" fontSize="14" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
        </g>

        {/* ===== TOP CENTER-LEFT: LAPTOP WITH CODE ===== */}
        <g transform="translate(160, 50)">
          <rect x="0" y="0" width="115" height="70" rx="6" fill="#053B1F" stroke="#FFD700" strokeWidth="2" />
          <line x1="12" y1="18" x2="55" y2="18" stroke="#FF007F" strokeWidth="2" />
          <line x1="12" y1="30" x2="85" y2="30" stroke="#FFD700" strokeWidth="2" />
          <line x1="12" y1="42" x2="68" y2="42" stroke="#1DB979" strokeWidth="2" />
          <path d="M -8 70 L 123 70 L 115 80 L -16 80 Z" fill="#FFD700" stroke="#053B1F" strokeWidth="1" />
        </g>

        {/* ===== TOP CENTER-RIGHT: FUNCTION CODE BLOCK ===== */}
        <g transform="translate(1120, 45)">
          <rect x="0" y="0" width="130" height="95" rx="7" fill="#053B1F" stroke="#FFD700" strokeWidth="2" />
          <text x="10" y="20" fill="#FF007F" fontSize="10" fontFamily="monospace">function</text>
          <text x="10" y="34" fill="#FFD700" fontSize="10" fontFamily="monospace">goaTrip()&#123;</text>
          <text x="14" y="48" fill="#1DB979" fontSize="10" fontFamily="monospace">packBags();</text>
          <text x="14" y="62" fill="#1DB979" fontSize="10" fontFamily="monospace">codeAllNight();</text>
          <text x="14" y="76" fill="#1DB979" fontSize="10" fontFamily="monospace">beachAllDay();</text>
          <text x="14" y="90" fill="#1DB979" fontSize="10" fontFamily="monospace">repeat();</text>
        </g>

        {/* ===== PAPER AIRPLANE + dashed trajectory ===== */}
        <g transform="translate(390, 45)">
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
          [1100, 180, "#FF007F"], [1250, 300, "#FFD700"], [280, 680, "#FF007F"],
          [700, 780, "#FFD700"], [820, 780, "#FF007F"], [1050, 750, "#FFD700"],
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
        <g transform="translate(1270, 160)">
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
        <g transform="translate(15, 360)">
          <path d="M 85 510 Q 65 310, 105 130 Q 115 50, 120 0" stroke="#FFD700" strokeWidth="6" fill="none" strokeLinecap="round" />
          {[60, 130, 200, 270, 340, 410, 470].map((y, i) => (
            <line key={i} x1={70 + i * 4} y1={y} x2={88 + i * 4} y2={y - 8} stroke="#052E1D" strokeWidth="2.5" />
          ))}

          <circle cx="110" cy="18" r="9" fill="#FF007F" stroke="#FFD700" strokeWidth="2" />
          <circle cx="126" cy="26" r="9" fill="#FF007F" stroke="#FFD700" strokeWidth="2" />
          <circle cx="114" cy="34" r="9" fill="#FFD700" stroke="#052E1D" strokeWidth="2" />

          <path d="M 120 0 Q 40 -40, -40 20" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 90 -20 Q 55 -5, 10 30 M 70 -25 Q 35 15, -15 40 M 50 -15 Q 15 25, -30 50" stroke="#1DB979" strokeWidth="2" fill="none" />

          <path d="M 120 0 Q 70 -80, 25 -120" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 100 -50 Q 65 -85, 15 -115 M 80 -65 Q 45 -100, 0 -130" stroke="#1DB979" strokeWidth="2" fill="none" />

          <path d="M 120 0 Q 200 -80, 275 -35" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M 155 -45 Q 205 -65, 260 -25 M 185 -30 Q 230 -40, 280 0" stroke="#1DB979" strokeWidth="2" fill="none" />
        </g>

        {/* ===== LEFT: SURFBOARDS ===== */}
        <g transform="translate(60, 710) rotate(-18)">
          <path d="M 0 0 Q 18 -60, 35 -120 Q 52 -60, 70 0 Z" fill="#FF007F" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="35" y1="-115" x2="35" y2="-5" stroke="#FFD700" strokeWidth="2.5" />
        </g>

        {/* ==================================================
            3. RIGHT SIDE: SECOND LUSH COCONUT PALM TREE 🌴
            ================================================== */}
        <g transform="translate(1310, 340)">
          <path d="M 60 530 Q 75 330, 20 140 Q 5 60, 0 0" stroke="#FFD700" strokeWidth="6" fill="none" strokeLinecap="round" />
          {[60, 130, 200, 270, 340, 410, 480].map((y, i) => (
            <line key={i} x1={30 - i * 3} y1={y} x2={50 - i * 3} y2={y - 8} stroke="#052E1D" strokeWidth="2.5" />
          ))}

          <circle cx="-12" cy="18" r="9" fill="#FFD700" stroke="#FF007F" strokeWidth="2" />
          <circle cx="-2" cy="28" r="9" fill="#FF007F" stroke="#FFD700" strokeWidth="2" />

          <path d="M 0 0 Q -80 -60, -160 -10" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M -40 -35 Q -90 -45, -145 0 M -70 -25 Q -120 -30, -170 15" stroke="#1DB979" strokeWidth="2" fill="none" />

          <path d="M 0 0 Q -100 10, -180 70" stroke="#FFD700" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M -50 10 Q -110 35, -170 85 M -80 25 Q -130 50, -185 100" stroke="#1DB979" strokeWidth="2" fill="none" />
        </g>

        {/* ===== RIGHT: VW SURF VAN ===== */}
        <g transform="translate(1120, 715)">
          <path d="M 20 18 Q 80 0, 150 18" stroke="#FF007F" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="0" y="20" width="168" height="72" rx="14" fill="#0B6B3A" stroke="#FFD700" strokeWidth="3" />
          <rect x="15" y="30" width="44" height="25" rx="4" stroke="#FFD700" strokeWidth="1.8" fill="#053B1F" />
          <rect x="66" y="30" width="44" height="25" rx="4" stroke="#FFD700" strokeWidth="1.8" fill="#053B1F" />
          <circle cx="125" cy="54" r="11" stroke="#FF007F" strokeWidth="2.5" fill="none" />
          <circle cx="36" cy="92" r="16" fill="#FFD700" stroke="#0B6B3A" strokeWidth="3" />
          <circle cx="132" cy="92" r="16" fill="#FFD700" stroke="#0B6B3A" strokeWidth="3" />
        </g>

        {/* ==================================================
            4. BOTTOM WAVE & SAILING PAPER BOATS ANIMATION ⛵
            ================================================== */}
        <g transform="translate(0, 850)">
          {/* Wave Line */}
          <path
            d="M 0 15 Q 80 0, 160 15 Q 240 30, 320 15 Q 400 0, 480 15 Q 560 30, 640 15 Q 720 0, 800 15 Q 880 30, 960 15 Q 1040 0, 1120 15 Q 1200 30, 1280 15 Q 1360 0, 1440 15"
            stroke="#FFD700"
            strokeWidth="3"
            fill="none"
          />

          {/* Animated Sailing Paper Boat 1 */}
          <motion.g
            animate={{
              x: ["-80px", "1500px"],
              y: [0, -5, 0, 4, 0],
              rotate: [-3, 3, -3],
            }}
            transition={{
              x: { duration: 22, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {/* Boat Hull */}
            <path d="M 0 10 L 40 10 L 32 25 L 8 25 Z" fill="#FFD700" stroke="#052E1D" strokeWidth="2" />
            {/* Sail */}
            <path d="M 20 10 L 20 -18 L 36 6 Z" fill="#FF007F" stroke="#FAF7F2" strokeWidth="1.5" />
            {/* Flag */}
            <path d="M 20 -18 L 12 -23 L 20 -28 Z" fill="#FFD700" />
          </motion.g>

          {/* Animated Sailing Paper Boat 2 (Offset delay) */}
          <motion.g
            animate={{
              x: ["-300px", "1500px"],
              y: [0, 4, -4, 0],
              rotate: [2, -3, 2],
            }}
            transition={{
              x: { duration: 26, repeat: Infinity, ease: "linear", delay: 10 },
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {/* Boat Hull */}
            <path d="M 0 10 L 34 10 L 27 22 L 7 22 Z" fill="#FAF7F2" stroke="#FF007F" strokeWidth="2" />
            {/* Sail */}
            <path d="M 17 10 L 17 -14 L 30 6 Z" fill="#FFD700" stroke="#052E1D" strokeWidth="1.5" />
          </motion.g>

          {/* ==================================================
              5. ANIMATED COOL SAILOR DOODLE WEARING SUNGLASSES ⚓🕶️
              ================================================== */}
          <motion.g
            animate={{
              x: ["1000px", "1020px", "1000px"],
              y: [-20, -28, -20],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Sailor Boat Hull */}
            <path d="M -10 25 L 60 25 L 50 45 L 0 45 Z" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2.5" />
            <line x1="5" y1="35" x2="45" y2="35" stroke="#FF007F" strokeWidth="2" />

            {/* Sailor Character Body */}
            <circle cx="25" cy="5" r="14" fill="#FFD700" stroke="#052E1D" strokeWidth="2" />

            {/* Cool Sailor Hat */}
            <path d="M 10 0 C 10 -12, 40 -12, 40 0 Z" fill="#FAF7F2" stroke="#FF007F" strokeWidth="2" />
            <rect x="8" y="-2" width="34" height="6" rx="2" fill="#0B6B3A" stroke="#FFD700" strokeWidth="1.5" />
            {/* Anchor emblem on hat */}
            <path d="M 25 -9 L 25 -4 M 22 -6 L 28 -6 M 22 -4 Q 25 -1, 28 -4" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Sailor Wayfarer Sunglasses */}
            <g transform="translate(13, -2)">
              <path d="M 0 3 L 11 3 L 9 10 Q 5 12, 1 10 Z" fill="#052E1D" stroke="#FF007F" strokeWidth="1.5" />
              <path d="M 14 3 L 25 3 L 23 10 Q 19 12, 15 10 Z" fill="#052E1D" stroke="#FF007F" strokeWidth="1.5" />
              <line x1="10" y1="4" x2="15" y2="4" stroke="#FF007F" strokeWidth="2" />
              <line x1="2" y1="5" x2="6" y2="9" stroke="#FAF7F2" strokeWidth="1" />
              <line x1="16" y1="5" x2="20" y2="9" stroke="#FAF7F2" strokeWidth="1" />
            </g>

            {/* Sailor Smirk */}
            <path d="M 20 12 Q 25 16, 29 12" stroke="#052E1D" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Waving Sailor Arm */}
            <motion.path
              animate={{ rotate: [-10, 15, -10] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              d="M 38 12 Q 52 2, 54 -8"
              stroke="#FFD700"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              style={{ transformOrigin: "38px 12px" }}
            />
            {/* Waving Hand */}
            <circle cx="55" cy="-10" r="3.5" fill="#FF007F" />

            {/* Lifebuoy Ring on Boat */}
            <circle cx="-2" cy="35" r="8" fill="#FF007F" stroke="#FAF7F2" strokeWidth="2" />
            <circle cx="-2" cy="35" r="4" fill="#052E1D" />
          </motion.g>
        </g>

      </svg>
    </motion.div>
  );
};
