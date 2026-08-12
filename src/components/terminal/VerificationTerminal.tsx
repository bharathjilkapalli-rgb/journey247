"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LandingHero } from "../hero/LandingHero";
import { IdentityStep } from "./IdentityStep";
import { ProfileStep } from "./ProfileStep";
import { IssuanceSequence } from "./IssuanceSequence";
import { ClearanceCard } from "../clearance-card/ClearanceCard";
import { CardControls } from "../clearance-card/CardControls";
import { SealQuoteModal } from "../easter-eggs/EasterEggManager";
import { BuilderPayload, IssuanceStep, StackType } from "@/lib/types";
import { generateBuilderNumber, formatIssueDate } from "@/lib/utils";
import { STACK_PRESETS } from "@/lib/stack-presets";
import { toast } from "sonner";

export const VerificationTerminal: React.FC = () => {
  const [step, setStep] = useState<IssuanceStep>("hero");

  // Form State
  const [selfieUrl, setSelfieUrl] = useState<string | null>(null);
  const [photoFilter, setPhotoFilter] = useState<"warm" | "emerald" | "noir" | "sunset">("warm");
  const [builderName, setBuilderName] = useState("");
  const [stack, setStack] = useState<StackType>("frontend");
  const [principle, setPrinciple] = useState("");

  // Clearance Output Payload
  const [payload, setPayload] = useState<BuilderPayload | null>(null);

  // Easter Eggs State
  const [logoTapCount, setLogoTapCount] = useState(0);
  const [isSealModalOpen, setIsSealModalOpen] = useState(false);
  const [isQrHovered, setIsQrHovered] = useState(false);

  const handleLogoTap = () => {
    const newCount = logoTapCount + 1;
    setLogoTapCount(newCount);
    if (newCount === 5) {
      toast.success("247 Builders. One Community. Welcome to the Road to 247!", {
        duration: 5000,
      });
      setLogoTapCount(0);
    } else {
      toast.info(`Tap ${5 - newCount} more times for manifesto...`, { duration: 1500 });
    }
  };

  const handleIdentityComplete = (url: string, filter: "warm" | "emerald" | "noir" | "sunset") => {
    setSelfieUrl(url);
    setPhotoFilter(filter);
    setStep("profile");
  };

  const handleProfileComplete = (name: string, selectedStack: StackType, customPrinciple: string) => {
    setBuilderName(name);
    setStack(selectedStack);
    setPrinciple(customPrinciple);

    const generatedNumber = generateBuilderNumber();
    const currentDate = formatIssueDate();
    const isoTimestamp = new Date().toISOString();

    const newPayload: BuilderPayload = {
      name,
      stack: selectedStack,
      principle: customPrinciple || STACK_PRESETS[selectedStack].principle,
      selfieUrl,
      photoFilter,
      builderNumber: generatedNumber,
      issueDate: currentDate,
      isoTimestamp,
    };

    setPayload(newPayload);
    setStep("issuing");
  };

  const handleReset = () => {
    setStep("hero");
    setSelfieUrl(null);
    setBuilderName("");
    setPayload(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatePresence mode="wait">
        {step === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LandingHero
              onBegin={() => setStep("identity")}
              onLogoTap={handleLogoTap}
            />
          </motion.div>
        )}

        {step === "identity" && (
          <motion.div
            key="identity"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="py-12 px-4"
          >
            <IdentityStep
              initialSelfie={selfieUrl}
              initialFilter={photoFilter}
              onComplete={handleIdentityComplete}
              onBack={() => setStep("hero")}
            />
          </motion.div>
        )}

        {step === "profile" && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="py-12 px-4"
          >
            <ProfileStep
              initialName={builderName}
              initialStack={stack}
              initialPrinciple={principle}
              onComplete={handleProfileComplete}
              onBack={() => setStep("identity")}
            />
          </motion.div>
        )}

        {step === "issuing" && payload && (
          <motion.div
            key="issuing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="py-16 px-4 flex items-center justify-center min-h-[70vh]"
          >
            <IssuanceSequence
              name={payload.name}
              stack={payload.stack}
              builderNumber={payload.builderNumber}
              onComplete={() => setStep("issued")}
            />
          </motion.div>
        )}

        {step === "issued" && payload && (
          <motion.div
            key="issued"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="py-6 px-4 w-full flex flex-col items-center"
          >
            {/* QR hover tooltip */}
            {isQrHovered && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-forest-900 border border-yellow-400/80 text-hh-yellow font-mono text-xs font-bold tracking-widest uppercase shadow-xl"
              >
                Scan to Continue Your Journey
              </motion.div>
            )}

            {/* Card — auto-scaled to fit viewport, normal doc flow */}
            <ClearanceCard
              payload={payload}
              onSealClick={() => setIsSealModalOpen(true)}
              onQrHover={(hovered) => setIsQrHovered(hovered)}
            />

            {/* Controls — compact row below the card */}
            <CardControls
              builderNumber={payload.builderNumber}
              onReset={handleReset}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Egg Manifesto Modal */}
      <SealQuoteModal
        isOpen={isSealModalOpen}
        onClose={() => setIsSealModalOpen(false)}
      />
    </div>
  );
};
