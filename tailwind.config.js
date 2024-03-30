/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-thin': ["Roboto", 'sans-serif'],
        'roboto-light': ["Roboto", 'sans-serif'],
        'roboto-regular': ["Roboto", 'sans-serif'],
        'roboto-medium': ["Roboto", 'sans-serif'],
        'roboto-bold': ["Roboto", 'sans-serif'],
        'roboto-black': ["Roboto", 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
