"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, CheckCircle2 } from "lucide-react";

interface SealQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SealQuoteModal: React.FC<SealQuoteModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-lg p-8 rounded-3xl bg-forest-950 border-2 border-yellow-500/50 shadow-2xl relative text-center paper-texture"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-forest-900 text-cream-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full gold-foil-bg mx-auto p-1 mb-4 flex items-center justify-center shadow-gold-glow">
              <div className="w-full h-full rounded-full bg-forest-950 flex items-center justify-center text-hh-yellow">
                <Award className="w-8 h-8" />
              </div>
            </div>

            <span className="text-[10px] font-mono tracking-[0.3em] text-hh-pink uppercase block mb-1">
              SELECTION FRAMEWORK PRINCIPLES
            </span>
            <h3 className="font-serif text-2xl font-bold text-cream-50 mb-6">
              Hacker House Goa Manifesto
            </h3>

            <div className="space-y-4 text-left font-sans text-xs text-cream-200/90 bg-forest-900/60 p-5 rounded-2xl border border-forest-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-hh-yellow flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-cream-50 block font-serif">Everyone builds. No watching.</strong>
                  You earn your spot by completing skill-based tasks.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-hh-yellow flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-cream-50 block font-serif">Quality is set at the door.</strong>
                  Every builder completes and submits their own task.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-hh-yellow flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-cream-50 block font-serif">A rolling challenge, not a waiting list.</strong>
                  New tasks open across August and September.
                </p>
              </div>
            </div>

            <p className="font-serif italic text-sm text-hh-yellow mt-6">
              &ldquo;Hope to see you in Goa.&rdquo;
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
