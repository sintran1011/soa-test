import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontSize: {
        head_l: ["1.5rem", { lineHeight: "1.75rem", fontWeight: "700" }],
        head_s: ["1rem", { lineHeight: "1.25rem", fontWeight: "500" }],
        head_xs: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "500" }],
        body_s: ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }],
        body_m: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
        modal_title: [
          "1.125rem",
          { lineHeight: "1.5625rem", fontWeight: "500" },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
