"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const AmbientDust: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorAbsPos, setCursorAbsPos] = useState({ x: -500, y: -500 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check mobile / prefers-reduced-motion (Section 8 Performance rule)
    const mediaQuery = window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsMobile(true);
    }

    const generated: Particle[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.4 + 0.15,
    }));
    setParticles(generated);

    const handleMouseMove = (e: MouseEvent) => {
      if (mediaQuery.matches) return;
      // Subconscious parallax movement max 6-10px (Section 4)
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
      // Cursor position for subtle sunlight aura
      setCursorAbsPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {/* SECTION 5: PREMIUM CURSOR SUNLIGHT AURA */}
      {!isMobile && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-300 ease-out pointer-events-none"
          style={{
            transform: `translate(${cursorAbsPos.x - 300}px, ${cursorAbsPos.y - 300}px)`,
            background: "radial-gradient(circle, rgba(250, 204, 21, 0.05) 0%, rgba(255, 0, 127, 0.02) 40%, transparent 70%)",
          }}
        />
      )}

      {/* SECTION 4: LAYER 3 - SUNLIGHT GRADIENT PARALLAX (8px) */}
      <motion.div
        animate={{ x: isMobile ? 0 : mousePos.x * 0.8, y: isMobile ? 0 : mousePos.y * 0.8 }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-amber-500/10 via-emerald-600/5 to-transparent blur-3xl rounded-full"
      />

      {/* SECTION 4: LAYER 4 - EDITORIAL AMBIENT SHAPES (4px) */}
      <motion.div
        animate={{ x: isMobile ? 0 : -mousePos.x * 0.4, y: isMobile ? 0 : -mousePos.y * 0.4 }}
        transition={{ type: "spring", stiffness: 50, damping: 25 }}
        className="absolute top-1/3 -right-32 w-[650px] h-[450px] bg-gradient-radial from-hh-pink/10 via-transparent to-transparent blur-3xl rounded-full"
      />

      {/* Floating Paper Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{ x: isMobile ? 0 : mousePos.x * 0.5, y: isMobile ? 0 : mousePos.y * 0.5 }}
          transition={{ type: "spring", stiffness: 70, damping: 25 }}
          className="absolute rounded-full bg-amber-200/50 blur-[0.5px] animate-dust"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};
