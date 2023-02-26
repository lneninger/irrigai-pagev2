/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xs': { 'max': '599px' },
      'sm': { 'min': '600px', 'max': '959px' },
      'md': { 'min': '960px', 'max': '1279px' },
      'lg': { 'min': '1280px', 'max': '1919px' },
      'xl': { 'min': '1920px', 'max': '5000px' },
      'lt-sm': { 'max': '599px' },
      'lt-md': { 'max': '959px' },
      'lt-lg': { 'max': '1279px' },
      'lt-xl': { 'max': '1919px' },
      'gt-xs': '600px',
      'gt-sm': '960px',
      'gt-md': '1280px',
      'gt-lg': '1920px'
    },
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
