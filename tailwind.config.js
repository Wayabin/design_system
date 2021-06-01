const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '992px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1920px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {

      'sans': ['Fira Sans', 'Roboto'],

     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
