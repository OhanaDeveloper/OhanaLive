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
        // Primary - Black/Dark Grey
        dark: {
          950: "#0a0a0a",     // near black
          900: "#1a1a1a",     // very dark grey
          800: "#2a2a2a",     // dark grey
          700: "#3a3a3a",     // medium dark grey
          600: "#4a4a4a",     // medium grey
        },
        // Secondary - Calming Teal (main brand color)
        teal: {
          DEFAULT: "#14b8a6", // teal-500 - main teal
          light: "#2dd4bf",   // teal-400 - lighter teal
          dark: "#0d9488",    // teal-600 - darker teal
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
        },
        // Accent alias (points to teal for compatibility)
        accent: {
          DEFAULT: "#14b8a6",
          light: "#2dd4bf",
          dark: "#0d9488",
        },
        // Accent - Purple (for alternate states/hover)
        purple: {
          DEFAULT: "#a855f7", // purple-500
          light: "#c084fc",   // purple-400
          dark: "#9333ea",    // purple-600
          50: "#faf5ff",
          100: "#f3e8ff",
        },
        // Accent - Gold (for highlights/CTAs)
        gold: {
          DEFAULT: "#f59e0b", // amber-500
          light: "#fbbf24",   // amber-400
          dark: "#d97706",    // amber-600
          50: "#fffbeb",
          100: "#fef3c7",
        },
        // Text colors
        light: "#f5f5f5",
      },
      fontFamily: {
        ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
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
