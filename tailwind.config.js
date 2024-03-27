/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transformOrigin:{
        'matrix':['0', '-1', '1', '0', '0', '0'],
      }, backgroundImage: {
        'hero-pattern': "url('/images/shutterstock_2138770023@2x.png')",
        
      }
    },
  },
  plugins: [],
}