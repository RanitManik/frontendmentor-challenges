/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            colors: {
                pink: "hsl(322, 100%, 66%)",
                "light-pink": "hsl(321, 100%, 78%)",
                "light-red": "hsl(0, 100%, 63%)",
                "very-dark-cyan": "hsl(192, 100%, 9%)",
                "very-pale-blue": "hsl(207, 100%, 98%)",
            },
            // Fonts
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
                openSans: ['"Open Sans"', "sans-serif"],

            },
            screens: {
                mobile: {max: "768px"},
                tablet: {max: "1024px"},
                laptop: {min: "1025px"},
            },
        },
    },
    plugins: [],
};
