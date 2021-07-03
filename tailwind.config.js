const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      blue: {
        light: '#85d7ff',
        DEFAULT: '#009edb',
      },
      teal: {
        DEFAULT: '#0c5d65',
        light: '#c7e6e9',
      },
      red: {
        DEFAULT: '#e54c42'
      },
      teamcolor: {
        england: '#fc8281',
        france: '#58a1d4',
        germany: '#78c7a1',
        spain: '#efe259',
        italy: '#dac68d',
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      yellow: colors.amber,
      green: colors.green,
      purple: colors.purple,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
