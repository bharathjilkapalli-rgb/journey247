export type StackType = 
  | "ai" 
  | "frontend" 
  | "backend" 
  | "cybersecurity" 
  | "cloud" 
  | "blockchain";

export interface StackPreset {
  id: StackType;
  label: string;
  builderType: string;
  principle: string;
  tagline: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  glowColor: string;
  patternType: "neural" | "grid" | "server" | "cyber" | "cloud" | "mesh";
}

export interface BuilderPayload {
  name: string;
  stack: StackType;
  principle: string;
  selfieUrl: string | null;
  photoFilter: "warm" | "emerald" | "noir" | "sunset";
  builderNumber: string;
  issueDate: string;
  isoTimestamp: string;
}

export type IssuanceStep = 
  | "hero" 
  | "identity" 
  | "profile" 
  | "issuing" 
  | "issued";
