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
  ],
}
