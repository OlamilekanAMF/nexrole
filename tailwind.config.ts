import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#F8FAFC",
          deep: "#F8FAFC",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
        electric: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
          glow: "rgba(37, 99, 235, 0.2)",
        },
        gold: {
          DEFAULT: "#D97706",
          light: "#F59E0B",
          dark: "#B45309",
          glow: "rgba(217, 119, 6, 0.2)",
        },
        text: {
          primary: "#0F172A",
          muted: "#64748B",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
      },
      backdropBlur: {
        glass: "20px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.06)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 16px 32px -10px rgba(0, 0, 0, 0.08)",
        "glow-blue": "0 0 25px rgba(37, 99, 235, 0.2)",
        "glow-gold": "0 0 25px rgba(217, 119, 6, 0.2)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(217, 119, 6, 0.25)" },
          "50%": { boxShadow: "0 0 30px rgba(217, 119, 6, 0.5)" },
        },
        gradientLoop: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "pulse-glow": "pulseGlow 2.5s infinite",
        "gradient-loop": "gradientLoop 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
