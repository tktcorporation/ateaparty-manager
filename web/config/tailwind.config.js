const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kiwi Maru', 'sans-serif'],
      },
    },
    colors: {
      ...colors,
      primary: {
        ...colors.orange,
        DEFAULT: colors.orange[400],
      },
    },
  },
  plugins: [],
}
