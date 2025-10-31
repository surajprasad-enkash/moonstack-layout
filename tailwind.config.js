/** @type {import('tailwindcss').Config} */ module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      colors: {
        primary: "#1CFF6C",
        black: "#000000",
        gray: {
          DEFAULT: "#7D7D7D",
          100: "#A1A1A1",
          200: "#DFDFDF",
          300: "#CBCBCB",
        },
        brand: {
          200: "#00EA52",
          400: "#00CE48",
          500: "#083C1A",
          950: "#002F10",
        },
        primaryPalette: { 50: "#001A09", 700: "#0CE859" },
      },
    },
  },
  plugins: [],
};
