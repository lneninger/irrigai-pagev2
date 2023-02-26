/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slaboRegular: ['slabo-regular', 'sans-serif'],
        slaboRegular: ['righteous-regular', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
