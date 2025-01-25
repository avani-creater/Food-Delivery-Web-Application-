import { Carousel } from 'react-responsive-carousel'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        fontfamily:"Gilroy",
      },

      colors:{
        commonColor:"rgba(2, 6, 12, 0.92)",
         cuisineColor:"rgba(2, 6, 12, 0.6)",
         headingColor:"rgba(2, 6, 12, 0.92)",
         headerColor:"#1B1C20"
      },

      width:{
        carouselwidth:"920px"
      },

      backgroundColor:{
        commonBgColor:"rgb(255, 255, 255);"
      }

    },
  },
  plugins: [],
}
