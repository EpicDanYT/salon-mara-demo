import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        shell:  { DEFAULT: "#FAF8F5", deep: "#F1EBE4" },
        espresso: { DEFAULT: "#1C1410", soft: "#6B5D54" },
        clay:   { DEFAULT: "#C4856A", deep: "#A96A4F", pale: "#EADED5" },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
