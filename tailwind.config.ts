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
        heading: ["var(--font-heading)", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          cyan: "#00f2fe",
          blue: "#4facfe",
          pink: "#ec4899",
          purple: "#a855f7",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
        dark: {
          bg: "#0b0f19",
          surface: "#0f172a",
          card: "#151d30",
          border: "rgba(255, 255, 255, 0.15)",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(0, 242, 254, 0.20), transparent 70%)",
        "pink-glow": "radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.18), transparent 70%)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.85', filter: 'blur(35px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

