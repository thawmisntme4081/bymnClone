/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#dc052d',
        secondary: '#c60428',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        html: { color: 'white' },
        option: { backgroundColor: '#1E293B' },
      })
    }),
    ({ addUtilities }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.flex-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-end': {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        '.flex-col-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
      })
    },
  ],
}
