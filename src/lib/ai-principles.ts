import { StackType } from "./types";

const TRACK_PRINCIPLES: Record<StackType, string[]> = {
  ai: [
    "Build. Learn. Repeat.",
    "Teach machines to serve humans.",
    "Intelligence is crafted in iterations.",
    "Models are cheap. High-signal data is gold.",
    "Reason clearly. Ship boldly.",
    "Fewer halluncinations. More proof of building.",
  ],
  frontend: [
    "Everyone builds. No watching.",
    "Craft interfaces that bring joy.",
    "Pixel perfection is the baseline.",
    "User experience is our ultimate signal.",
    "Fast, accessible, unforgettable.",
    "Frictionless interaction above all.",
  ],
  backend: [
    "Ship before perfect.",
    "Power everything behind the scenes.",
    "Zero downtime. High throughput.",
    "Resilience is engineered, not wished.",
    "Systems speak louder than words.",
    "Scale without limits.",
  ],
  cybersecurity: [
    "Quality is set at the door.",
    "Protect what matters most.",
    "Cryptographic trust in every line.",
    "Defend by design.",
    "Verify everything. Assume nothing.",
    "Impenetrable protocols, clean code.",
  ],
  cloud: [
    "Build things that matter.",
    "Orchestrate chaos into harmony.",
    "Infrastructure as living code.",
    "Deploy continuously. Rest never.",
    "High availability by default.",
    "Scale effortlessly under pressure.",
  ],
  blockchain: [
    "Keep showing up.",
    "Build trust through immutable code.",
    "Decentralize power. Empower builders.",
    "State transitions verify truth.",
    "Consensus through execution.",
    "Code is law. Quality is mandatory.",
  ],
};

export function getRandomAIPrinciple(stack: StackType, currentPrinciple?: string): string {
  const list = TRACK_PRINCIPLES[stack] || TRACK_PRINCIPLES.frontend;
  const filtered = list.filter((p) => p !== currentPrinciple);
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex] || list[0];
}
