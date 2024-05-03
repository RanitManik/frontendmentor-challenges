/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        "dark-pink": "hsl(281,83%,54%)",
      },
      fontFamily: {
        body: ['"Work Sans"', "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
