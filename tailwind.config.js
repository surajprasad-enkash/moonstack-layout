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
        transparent: 'transparent',
        black: '#000',
        'brand-950': '#002F10',
      },
    },
  },
  plugins: [],
};
