import { z } from "zod";

export const profileSchema = z.object({
  name: z
    .string()
    .min(2, "Builder name must be at least 2 characters")
    .max(40, "Builder name must be under 40 characters"),
  stack: z.enum([
    "ai",
    "frontend",
    "backend",
    "cybersecurity",
    "cloud",
    "blockchain",
  ]),
  principle: z
    .string()
    .max(120, "Principle must be under 120 characters")
    .optional(),
  selfieUrl: z.string().min(1, "Selfie photo is required"),
  photoFilter: z.enum(["warm", "emerald", "noir", "sunset"]).default("warm"),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
