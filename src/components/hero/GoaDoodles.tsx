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

          {/* Sun Face Features Behind Sunglasses */}
          <motion.path
            d="M 33 44 Q 40 38, 47 44"
            stroke="#052E1D"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{ scaleY: [1, 0.2, 1, 0.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <circle cx="60" cy="42" r="3.5" fill="#052E1D" />
          <circle cx="61.5" cy="40.5" r="1.2" fill="#FAF7F2" />

          <path d="M 40 56 Q 50 66, 60 56" stroke="#052E1D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <motion.path
            d="M 47 58 Q 50 65, 53 58 Z"
            fill="#FF007F"
            stroke="#052E1D"
            strokeWidth="1"
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated Sunglasses */}
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
            <path d="M 0 4 L 20 4 L 17 17 Q 10 21, 3 17 Z" fill="#052E1D" stroke="#FF007F" strokeWidth="2" />
            <path d="M 27 4 L 47 4 L 44 17 Q 37 21, 30 17 Z" fill="#052E1D" stroke="#FF007F" strokeWidth="2" />
            <line x1="20" y1="6" x2="27" y2="6" stroke="#FF007F" strokeWidth="2.5" />
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
            2. LEFT SIDE: PROMINENT LIGHTHOUSE DOODLE 🚨🚨
            ================================================== */}
        <g transform="translate(25, 340)">
          {/* Lighthouse Base Rocks */}
          <path d="M -10 380 Q 30 365, 80 380 Q 110 370, 130 380 Z" fill="#0B4F32" stroke="#FFD700" strokeWidth="2.5" />
          
          {/* Lighthouse Main Tapered Tower */}
          <path d="M 25 375 L 42 70 L 78 70 L 95 375 Z" fill="#053B1F" stroke="#FFD700" strokeWidth="3.5" />

          {/* Red & Gold Stripes */}
          <path d="M 38 130 L 82 130 L 87 200 L 33 200 Z" fill="#FF007F" opacity="0.9" />
          <path d="M 30 260 L 90 260 L 93 320 L 27 320 Z" fill="#FF007F" opacity="0.9" />
          <line x1="38" y1="130" x2="82" y2="130" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="33" y1="200" x2="87" y2="200" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="30" y1="260" x2="90" y2="260" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="27" y1="320" x2="93" y2="320" stroke="#FFD700" strokeWidth="2.5" />

          {/* Balcony Railing */}
          <rect x="34" y="60" width="52" height="10" rx="3" fill="#FFD700" stroke="#052E1D" strokeWidth="2" />
          <line x1="36" y1="60" x2="36" y2="70" stroke="#052E1D" strokeWidth="1.5" />
          <line x1="48" y1="60" x2="48" y2="70" stroke="#052E1D" strokeWidth="1.5" />
          <line x1="60" y1="60" x2="60" y2="70" stroke="#052E1D" strokeWidth="1.5" />
          <line x1="72" y1="60" x2="72" y2="70" stroke="#052E1D" strokeWidth="1.5" />
          <line x1="84" y1="60" x2="84" y2="70" stroke="#052E1D" strokeWidth="1.5" />

          {/* Lantern Room Glass */}
          <rect x="40" y="24" width="40" height="36" rx="4" fill="#FFD700" stroke="#FF007F" strokeWidth="2.5" />
          <circle cx="60" cy="42" r="10" fill="#FAF7F2" />

          {/* Dome Top & Spire */}
          <path d="M 40 24 Q 60 4, 80 24 Z" fill="#FF007F" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="60" y1="4" x2="60" y2="-12" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="-14" r="4" fill="#FFD700" />

          {/* Rotating Beaming Light Rays */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "60px 42px" }}
          >
            <polygon points="60,42 220,10 240,75" fill="url(#leftLightGradient)" opacity="0.6" />
            <polygon points="60,42 -100,10 -120,75" fill="url(#leftLightGradient)" opacity="0.6" />
          </motion.g>
          <defs>
            <linearGradient id="leftLightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>
          </defs>
        </g>

        {/* ===== LEFT: SURFBOARDS ===== */}
        <g transform="translate(70, 710) rotate(-18)">
          <path d="M 0 0 Q 18 -60, 35 -120 Q 52 -60, 70 0 Z" fill="#FF007F" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="35" y1="-115" x2="35" y2="-5" stroke="#FFD700" strokeWidth="2.5" />
        </g>

        {/* ==================================================
            3. RIGHT SIDE: PROMINENT LIGHTHOUSE DOODLE 🚨🚨
            ================================================== */}
        <g transform="translate(1330, 320)">
          {/* Base */}
          <path d="M -15 390 Q 25 375, 75 390 Q 105 380, 125 390 Z" fill="#0B4F32" stroke="#FFD700" strokeWidth="2.5" />

          {/* Main Tapered Tower */}
          <path d="M 20 385 L 38 70 L 74 70 L 92 385 Z" fill="#053B1F" stroke="#FFD700" strokeWidth="3.5" />

          {/* Pink/Yellow Stripes */}
          <path d="M 34 130 L 78 130 L 83 200 L 29 200 Z" fill="#FF007F" opacity="0.9" />
          <path d="M 26 260 L 86 260 L 89 320 L 23 320 Z" fill="#FF007F" opacity="0.9" />
          <line x1="34" y1="130" x2="78" y2="130" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="29" y1="200" x2="83" y2="200" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="26" y1="260" x2="86" y2="260" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="23" y1="320" x2="89" y2="320" stroke="#FFD700" strokeWidth="2.5" />

          {/* Balcony Railing */}
          <rect x="30" y="60" width="52" height="10" rx="3" fill="#FFD700" stroke="#052E1D" strokeWidth="2" />
          <line x1="32" y1="60" x2="32" y2="70" stroke="#052E1D" strokeWidth="1.5" />
          <line x1="44" y1="60" x2="44" y2="70" stroke="#052E1D" strokeWidth="1.5" />
          <line x1="56" y1="60" x2="56" y2="70" stroke="#052E1D" strokeWidth="1.5" />
          <line x1="68" y1="60" x2="68" y2="70" stroke="#052E1D" strokeWidth="1.5" />
          <line x1="80" y1="60" x2="80" y2="70" stroke="#052E1D" strokeWidth="1.5" />

          {/* Lantern Room */}
          <rect x="36" y="24" width="40" height="36" rx="4" fill="#FFD700" stroke="#FF007F" strokeWidth="2.5" />
          <circle cx="56" cy="42" r="10" fill="#FAF7F2" />

          {/* Dome Top & Spire */}
          <path d="M 36 24 Q 56 4, 76 24 Z" fill="#FF007F" stroke="#FFD700" strokeWidth="2.5" />
          <line x1="56" y1="4" x2="56" y2="-12" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
          <circle cx="56" cy="-14" r="4" fill="#FFD700" />

          {/* Rotating Beaming Light Rays */}
          <motion.g
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "56px 42px" }}
          >
            <polygon points="56,42 -100,10 -120,75" fill="url(#rightLightGradient)" opacity="0.6" />
            <polygon points="56,42 220,10 240,75" fill="url(#rightLightGradient)" opacity="0.6" />
          </motion.g>
          <defs>
            <linearGradient id="rightLightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>
          </defs>
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
            <path d="M 0 10 L 40 10 L 32 25 L 8 25 Z" fill="#FFD700" stroke="#052E1D" strokeWidth="2" />
            <path d="M 20 10 L 20 -18 L 36 6 Z" fill="#FF007F" stroke="#FAF7F2" strokeWidth="1.5" />
            <path d="M 20 -18 L 12 -23 L 20 -28 Z" fill="#FFD700" />
          </motion.g>

          {/* Animated Sailing Paper Boat 2 */}
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
            <path d="M 0 10 L 34 10 L 27 22 L 7 22 Z" fill="#FAF7F2" stroke="#FF007F" strokeWidth="2" />
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
            <path d="M -10 25 L 60 25 L 50 45 L 0 45 Z" fill="#0B6B3A" stroke="#FFD700" strokeWidth="2.5" />
            <line x1="5" y1="35" x2="45" y2="35" stroke="#FF007F" strokeWidth="2" />

            <circle cx="25" cy="5" r="14" fill="#FFD700" stroke="#052E1D" strokeWidth="2" />

            <path d="M 10 0 C 10 -12, 40 -12, 40 0 Z" fill="#FAF7F2" stroke="#FF007F" strokeWidth="2" />
            <rect x="8" y="-2" width="34" height="6" rx="2" fill="#0B6B3A" stroke="#FFD700" strokeWidth="1.5" />
            <path d="M 25 -9 L 25 -4 M 22 -6 L 28 -6 M 22 -4 Q 25 -1, 28 -4" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            <g transform="translate(13, -2)">
              <path d="M 0 3 L 11 3 L 9 10 Q 5 12, 1 10 Z" fill="#052E1D" stroke="#FF007F" strokeWidth="1.5" />
              <path d="M 14 3 L 25 3 L 23 10 Q 19 12, 15 10 Z" fill="#052E1D" stroke="#FF007F" strokeWidth="1.5" />
              <line x1="10" y1="4" x2="15" y2="4" stroke="#FF007F" strokeWidth="2" />
              <line x1="2" y1="5" x2="6" y2="9" stroke="#FAF7F2" strokeWidth="1" />
              <line x1="16" y1="5" x2="20" y2="9" stroke="#FAF7F2" strokeWidth="1" />
            </g>

            <path d="M 20 12 Q 25 16, 29 12" stroke="#052E1D" strokeWidth="2" strokeLinecap="round" fill="none" />

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
            <circle cx="55" cy="-10" r="3.5" fill="#FF007F" />

            <circle cx="-2" cy="35" r="8" fill="#FF007F" stroke="#FAF7F2" strokeWidth="2" />
            <circle cx="-2" cy="35" r="4" fill="#052E1D" />
          </motion.g>
        </g>

      </svg>
    </motion.div>
  );
};
