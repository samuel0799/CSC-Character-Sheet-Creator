/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:'Lora, sans-serif',
      },
      backgroundImage:{
        'background-login': "url('/login.jpeg')",
        'background-home': "url('/homepage.jpg')"
      },
      spacing:{
        '110': '20.625rem',
        '220': '41.875rem'
      }
    },
  },
  plugins: [],
}

