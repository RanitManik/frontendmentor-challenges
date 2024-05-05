/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(223, 87%, 63%)",
        "pale-blue": "hsl(223, 100%, 88%)",
        "light-red": "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        "very-dark-blue": "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        sans: ["'Libre Franklin'", "sans-serif"],
      },
      fontSize: {
        body: "20px",
      },
    },
  },
  variants: {},
  plugins: [],
};
