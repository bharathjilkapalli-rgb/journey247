"use client";

import React from "react";
import { StackType } from "@/lib/types";

export const StackBackground: React.FC<{ stack: StackType }> = ({ stack }) => {
  switch (stack) {
    case "ai":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="neural" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="2.5" fill="#00F0FF" />
            <line x1="30" y1="30" x2="60" y2="0" stroke="#00F0FF" strokeWidth="0.5" />
            <line x1="30" y1="30" x2="0" y2="60" stroke="#00F0FF" strokeWidth="0.5" />
            <line x1="30" y1="30" x2="60" y2="30" stroke="#00F0FF" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      );
    case "frontend":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF007F" strokeWidth="0.6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      );
    case "backend":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="server" width="80" height="40" patternUnits="userSpaceOnUse">
            <rect x="10" y="10" width="60" height="20" rx="3" fill="none" stroke="#FACC15" strokeWidth="0.8" />
            <circle cx="20" cy="20" r="2" fill="#FACC15" />
            <circle cx="28" cy="20" r="2" fill="#FACC15" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#server)" />
        </svg>
      );
    case "cybersecurity":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cyber" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M25,0 L50,15 L50,35 L25,50 L0,35 L0,15 Z" fill="none" stroke="#FF3344" strokeWidth="0.6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cyber)" />
        </svg>
      );
    case "cloud":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cloud" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="10" fill="none" stroke="#10B981" strokeWidth="0.6" />
            <circle cx="40" cy="20" r="8" fill="none" stroke="#10B981" strokeWidth="0.6" />
            <circle cx="30" cy="35" r="12" fill="none" stroke="#10B981" strokeWidth="0.6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cloud)" />
        </svg>
      );
    case "blockchain":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="mesh" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M22 0 L44 11 L44 33 L22 44 L0 33 L0 11 Z" fill="none" stroke="#F59E0B" strokeWidth="0.6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      );
    default:
      return null;
  }
};
