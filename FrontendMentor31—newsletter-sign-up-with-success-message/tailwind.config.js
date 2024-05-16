/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        "dark-slate": "hsl(234, 29%, 20%)",
        charcoal: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        gradient: "linear-gradient(45deg, #FF527A, #FD6937)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        body: "16px",
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
