/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Dark-Violet': '#2d2640',
        'Grayish-Blue': '#95a9c6',
        'Very-Dark-Violet': '#2b272f',
        'Dark-Grayish-Violet': '#837d87',
        'Very-Light-Gray': '#fafafa',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        dm: ['DM Serif Display', 'serif'],
      }
    },
  },
  plugins: [],
}

