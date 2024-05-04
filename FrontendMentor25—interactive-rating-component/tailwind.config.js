/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(217, 12%, 63%)",
        "medium-gray": "hsl(216, 12%, 54%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "main-bg": "hsl(215, 25%, 13%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
      fontSize: {
        body: "15px",
      },
    },
  },
  variants: {},
  plugins: [],
};
