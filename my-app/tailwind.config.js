/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        gray: '#00000040',
        lightblue: '#ECF1FF',
        darkgray: '#D9D9D9',
        blue: '#407CE2',
      },
    },
  },
  plugins: [],
};
