import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "monospace"],
        display: ["var(--font-mono)", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        background: "#050505",
        surface: "#0d0d0d",
        elevated: "#141414",
        accent: {
          DEFAULT: "#39ff88",
          hover: "#52ff97",
          muted: "rgba(57, 255, 136, 0.12)",
        },
        terminal: {
          text: "#e8e8e3",
          muted: "#737373",
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
    },
  },
  plugins: [],
};
export default config;
