import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#073653",
          50: "#F0F5F9",
          100: "#DCE8F0",
          200: "#B9D1E1",
          300: "#8CB2CD",
          400: "#4E85A8",
          500: "#2A6184",
          600: "#175272",
          700: "#0F4462",
          800: "#073653",
          900: "#052941",
          950: "#04192C",
        },
        school: {
          DEFAULT: "#087DB5",
          light: "#2E9ACB",
          dark: "#056699",
        },
        sky: {
          DEFAULT: "#58A9DC",
          light: "#8AC6E8",
          dark: "#3589BF",
        },
        sun: {
          DEFAULT: "#F4BD32",
          light: "#FBD777",
          pale: "#FFF1C9",
          dark: "#D69B12",
        },
        cream: "#FFF9E9",
        ink: "#172435",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      maxWidth: {
        container: "78rem",
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(23,36,53,0.04), 0 12px 32px -12px rgba(7,54,83,0.18)",
        lift: "0 2px 4px rgba(23,36,53,0.05), 0 26px 50px -18px rgba(7,54,83,0.28)",
        ring: "0 0 0 1px rgba(8,125,181,0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      backgroundImage: {
        "sun-glow":
          "radial-gradient(closest-side, rgba(244,189,50,0.45), rgba(244,189,50,0) 70%)",
        "cream-wash":
          "linear-gradient(180deg, #FFFFFF 0%, #FFF9E9 55%, #FFFFFF 100%)",
        "navy-soft": "linear-gradient(160deg, #073653 0%, #0B4A72 55%, #056699 100%)",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "sun-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "halo-breathe": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.14)", opacity: "1" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "sun-sweep": "sun-sweep 60s linear infinite",
        "float-soft": "float-soft 7s ease-in-out infinite",
        "halo-breathe": "halo-breathe 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;