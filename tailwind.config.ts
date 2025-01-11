import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        agencyPurple: "#8A38F5",
        agencyGray: "#A08EAE",
        agencyDarkGray: "#3D334D",
      },
      fontSize: {
        xxs: "0.6875rem",
        13: "0.8125rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
