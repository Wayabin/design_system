const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1920px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1200px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '992px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '360px'},
      // => @media (max-width: 639px) { ... }
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
