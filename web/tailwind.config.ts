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
        cloud: "#F5F5F7", // Apple-style off-white
        mist: "#FBFBFD", // near-white section base
        carbon: "#1D1D1F", // Apple near-black text
        smoke: "#6E6E73", // Apple secondary grey
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Segoe UI",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #002855 0%, #00A3A1 55%, #00C4B3 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #002855 0%, #00A3A1 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(0, 40, 85, 0.12)",
        "card-hover": "0 20px 60px -18px rgba(0, 40, 85, 0.25)",
        soft: "0 2px 12px rgba(0, 0, 0, 0.04)",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 1.2s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
