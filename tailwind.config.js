/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#152937",
        secondary: "#BACDD8",
        orange: "#FDA517",
        text: "#6293B7"
      }
    },
  },
  plugins: [],
}

