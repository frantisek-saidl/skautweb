/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}", "./app/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        forest: {
          50: "#f2f5f3",
          100: "#e6ebe7",
          200: "#c0cdc3",
          300: "#9aaf9f",
          400: "#74917b",
          500: "#4e7356",
          600: "#3e5c45",
          700: "#2F4C37",
          800: "#1f3324",
          900: "#101912",
        },
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        stone: {
          50: "#faf8f5",
          100: "#f5f0e8",
          200: "#e7dfd3",
          300: "#d7c7b0",
          400: "#bca68c",
          500: "#a58a6a",
          600: "#8c7052",
          700: "#6f5941",
          800: "#594a37",
          900: "#403020",
        },
      },
    },
  },
  plugins: [],
};
