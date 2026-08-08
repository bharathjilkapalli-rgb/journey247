"use client";

import React, { useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Camera, CheckCircle2, RefreshCw, X, Video } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { toast } from "sonner";

interface IdentityStepProps {
  initialSelfie: string | null;
  initialFilter: "warm" | "emerald" | "noir" | "sunset";
  onComplete: (selfieUrl: string, filter: "warm" | "emerald" | "noir" | "sunset") => void;
  onBack: () => void;
}

export const IdentityStep: React.FC<IdentityStepProps> = ({
  initialSelfie,
  initialFilter,
  onComplete,
  onBack,
}) => {
  const [selfieUrl, setSelfieUrl] = useState<string | null>(initialSelfie);
  const [filter, setFilter] = useState<"warm" | "emerald" | "noir" | "sunset">(initialFilter);
  const [isProcessing, setIsProcessing] = useState(false);

  // Webcam Capture State (Desktop)
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [webcamStream, setWebcamStream] = useState<MediaStream | null>(null);
  const [capturedTempUrl, setCapturedTempUrl] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileCameraInputRef = useRef<HTMLInputElement>(null);

  const processFile = async (file: File) => {
    setIsProcessing(true);
    toast.info("Processing identity photo...");

    try {
      let finalFile: Blob = file;

      if (file.name.toLowerCase().endsWith(".heic") || file.type.includes("heic")) {
        toast.info("Converting HEIC image...");
        const heic2anyModule = await import("heic2any");
        const heic2anyFn = heic2anyModule.default || heic2anyModule;
        const converted = await heic2anyFn({
          blob: file,
          toType: "image/jpeg",
          quality: 0.9,
        });
        finalFile = Array.isArray(converted) ? converted[0] : converted;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelfieUrl(result);
        setIsProcessing(false);
        toast.success("Identity selfie prepared!");
      };
      reader.readAsDataURL(finalFile);
    } catch (err) {
      console.error("Photo processing failed:", err);
      toast.error("Failed to process photo. Please try a standard JPG or PNG.");
      setIsProcessing(false);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      processFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp", ".heic"],
    },
    maxFiles: 1,
  });

  // Open Live Camera Capture (Webcam for Desktop / Fallback to Mobile native capture)
  const handleOpenCapture = async () => {
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile && mobileCameraInputRef.current) {
      mobileCameraInputRef.current.click();
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 640 } },
      });
      setWebcamStream(stream);
      setIsWebcamOpen(true);
      setCapturedTempUrl(null);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 200);
    } catch (err) {
      console.warn("Webcam access failed, opening file capture:", err);
      if (mobileCameraInputRef.current) {
        mobileCameraInputRef.current.click();
      } else {
        toast.error("Camera access unavailable. Please choose file upload.");
      }
    }
  };

  const stopWebcam = () => {
    if (webcamStream) {
      webcamStream.getTracks().forEach((t) => t.stop());
      setWebcamStream(null);
    }
    setIsWebcamOpen(false);
    setCapturedTempUrl(null);
  };

  const handleTakeSnapshot = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 640;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
      setCapturedTempUrl(dataUrl);
    }
  };

  const handleUseCapturedPhoto = () => {
    if (capturedTempUrl) {
      setSelfieUrl(capturedTempUrl);
      stopWebcam();
      toast.success("Webcam photo captured!");
    }
  };

  const handleMobileCameraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const filterOptions = [
    { id: "warm", label: "Editorial Warm", class: "filter-warm" },
    { id: "emerald", label: "Forest Emerald", class: "filter-emerald" },
    { id: "noir", label: "Classic Noir", class: "filter-noir" },
    { id: "sunset", label: "Goa Sunset", class: "filter-sunset" },
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-xl mx-auto p-6 md:p-8 rounded-3xl bg-forest-900/90 border border-forest-700/80 shadow-editorial backdrop-blur-md relative"
    >
      {/* Hidden Native Mobile Camera Input */}
      <input
        ref={mobileCameraInputRef}
        type="file"
        accept="image/*"
        capture="user"
        onChange={handleMobileCameraChange}
        className="hidden"
      />

      <div className="text-center mb-8">
        <span className="text-[10px] font-mono tracking-[0.3em] text-hh-yellow uppercase">
          STEP 01 / BUILDER IDENTITY
        </span>
        <h2 className="font-serif text-3xl font-bold text-cream-50 mt-1">
          Identity Photo
        </h2>
        <p className="text-xs font-sans text-cream-300/80 mt-2">
          Your photo will be integrated into your official Builder Journey Credential.
        </p>
      </div>

      {!selfieUrl ? (
        <div className="space-y-4">
          {/* Option 1: Drag and Drop Upload */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[200px] ${
              isDragActive
                ? "border-hh-pink bg-hh-pink/10"
                : "border-forest-700 hover:border-hh-yellow/60 bg-forest-950/60"
            }`}
          >
            <input {...getInputProps()} />
            {isProcessing ? (
              <div className="flex flex-col items-center gap-3">
                <RefreshCw className="w-10 h-10 text-hh-yellow animate-spin" />
                <p className="text-sm font-mono text-cream-200">Processing Image...</p>
              </div>
            ) : (
              <>
                <div className="w-14 h-14 rounded-full bg-forest-800 flex items-center justify-center text-hh-pink mb-3 border border-forest-700">
                  <Upload className="w-7 h-7" />
                </div>
                <p className="text-sm font-medium text-cream-100 mb-1">
                  Option 1: <span className="text-hh-yellow underline">Upload From Device</span>
                </p>
                <p className="text-xs font-mono text-cream-400/70">
                  SUPPORTS JPG, PNG, WEBP, HEIC
                </p>
              </>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-2 text-xs font-mono text-cream-400/60 uppercase">
            <div className="flex-1 h-px bg-forest-800" />
            <span>OR</span>
            <div className="flex-1 h-px bg-forest-800" />
          </div>

          {/* Option 2: Live Camera Capture */}
          <button
            type="button"
            onClick={handleOpenCapture}
            className="w-full py-4 rounded-2xl bg-forest-950/90 border border-yellow-500/40 hover:border-hh-yellow text-cream-100 font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-3 shadow-md hover:bg-forest-900 transition-all cursor-pointer"
          >
            <Camera className="w-5 h-5 text-hh-pink" />
            <span>Option 2: Capture Photo (Camera)</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <div className="relative group">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-hh-pink/60 shadow-gold-glow p-1 bg-forest-950">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                {/* eslint-disable-next-html-image-element */}
                <img
                  src={selfieUrl}
                  alt="Identity Preview"
                  className={`w-full h-full object-cover ${filterOptions.find((f) => f.id === filter)?.class}`}
                />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-4">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button
                  type="button"
                  className="text-xs font-mono text-cream-300 hover:text-hh-yellow flex items-center gap-1.5"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload File</span>
                </button>
              </div>

              <span className="text-forest-700">|</span>

              <button
                type="button"
                onClick={handleOpenCapture}
                className="text-xs font-mono text-cream-300 hover:text-hh-pink flex items-center gap-1.5"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Retake Camera</span>
              </button>
            </div>
          </div>

          <div className="w-full">
            <label className="block text-[11px] font-mono text-cream-300 uppercase tracking-widest text-center mb-3">
              Editorial Photo Grade
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {filterOptions.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono transition-all border ${
                    filter === f.id
                      ? "bg-hh-pink/20 border-hh-pink text-white font-bold"
                      : "bg-forest-950/60 border-forest-800 text-cream-300 hover:border-forest-700"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* WEBCAM CAMERA MODAL (Desktop WebRTC Live Preview) */}
      <AnimatePresence>
        {isWebcamOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md p-6 rounded-3xl bg-forest-950 border-2 border-yellow-500/50 shadow-2xl relative text-center"
            >
              <button
                type="button"
                onClick={stopWebcam}
                className="absolute top-4 right-4 p-2 rounded-full bg-forest-900 text-cream-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 mb-4 text-xs font-mono tracking-widest text-hh-yellow uppercase">
                <Video className="w-4 h-4 text-hh-pink" />
                <span>LIVE CAMERA CAPTURE</span>
              </div>

              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-hh-pink/80 mx-auto bg-black relative mb-6">
                {!capturedTempUrl ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover transform -scale-x-100"
                  />
                ) : (
                  /* eslint-disable-next-html-image-element */
                  <img
                    src={capturedTempUrl}
                    alt="Captured Preview"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="flex items-center justify-center gap-3">
                {!capturedTempUrl ? (
                  <button
                    type="button"
                    onClick={handleTakeSnapshot}
                    className="px-6 py-3 rounded-xl bg-hh-pink text-white font-mono text-xs font-bold uppercase tracking-wider shadow-pink-glow hover:brightness-110"
                  >
                    Take Photo
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setCapturedTempUrl(null)}
                      className="px-4 py-2.5 rounded-xl bg-forest-900 text-cream-200 border border-forest-700 font-mono text-xs uppercase"
                    >
                      Retake
                    </button>
                    <button
                      type="button"
                      onClick={handleUseCapturedPhoto}
                      className="px-6 py-2.5 rounded-xl bg-hh-yellow text-forest-950 font-mono text-xs font-bold uppercase tracking-wider shadow-gold-glow"
                    >
                      Use Photo
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-forest-800">
        <button
          type="button"
          onClick={onBack}
          className="text-xs font-mono text-cream-400 hover:text-cream-100 tracking-wider uppercase"
        >
          Back
        </button>

        <MagneticButton
          variant="gold"
          disabled={!selfieUrl || isProcessing}
          onClick={() => selfieUrl && onComplete(selfieUrl, filter)}
        >
          <span className="flex items-center gap-2">
            <span>Proceed to Profile</span>
            <CheckCircle2 className="w-4 h-4" />
          </span>
        </MagneticButton>
      </div>
    </motion.div>
  );
};
