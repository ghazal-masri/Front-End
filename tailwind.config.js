/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.vue'],
    theme: {
        extend: {
            colors: {
                'fl-primary-900': '#0075C9',
                'fl-primary-700': '#008ED4',
                'fl-primary-500': '#5DA9DF',
                'fl-primary-300': '#99C5E9',
                'fl-primary-100': '#CDE1F4',
                'fl-secondary-900': '#C4BEB6',
                'fl-secondary-700': '#CFCBC4',
                'fl-secondary-500': '#DBD8D3',
                'fl-secondary-300': '#E7E5E1',
                'fl-secondary-100': '#F3F2F0',
                'fl-red': '#D40020',
                'fl-yellow': '#F9BF3F',
                'fl-green': '#11D000',
            },
            fontSize: {
                '2xs': '.5rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('tailwind-scrollbar'),],
}
