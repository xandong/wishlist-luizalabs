/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        purple: {
          850: "#5A2D82",
          950: "#370F54",
        },
        yellow: {
          450: "#eac32f",
        },
      },
      fontFamily: {
        sans: "Roboto",
      },
    },
  },
  plugins: [],
};
