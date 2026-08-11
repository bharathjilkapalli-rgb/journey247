import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#052E1D",
          900: "#0B4F32",
          800: "#0D5C3A",
          700: "#127A4E",
          600: "#169862",
          500: "#1DB979",
        },
        cream: {
          50: "#FAF7F2",
          100: "#F6F3EB",
          200: "#EFECE4",
          300: "#E2DDD2",
          400: "#C9C2B3",
        },
        hh: {
          pink: "#FF007F",
          "pink-light": "#FF4DA6",
          yellow: "#FACC15",
          "yellow-gold": "#FFD700",
          dark: "#082417",
          card: "#0C472E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Courier New", "monospace"],
      },
      boxShadow: {
        editorial: "0 20px 40px -15px rgba(5, 46, 29, 0.4)",
        "gold-glow": "0 0 25px rgba(250, 204, 21, 0.35)",
        "pink-glow": "0 0 25px rgba(255, 0, 127, 0.35)",
        "foil-seal": "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 215, 0, 0.5)",
      },
      keyframes: {
        pulseGleam: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" },
        },
        floatLeaves: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        sealRotate: {
          "0%": { transform: "rotate(0deg) scale(0.9)", opacity: "0" },
          "70%": { transform: "rotate(375deg) scale(1.1)", opacity: "1" },
          "100%": { transform: "rotate(360deg) scale(1)", opacity: "1" },
        },
        dustParticle: {
          "0%": { transform: "translateY(0) scale(0.8)", opacity: "0" },
          "50%": { opacity: "0.8" },
          "100%": { transform: "translateY(-80px) scale(1.2)", opacity: "0" },
        },
      },
      animation: {
        gleam: "pulseGleam 4s ease-in-out infinite",
        float: "floatLeaves 6s ease-in-out infinite",
        seal: "sealRotate 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        dust: "dustParticle 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
