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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Main accent - Teal
        accent: {
          DEFAULT: "#2dd4bf", // teal-400
          light: "#5eead4",   // teal-300
          dark: "#14b8a6",    // teal-500
        },
        // Secondary - Gold/Orange splashes
        gold: {
          DEFAULT: "#d97706", // amber-600
          light: "#f59e0b",   // amber-500
          dark: "#b45309",    // amber-700
        },
        // Deep purple background tones
        purple: {
          950: "#1a0a2e",     // deepest purple (main bg)
          900: "#2d1b4e",     // dark purple
          800: "#3d2a5c",     // medium dark
          700: "#4c3a6e",     // medium
          600: "#5c4a7e",     // lighter accent
        },
        // Light text colors
        light: "#e2e8f0",     // slate-200
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-down": "slideDown 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
