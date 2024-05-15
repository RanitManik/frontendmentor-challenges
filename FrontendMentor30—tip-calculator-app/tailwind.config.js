/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(172, 67%, 45%)",
        },
        neutral: {
          veryDarkCyan: "hsl(183, 100%, 15%)",
          darkGrayishCyan: "hsl(186, 14%, 43%)",
          grayishCyan: "hsl(184, 14%, 56%)",
          lightGrayishCyan: "hsl(185, 41%, 84%)",
          veryLightGrayishCyan: "hsl(189, 41%, 97%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
      },
      fontSize: {
        "form-input": "24px",
      },
    },
  },
  variants: {},
  plugins: [],
};
