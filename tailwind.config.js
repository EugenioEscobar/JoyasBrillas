/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffea8a",
        secondary: "#CDAF2B",
        backDark: "#948372",
        dimBlue: "rgba(9, 151, 124, 0.1)",
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
