import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#181818",
        paper: "#efefef",
        sand: "#bfa17f",
      },
      fontFamily: {
        sans: ["Basis", "Arial", "sans-serif"],
        display: ["Dream Avenue", "serif"],
        script: ["Crystal Sky", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
