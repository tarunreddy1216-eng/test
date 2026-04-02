import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        background: "#080808",
        foreground: "#F5F5F0",
        acid: "#C8FF00",
        electric: "#FF3BFF",
        ember: "#FF4D1C",
        "slate-900": "#0F0F0F",
        "slate-800": "#1A1A1A",
        "slate-700": "#2A2A2A",
        "slate-600": "#3A3A3A",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
