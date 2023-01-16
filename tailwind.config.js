/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
        'md': '800px',
        'lg': '1200px',
        'xl': '1381px'
      },
      colors :{
        'dark': '#1b2430',
        'text-purple': '#a66cff',
        'main-text': '#d3d3d3',
        'second-dark': '#252d3a',
        'theme-orange': '#FF5B00',
        'theme-light-orange': '#FD5D5D',
        'theme-skyblue': '#00D7FF',
        'theme-green': '#3CCF4E',
        'theme-pink': '#f94892',
        'dark-gray': '#00000075'
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
],

}
