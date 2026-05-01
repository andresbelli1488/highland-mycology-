import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Mycology brand palette
        forest: {
          50: "#f1f5f1",
          100: "#dae6dc",
          200: "#b3ccb6",
          300: "#7fa583",
          400: "#4d7a55",
          500: "#2f5a39",
          600: "#214328",
          700: "#193220",
          800: "#11241a",
          900: "#0c1a13",
        },
        bone: {
          DEFAULT: "#f6f1e7",
          50: "#fbf8f1",
          100: "#f6f1e7",
          200: "#ece3cf",
        },
        mushroom: {
          DEFAULT: "#d8c39a",
          50: "#f3ecdb",
          100: "#e7d9bb",
          200: "#d8c39a",
          300: "#bda476",
          400: "#9a8456",
        },
        clay: {
          DEFAULT: "#7a4f31",
          50: "#e8d5c4",
          100: "#c69b7a",
          200: "#a06f4a",
          300: "#7a4f31",
          400: "#583821",
        },
        alpine: {
          DEFAULT: "#4878a6",
          50: "#e2ecf6",
          100: "#aac6e0",
          200: "#7ba3c8",
          300: "#4878a6",
          400: "#2f5984",
          500: "#1f3f60",
        },
        toxic: {
          DEFAULT: "#b8351f",
          50: "#fbe5e1",
          100: "#f1a89a",
          200: "#dc6850",
          300: "#b8351f",
          400: "#871f0f",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', '"Georgia"', "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
