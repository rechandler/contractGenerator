const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        // 'login-image': "url('public/day65-city-road.svg')"
      },
      colors: {
        'light-blue': colors.lightBlue,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        secondary: '#A5F3FC'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ]
}
