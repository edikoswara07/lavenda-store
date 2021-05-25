const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Quicksand', 'Open Sans'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bluegray: colors.blueGray,
        cyan: colors.cyan,
        lightblue: colors.lightBlue,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
