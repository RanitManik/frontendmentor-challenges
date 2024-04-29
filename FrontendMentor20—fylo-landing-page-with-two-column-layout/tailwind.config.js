/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "very-dark-blue": "hsl(243, 87%, 12%)",
        "desaturated-blue": "hsl(238, 22%, 44%)",
        // Accent Colors
        "bright-blue": "hsl(224, 93%, 58%)",
        "moderate-cyan": "hsl(170, 45%, 43%)",
        // Neutral Colors
        "light-grayish-blue": "hsl(240, 75%, 98%)",
        "light-gray": "hsl(0, 0%, 75%)",
      },
      typography: {
        // Fonts
        fontFamily: {
          "raleway": ["Raleway", "sans-serif"],
          "openSans": ['"Open Sans"', "sans-serif"],
        },
        fontWeight: {
          raleway: {
            400: "400",
            700: "700",
          },
          openSans: {
            400: "400",
          },
        },
      },
      screens: {
        mobile: { max: "768px" },
        tablet: { max: "1024px" },
        laptop: { min: "1025px" },
      },
    },
  },
  plugins: [],
};
