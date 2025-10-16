/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1CFF6C",
        transparent: "transparent",
        black: "#000",
        "brand-950": "#002F10",
        gray: "#7D7D7D",
        gray100: "#A1A1A1",
        brand200: "#00EA52",
        brand400: "#00CE48",
        brand500: "#083C1A",
        brand950: "#002F10",
        primary50: "#001A09",
      },
    },
  },
  plugins: [],
};
