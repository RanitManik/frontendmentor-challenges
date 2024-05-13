/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-desaturated": "hsl(0, 36%, 70%)",
        "primary-soft": "hsl(0, 93%, 68%)",
        "neutral-dark": "hsl(0, 6%, 24%)",
      },
      backgroundImage: {
        "grad-1":
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        "grad-1-hover":
          "linear-gradient(135deg, hsla(0, 80%, 86%, 0.5), hsla(0, 74%, 74%, 0.5))",
        "grad-2": "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      },
      fontFamily: {
        sans: ['"Josefin Sans"', "sans-serif"],
      },
      fontSize: {
        body: "16px",
      },
    },
  },
  variants: {},
  plugins: [],
};
