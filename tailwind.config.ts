import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "#030303",
        surface: "#0a0a0a",
        border: "rgba(255, 255, 255, 0.08)",
        accent: {
          teal: "#2dd4bf",
          violet: "#a78bfa",
          blue: "#60a5fa"
        }
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(45, 212, 191, 0.4)",
        glowViolet: "0 0 50px -10px rgba(167, 139, 250, 0.4)",
        glass: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)"
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        }
      }
    }
  },
  plugins: []
};

export default config;

