/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/index.html",
    "./frontend/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        '404': "url('./frontend/src/assets/404.jpg')"
      }
    },
  },
  plugins: [],
}

