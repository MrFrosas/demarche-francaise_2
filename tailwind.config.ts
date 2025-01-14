import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Couleurs officielles du DSFR
        "france-blue": {
          DEFAULT: "#000091",
          hover: "#1212A5",
          active: "#2323E2",
        },
        "france-red": "#E1000F",
        "france-white": "#FFFFFF",
        "france-gray": {
          DEFAULT: "#F5F5FE",
          light: "#F9F9FC",
          medium: "#EEEEF9",
          dark: "#666666",
          mention: "#4B4B4B",
        },
        "france-text": {
          DEFAULT: "#3A3A3A",
          light: "#666666",
          dark: "#1E1E1E",
          disabled: "#929292",
        },
        "france-info": "#0063CB",
        "france-success": "#18753C",
        "france-warning": "#B34000",
        "france-error": "#CE0500",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#000091",
          foreground: "#FFFFFF",
          hover: "#1212A5",
        },
        secondary: {
          DEFAULT: "#E1000F",
          foreground: "#FFFFFF",
          hover: "#FF1A1A",
        },
        destructive: {
          DEFAULT: "#E1000F",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F5FE",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#F5F5FE",
          foreground: "#000091",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#3A3A3A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#3A3A3A",
        },
      },
      fontFamily: {
        marianne: ["Marianne", "sans-serif"],
      },
      fontSize: {
        // Tailles de police officielles du DSFR
        'fr-display-xl': ['48px', '56px'],
        'fr-display-lg': ['40px', '48px'],
        'fr-display': ['32px', '40px'],
        'fr-h1': ['40px', '48px'],
        'fr-h2': ['32px', '40px'],
        'fr-h3': ['28px', '36px'],
        'fr-h4': ['24px', '32px'],
        'fr-h5': ['20px', '28px'],
        'fr-h6': ['16px', '24px'],
        'fr-text-lg': ['20px', '28px'],
        'fr-text': ['16px', '24px'],
        'fr-text-sm': ['14px', '20px'],
        'fr-text-xs': ['12px', '16px'],
      },
      spacing: {
        // Espacements officiels du DSFR
        'fr-1v': '4px',
        'fr-2v': '8px',
        'fr-3v': '12px',
        'fr-4v': '16px',
        'fr-5v': '20px',
        'fr-6v': '24px',
        'fr-7v': '28px',
        'fr-8v': '32px',
        'fr-9v': '36px',
        'fr-10v': '40px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'france': '0 4px 12px rgba(0, 0, 145, 0.08)',
        'france-hover': '0 8px 24px rgba(0, 0, 145, 0.12)',
        // Ombres officielles du DSFR
        'fr-sm': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'fr-md': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'fr-lg': '0 8px 16px rgba(0, 0, 0, 0.16)',
        'fr-xl': '0 12px 24px rgba(0, 0, 0, 0.20)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;