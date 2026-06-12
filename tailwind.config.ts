import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050506",
        graphite: "#111216",
        charcoal: "#1A1B20",
        champagne: "#C8A96A",
        silver: "#B7BBC3",
        ember: "#6D1E24",
        signal: "#4C8DFF",
        violet: "#6F5CFF",
        bone: "#F4F1EA"
      },
      fontFamily: {
        serif: ["var(--font-editorial)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(200, 169, 106, 0.18)",
        signal: "0 0 80px rgba(76, 141, 255, 0.18)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(200,169,106,0.10), transparent 34%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
