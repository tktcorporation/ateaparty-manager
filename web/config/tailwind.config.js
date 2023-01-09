const daisyui = require('daisyui')
const lightTheme = require('daisyui/src/colors/themes')['[data-theme=light]']
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
  daisyui: {
    themes: [
      {
        mytheme: {
          ...lightTheme,
          primary: '#FB9241',
        },
      },
      'light',
    ],
  },
  plugins: [daisyui],
}
