/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white_color: "#ffffff",

        black_color: "#000000",

        blue_color: "#002C55",
        blue_bg_color: "#0d6efd",

        orange_color: "#fd7e14",
        orange_bg_color: "#FF5C00",

        gray_color: "#666666",
        dark_gray_color: "#343a40",

        green_color: 'rgb(48, 156, 8)',

        red_color: 'rgb(156, 8, 8)',
      }
    },
  },
  plugins: [require('daisyui'),],
}

