import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightningBlue: "#306CFE",
        crystalWhite: "#F4F7FF",
        darkGrey: "#313131",
        red: "#BA1A1A",
        outlineGrey: "#CCD0CF",
      },
    },
  },
  plugins: [],
} satisfies Config;
