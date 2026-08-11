"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { STACK_PRESETS } from "@/lib/stack-presets";
import { StackType } from "@/lib/types";
import { getRandomAIPrinciple } from "@/lib/ai-principles";
import { MagneticButton } from "../ui/MagneticButton";
import { Sparkles, Code2, Server, Lock, Cloud, Cpu, Layers, Compass, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface ProfileStepProps {
  initialName: string;
  initialStack: StackType;
  initialPrinciple: string;
  onComplete: (name: string, stack: StackType, principle: string) => void;
  onBack: () => void;
}

export const ProfileStep: React.FC<ProfileStepProps> = ({
  initialName,
  initialStack,
  initialPrinciple,
  onComplete,
  onBack,
}) => {
  const [name, setName] = useState(initialName);
  const [selectedStack, setSelectedStack] = useState<StackType>(initialStack);
  const [principle, setPrinciple] = useState(initialPrinciple || STACK_PRESETS[initialStack].principle);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  useEffect(() => {
    if (!initialPrinciple) {
      setPrinciple(STACK_PRESETS[selectedStack].principle);
    }
  }, [selectedStack, initialPrinciple]);

  const handleRegenerateAI = () => {
    setIsGeneratingAI(true);
    const newPrinciple = getRandomAIPrinciple(selectedStack, principle);
    setPrinciple(newPrinciple);
    toast.success("Generated new AI Builder Principle!");
    setTimeout(() => setIsGeneratingAI(false), 300);
  };

  const stackIcons: Record<StackType, React.ElementType> = {
    ai: Cpu,
    frontend: Layers,
    backend: Server,
    cybersecurity: Lock,
    cloud: Cloud,
    blockchain: Code2,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length >= 2) {
      onComplete(name.trim(), selectedStack, principle.trim());
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl mx-auto p-6 md:p-8 rounded-3xl bg-forest-900/90 border border-forest-700/80 shadow-editorial backdrop-blur-md"
    >
      <div className="text-center mb-8">
        <span className="text-[10px] font-mono tracking-[0.3em] text-hh-yellow uppercase">
          STEP 02 / BUILDER SPECIFICATION
        </span>
        <h2 className="font-serif text-3xl font-bold text-cream-50 mt-1">
          Builder Profile
        </h2>
        <p className="text-xs font-sans text-cream-300/80 mt-2">
          Define your track to mint your personalized Builder Journey Credential.
        </p>
      </div>

      <div className="space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-xs font-mono tracking-widest text-cream-300 uppercase mb-2">
            Builder Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Satoshi Nakamoto or Alex Rivera"
            className="w-full px-4 py-3.5 rounded-xl bg-forest-950/80 border border-forest-700 text-cream-50 placeholder-cream-400/40 font-sans focus:outline-none focus:border-hh-pink focus:ring-1 focus:ring-hh-pink transition-all"
          />
        </div>

        {/* Stack Selector Cards Grid */}
        <div>
          <label className="block text-xs font-mono tracking-widest text-cream-300 uppercase mb-2">
            Primary Builder Stack *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {(Object.keys(STACK_PRESETS) as StackType[]).map((st) => {
              const preset = STACK_PRESETS[st];
              const Icon = stackIcons[st];
              const isSelected = selectedStack === st;

              return (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedStack(st)}
                  className={`relative p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-forest-950 border-hh-pink shadow-gold-glow ring-1 ring-hh-pink/40"
                      : "bg-forest-950/50 border-forest-800 hover:border-forest-700 text-cream-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`p-2 rounded-xl ${
                        isSelected ? "bg-hh-pink/20 text-hh-pink" : "bg-forest-900 text-cream-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-hh-pink shadow-pink-glow animate-pulse" />
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-hh-yellow tracking-wider block">
                      {preset.label}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-cream-50 mt-0.5">
                      {preset.builderType}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic AI Principle Banner with AI Regenerate Button */}
        <div className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[9px] font-mono tracking-widest text-hh-pink uppercase">
                HH GOA BUILDER PRINCIPLE (AI)
              </span>
              <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-hh-pink/20 text-hh-pink">
                AI ACTIVE
              </span>
            </div>
            <p className="font-serif text-sm font-bold text-cream-100 italic">
              &ldquo;{principle}&rdquo;
            </p>
          </div>

          <button
            type="button"
            onClick={handleRegenerateAI}
            className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-forest-900 border border-yellow-500/40 text-hh-yellow hover:bg-forest-800 hover:border-hh-yellow transition-all flex-shrink-0"
            title="Regenerate Principle using AI"
          >
            {isGeneratingAI ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            <span className="text-[8px] font-mono uppercase mt-1 font-bold">REGENERATE</span>
          </button>
        </div>

        {/* Builder Principle Manual Override */}
        <div>
          <label className="block text-xs font-mono tracking-widest text-cream-300 uppercase mb-2">
            Customize Principle (Optional)
          </label>
          <input
            type="text"
            value={principle}
            onChange={(e) => setPrinciple(e.target.value)}
            placeholder="e.g. Build. Learn. Repeat. or Ship before perfect."
            className="w-full px-4 py-3 rounded-xl bg-forest-950/80 border border-forest-700 text-cream-50 placeholder-cream-400/40 font-sans text-xs focus:outline-none focus:border-hh-pink transition-all"
          />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-forest-800">
        <button
          type="button"
          onClick={onBack}
          className="text-xs font-mono text-cream-400 hover:text-cream-100 tracking-wider uppercase"
        >
          Back
        </button>

        <MagneticButton
          type="submit"
          variant="gold"
          disabled={name.trim().length < 2}
        >
          <span className="flex items-center gap-2">
            <span>Create Journey Credential</span>
            <Compass className="w-4 h-4" />
          </span>
        </MagneticButton>
      </div>
    </motion.form>
  );
};
