/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#5C40CC',
        'yellow': '#D1F366',
      },
      fontFamily: {
        'kalam': 'Kalam'
      }
    },
  },
  plugins: [],
}
