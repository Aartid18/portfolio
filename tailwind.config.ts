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
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        background: "#08090B",
        surface: "#101216",
        elevated: "#16191F",
        accent: {
          DEFAULT: "#C7FF3D",
          hover: "#d4ff66",
          muted: "rgba(199, 255, 61, 0.12)",
        },
        editorial: {
          text: "#F4F4F0",
          muted: "#8A8F98",
          border: "rgba(255, 255, 255, 0.10)",
        }
      },
    },
  },
  plugins: [],
};
export default config;
