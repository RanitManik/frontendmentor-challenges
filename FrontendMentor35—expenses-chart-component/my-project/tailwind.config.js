/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(10, 79%, 65%)",
          cyan: "hsl(186, 34%, 60%)",
        },
        neutral: {
          darkBrown: "hsl(25, 47%, 15%)",
          mediumBrown: "hsl(28, 10%, 53%)",
          cream: "hsl(27, 66%, 92%)",
          veryPaleOrange: "hsl(33, 100%, 98%)",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
      },
      fontSize: {
        body: ["18px", "1.5"],
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
