/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#5d5954",
        secondary: "#dbaf17",
        backDark: "#948372",
        backImage: "#948372",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        corn: {
          50: "#fdfbe9",
          100: "#faf7c7",
          200: "#f6ec92",
          300: "#f1db53",
          400: "#eac51f",
          500: "#dbaf17",
          600: "#bd8811",
          700: "#976211",
          800: "#7d4f16",
          900: "#6b4118",
          950: "#3e220a",
        },
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        ebGaramond: ["EB Garamond", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
