/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
                'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
                'grayish-blue': 'hsl(212, 23%, 69%)',
                'light-grayish-blue': 'hsl(210, 46%, 95%)',
            },
            fontFamily: {
                'body': ['Manrope', 'sans-serif'],
            },
            fontSize: {
                'body': '13px',
            },
            fontWeight: {
                'normal': 500,
                'bold': 700,
            },
        },
    },
    variants: {},
    plugins: [],
};