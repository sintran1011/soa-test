import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#F2542D",
        secondary: "#F2542D",
        "sub-2": "#FFF4F1",
        "sub-3": "#562C2C",
        "sub-4": "#666666",
        "sub-5": "#222",
        "sub-6": "#0E9594",
        "sub-7": "#000",
        "opa-1": "rgba(238, 238, 238, 0.20)",
        "opa-2": "rgba(86, 44, 44, 0.50)",
        "opa-3": "rgba(255, 255, 255, 0.60)",
        "opa-4": "rgba(86, 44, 44, 0.70)",
        "opa-5": "rgba(86, 44, 44, 0.80)",
        "opa-6": "rgba(255, 255, 255, 0.9)",
        "opa-7": "rgba(255, 255, 255, 0.30)",
        "opa-8": "rgba(86, 44, 44, 0.30)",
      },
      screens: {
        desktop: "1910px",
        "tablet-h": "1194px",
        "tablet-v": "834px",
        mobile: "375px",
      },
      backdropBlur: {
        default: "7.5px",
      },
      container: {
        center: true,
        screens: {
          desktop: "1240px",
          "tablet-h": "1194px",
          "tablet-v": "834px",
          mobile: "375px",
        },
      },
      fontSize: {
        xxl: ["3.25rem", { lineHeight: "3.75rem", fontWeight: "600" }],
        xl: ["2.5rem", { lineHeight: "3.375rem", fontWeight: "600" }],
        lg: ["1.75rem", { lineHeight: "2.0rem", fontWeight: "500" }],
        md: [
          "1.5rem",
          {
            lineHeight: "1.875rem",
            fontWeight: "400",
            letterSpacing: "0.0156rem",
          },
        ],
        "md-1": ["1.25rem", { lineHeight: "1rem", fontWeight: "500" }],
        normal: ["1.125rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        s: ["1.0rem", { lineHeight: "1.5rem", fontWeight: "500" }],
        xs: ["0.9375rem", { lineHeight: "1.0rem", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
export default config;
