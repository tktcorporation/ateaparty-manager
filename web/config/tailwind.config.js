const daisyui = require('daisyui')
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
          primary: '#f97316',

          secondary: '#fbbf24',

          accent: '#37CDBE',

          neutral: '#3D4451',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [daisyui],
}
