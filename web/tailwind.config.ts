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
        teal: {
          DEFAULT: "#00A3A1",
          light: "#00C4B3",
        },
        navy: {
          DEFAULT: "#002855",
          deep: "#001c3d",
        },
        amber: {
          DEFAULT: "#F5A623",
        },
        cloud: "#F4F7F9",
        carbon: "#2D3436",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #002855 0%, #00A3A1 55%, #00C4B3 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #002855 0%, #00A3A1 100%)",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(0, 40, 85, 0.18)",
        "card-hover": "0 24px 60px -16px rgba(0, 40, 85, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
