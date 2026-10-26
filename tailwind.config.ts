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
        lime: {
          400: "#A3E635",
          500: "#84CC16",
        },
        kny: {
          bg: "#FFFFFF",
          cream: "#F5F6F0",
          card: "#FFFFFF",
          border: "#E7E9E2",
          borderLight: "#E7E5E4", // stone-200
          dark: "#0F172A",
          heading: "#1C1917", // stone-900
          text: "#44403C", // neutral-700
          muted: "#78716C", // stone-500
          footer: "#404040", // neutral-700
          footerText: "#D6D3D1", // stone-300
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        crimson: ["var(--font-crimson-pro)", "Crimson Pro", "serif"],
        "ibm-plex": ["var(--font-ibm-plex-sans)", "IBM Plex Sans", "sans-serif"],
        playfair: ["var(--font-playfair-display)", "Playfair Display", "serif"],
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      maxWidth: {
        figma: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
