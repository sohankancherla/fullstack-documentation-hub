/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans Condensed', ...defaultTheme.fontFamily.sans],
        display: ['Fira Sans'],
      },
      colors: {
        primary: {
          '50': '#edfaff',
          '100': '#d6f3ff',
          '200': '#b5ecff',
          '300': '#83e2ff',
          '400': '#48cfff',
          '500': '#1eb1ff',
          '600': '#0694ff',
          '700': '#0080ff',
          '800': '#0861c5',
          '900': '#0d549b',
          '950': '#0e335d',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
}

