import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF3E7",
        ink: {
          DEFAULT: "#241C14",
          secondary: "#6D5F4F",
          tertiary: "#9C8B76",
        },
        accent: {
          DEFAULT: "#C9603F",
          soft: "#D97757",
        },
        hairline: "rgba(36,28,20,0.10)",
        hairlineStrong: "rgba(36,28,20,0.20)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        page: "80rem",
      },
      fontSize: {
        "display": [
          "clamp(2rem, 8vw, 2.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
