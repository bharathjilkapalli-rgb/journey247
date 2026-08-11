"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, Lock, Sparkles } from "lucide-react";

export const SelectionJourney: React.FC = () => {
  const steps = [
    {
      phase: "STAGE ONE",
      title: "Open Trials",
      when: "August 2026",
      icon: Compass,
      desc: "Skill-based challenges open to everyone. Quality is set at the door.",
      badge: "ACTIVE STAGE",
      active: true,
    },
    {
      phase: "STAGE TWO",
      title: "Partner Trials",
      when: "September 2026",
      icon: ShieldCheck,
      desc: "Partner-focused tracks matched to specific builder interests & skills.",
      badge: "UPCOMING",
      active: false,
    },
    {
      phase: "COMMITMENT",
      title: "RSVP & Stake",
      when: "Late September",
      icon: Lock,
      desc: "Final confirmation by staking. Seats are locked once every member confirms.",
      badge: "UPCOMING",
      active: false,
    },
    {
      phase: "THE BEACH",
      title: "Residency",
      when: "28–31 Oct 2026",
      icon: Sparkles,
      desc: "247 builders come together to build, ship, and launch projects in Goa.",
      badge: "DESTINATION",
      active: false,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-hh-pink mb-2">
          SELECTION FRAMEWORK & TIMELINE
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-bold">
          The Road to 247
        </h2>
        <p className="text-cream-300/80 text-sm max-w-lg mx-auto mt-2 font-sans">
          How builders earn their seat at Hacker House Goa 2026. A rolling challenge, not a waiting list.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 ${
                step.active
                  ? "bg-forest-900/90 border-hh-pink/50 shadow-editorial ring-1 ring-hh-pink/30"
                  : "bg-forest-950/60 border-forest-800/80 hover:border-forest-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-hh-yellow uppercase">
                    {step.phase}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                      step.active
                        ? "bg-hh-pink/20 text-hh-pink border-hh-pink/40"
                        : "bg-forest-900 text-cream-300/60 border-forest-800"
                    }`}
                  >
                    {step.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-xl ${
                      step.active
                        ? "bg-hh-pink/10 text-hh-pink"
                        : "bg-forest-900 text-cream-300/60"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-cream-50">
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-hh-yellow/90">
                      {step.when}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-cream-300/70 leading-relaxed mt-2 font-sans">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
