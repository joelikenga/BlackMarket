/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ["var(--font-montserrat)"],
    },
    colors:{
      my_yellow:"#FEE715FF",
      my_dark:"#cacaca",
      my_dark_2:"#101820FF",
      my_light:"#eeecec"
    },

  },
  plugins: [],
}
