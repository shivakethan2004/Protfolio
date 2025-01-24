/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      fontFamily: {
       'bebas-neue': ['"Bebas Neue"', 'serif'],
        'Nunito-Sans':['"Nunito Sans"', 'serif'],
        'Ballet':['"Ballet"', 'serif'],

      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};


