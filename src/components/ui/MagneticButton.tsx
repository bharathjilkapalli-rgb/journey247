"use client";

import React from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "gold" | "pink";
  type?: "button" | "submit";
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}) => {
  const variantStyles = {
    primary: "bg-forest-800 hover:bg-forest-700 text-cream-50 border border-yellow-500/30 hover:border-yellow-400/60 shadow-lg shadow-forest-950/50",
    secondary: "bg-forest-950/80 hover:bg-forest-900 text-cream-100 border border-emerald-500/30 hover:border-cream-300/40",
    gold: "bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-forest-950 font-semibold border border-yellow-300 shadow-gold-glow hover:brightness-110",
    pink: "bg-gradient-to-r from-hh-pink to-pink-600 text-white font-semibold border border-pink-400/50 shadow-pink-glow hover:brightness-110",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
      className={`relative inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
