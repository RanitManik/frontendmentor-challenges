/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        // Neutral Colors
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        quote: "28px",
      },
      fontWeight: {
        800: 800,
      },
      boxShadow: {
        neon: "0 0 40px hsl(150, 100%, 66%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
