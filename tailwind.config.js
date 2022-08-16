/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {

      backgroundImage: {
        'login-pattern': "url('/src/img/background.jpg')"
      },

      width: {
        "mobile": '480px'
      },

      fontFamily: {
        'lato': "'Lato', sans-serif",
        'rubik': "'Rubik', sans-serif"
      }
    },
  },
  plugins: [],
}
