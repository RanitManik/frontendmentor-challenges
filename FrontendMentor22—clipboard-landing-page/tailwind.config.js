/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-strong-cyan": "hsl(171, 66%, 44%)",
        "primary-light-blue": "hsl(233, 100%, 69%)",
        "neutral-dark-grayish-blue": "hsl(210, 10%, 33%)",
        "neutral-grayish-blue": "hsl(201, 11%, 66%)"
      },
      fontSize: {
        body: "18px"
      },
      fontFamily: {
        body: ["\"Bai Jamjuree\"", "sans-serif"]
      },
      fontWeight: {
        normal: 400,
        semibold: 600
      }
    }
  },
  variants: {},
  plugins: []
};
