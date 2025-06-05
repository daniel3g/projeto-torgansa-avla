import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],  
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_black_light: "#333",
        primary_black: "#000",
        primary_gray_light: "#efefef",
        primary_green: "#B5C619"
      },
    },
  },
  plugins: [],
} satisfies Config;