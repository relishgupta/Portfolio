/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      screens:{
        'mob':{'max':'370px'},
      }
    },
      fontFamily:{
      signature:["Great Vibes"],
    },
  },
  plugins: [],
}