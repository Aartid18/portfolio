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
        background: "#0a0b0a",
        surface: "#131513",
        elevated: "#171917",
        accent: {
          DEFAULT: "#3ef281",
          hover: "#59f493",
          muted: "rgba(62, 242, 129, 0.12)",
          mint: "#7fdca4",
          sage: "#4a5a4f",
        },
        designer: {
          text: "#e9ece7",
          muted: "#8a938a",
          border: "rgba(255, 255, 255, 0.06)",
        }
      },
    },
  },
  plugins: [],
};
export default config;
