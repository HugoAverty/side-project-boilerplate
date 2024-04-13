/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'grey-blue': '#475467',
        'light-blue': '#D0D5DD',
        'dark': '#344054'
      },
      boxShadow: {
        'light': '0px 1px 2px rgba(16, 24, 40, 0.05)',
      }
    },
  },
  plugins: [],
}