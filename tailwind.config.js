/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {

      backgroundImage: {
        'login-pattern': "url('/src/img/background.jpg')"
      },

      width: {
        "mobile": '480px',
        "tablet": '640px',
        "laptop": '1024px'
      },

      fontFamily: {
        'lato': "'Lato', sans-serif",
        'rubik': "'Rubik', sans-serif",
        'nunito-sans': "'Nunito Sans', sans-serif"
      },

      screens: {
        "mobile": '480px',
        "tablet": '640px',
        "laptop": '1024px'
      },

    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
