/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#29AADF', // Picton Blue
        secondary: '#27ADE2', // Picton Blue 2
        black: '#000000', // Black
        gray: '#686A6C', // Dim gray
      },
    },
  },
  plugins: [],
}