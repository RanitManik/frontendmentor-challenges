/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pink: "hsl(322, 100%, 66%)",
        "very-pale-cyan": "hsl(193, 100%, 96%)",
        "very-dark-cyan": "hsl(192, 100%, 9%)",
        "grayish-blue": "hsl(208, 11%, 55%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      fontSize: {
        body: "1rem",
      },
      fontWeight: {
        600: 600,
        400: 400,
        700: 700,
      },
      screens: {
        mobile: { max: "768px" },
        tablet: { min: "768px", max: "1024px" },
        laptop: { min: "1025px" },
      },
    },
  },
  plugins: [],
};
