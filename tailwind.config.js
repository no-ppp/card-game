/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        frijole : ['Frijole'],
      },
      colors: {
        'main-theme': '#FFE48A',
        'second-theme': '#FAEAB6',
        'third-theme': '#C6BA94',
      },
    },
  },
  plugins: [],
}
