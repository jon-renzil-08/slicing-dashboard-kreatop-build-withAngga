/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundColor: {
        colorBlack: "#111111",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dafGreen: "#DAFF00",
        blue: "#007AFF",
      },
    },
  },
  plugins: [],
}

