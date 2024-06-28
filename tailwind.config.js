const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      custom: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors:{
        'hijau': '#4F6F52',
        'hijau-90': '#4D6E51',
        'font-hijau': '#1A4D2E',
        'putih': '#E9E9E9',
        'abu' : "E7E7E7"
      },
      screens: {
        sm: "425px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
})