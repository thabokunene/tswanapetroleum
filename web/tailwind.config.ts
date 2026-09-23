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
          dark: "#00766F",
        },
        navy: {
          DEFAULT: "#002855",
          deep: "#001C3D",
          ink: "#00162F",
        },
        amber: {
          DEFAULT: "#F5A623",
        },
        // Energy Mint — the brand's interactive accent.
        mint: "#00C4B3",
        cloud: "#F4F7F9",
        mist: "#FBFBFD",
        carbon: "#0B1B2B",
        smoke: "#5A6B7B",
        slate: {
          DEFAULT: "#2D3436",
          line: "rgba(0,40,85,0.12)",
        },
      },
      fontFamily: {
        // Proxima Nova when licensed/served, Montserrat (self-hosted) otherwise.
        display: [
          "Proxima Nova",
          "Montserrat",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        // `sans` is the default body stack; `body` is the explicit alias used
        // by the component classes in globals.css.
        sans: [
          "Lato",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        body: [
          "Lato",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        label: "0.16em",
        display: "-0.03em",
      },
      // Editorial system: near-square corners everywhere, including the
      // legacy 3xl/4xl/5xl tokens still referenced by inner pages.
      borderRadius: {
        "3xl": "2px",
        "4xl": "2px",
        "5xl": "3px",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #002855 0%, #00A3A1 55%, #00C4B3 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #002855 0%, #00A3A1 100%)",
      },
      boxShadow: {
        card: "none",
        "card-hover": "none",
        soft: "none",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)",
        editorial: "cubic-bezier(0.2, 0.7, 0.2, 1)",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 1.2s ease-out both",
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
