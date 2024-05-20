/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "hsl(230, 29%, 20%)",
        "dark-grayish-blue": "hsl(230, 11%, 40%)",
        "grayish-blue": "hsl(231, 7%, 65%)",
        "light-grayish-blue": "hsl(207, 33%, 95%)",
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', "sans-serif"],
        body: ['"Barlow"', "sans-serif"],
      },
      fontSize: {
        body: "18px",
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      screens: {
        mobile: { max: "640px" },
      },
    },
  },
  variants: {},
  plugins: [],
};
