"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Check, Sparkles, Twitter, RefreshCw } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { exportCardToPng, openXShareIntent, copyCardTextToClipboard } from "@/lib/utils";
import { toast } from "sonner";

interface CardControlsProps {
  builderNumber: string;
  onReset: () => void;
}

export const CardControls: React.FC<CardControlsProps> = ({
  builderNumber,
  onReset,
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = async () => {
    const cardElement = document.getElementById("clearance-card-container");
    if (!cardElement) {
      toast.error("Credential element not found.");
      return;
    }

    setIsExporting(true);
    toast.info("Rendering high-res retina credential...");

    try {
      await exportCardToPng(cardElement, "road-to-247-builder-credential.png");
      toast.success("Builder Journey Credential downloaded!");
    } catch (err) {
      console.error("Export failed:", err);
      toast.error("Failed to generate PNG image.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleShareToX = async () => {
    await copyCardTextToClipboard(builderNumber);
    setCopied(true);
    toast.success("Credential text copied to clipboard!");

    setTimeout(() => {
      openXShareIntent(builderNumber);
      setCopied(false);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto mt-10 p-8 sm:p-10 rounded-3xl bg-forest-900/90 border border-forest-700/80 shadow-editorial text-center backdrop-blur-md"
    >
      {/* Ceremonial Ending Heading & Subheading (Principle 7) */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-hh-pink/20 text-hh-pink text-xs font-mono tracking-widest uppercase mb-3 border border-hh-pink/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BUILDER JOURNEY READY</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50 tracking-tight">
          Your Builder Journey Starts Here
        </h2>
        <p className="font-sans text-base text-cream-200/90 mt-2 max-w-md mx-auto leading-relaxed">
          The Road to 247 begins with your first step.
        </p>
        <p className="font-serif italic text-lg text-hh-yellow mt-2">
          &ldquo;Hope to see you in Goa.&rdquo;
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <MagneticButton
          variant="gold"
          onClick={handleDownload}
          disabled={isExporting}
          className="px-8 py-4 text-xs font-bold"
        >
          <span className="flex items-center gap-2">
            {isExporting ? (
              <RefreshCw className="w-4 h-4 animate-spin text-forest-950" />
            ) : (
              <Download className="w-4 h-4 text-forest-950" />
            )}
            <span>{isExporting ? "Rendering..." : "Download Journey Credential"}</span>
          </span>
        </MagneticButton>

        <MagneticButton
          variant="pink"
          onClick={handleShareToX}
          className="px-8 py-4 text-xs font-bold"
        >
          <span className="flex items-center gap-2">
            {copied ? <Check className="w-4 h-4 text-white" /> : <Twitter className="w-4 h-4 text-white" />}
            <span>Share Your Journey</span>
          </span>
        </MagneticButton>
      </div>

      {/* Reset CTA */}
      <div className="mt-8 pt-6 border-t border-forest-800 flex justify-center">
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-mono text-cream-400 hover:text-hh-yellow tracking-wider uppercase flex items-center gap-2 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Begin Another Journey</span>
        </button>
      </div>
    </motion.div>
  );
};
