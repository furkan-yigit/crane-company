/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Mavi
        secondary: "#f8fafc",
        accent: "#F59E0B", // Turuncu/Sarı
      },
    },
  },
  plugins: [],
};
