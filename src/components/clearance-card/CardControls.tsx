"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Check, Twitter, RefreshCw } from "lucide-react";
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-5xl mx-auto px-2 py-2"
    >
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Download */}
        <MagneticButton
          variant="gold"
          onClick={handleDownload}
          disabled={isExporting}
          className="px-6 py-2.5 text-xs font-bold"
        >
          <span className="flex items-center gap-2">
            {isExporting ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-forest-950" />
            ) : (
              <Download className="w-3.5 h-3.5 text-forest-950" />
            )}
            <span>{isExporting ? "Rendering..." : "Download Credential"}</span>
          </span>
        </MagneticButton>

        {/* Share */}
        <MagneticButton
          variant="pink"
          onClick={handleShareToX}
          className="px-6 py-2.5 text-xs font-bold"
        >
          <span className="flex items-center gap-2">
            {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Twitter className="w-3.5 h-3.5 text-white" />}
            <span>Share Journey</span>
          </span>
        </MagneticButton>

        {/* Reset */}
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-mono text-cream-400 hover:text-hh-yellow tracking-wider uppercase flex items-center gap-1.5 transition-colors px-3 py-2.5"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Begin Again</span>
        </button>
      </div>
    </motion.div>
  );
};
