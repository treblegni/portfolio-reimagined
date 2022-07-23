/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-slime': '#7EAE54',
        'green-gray-dark': '#30423E',
        'green-gray-medium': '#3E5146',
        'green-gray-regular': '#506455',
        'green-gray-light': '#5F8175',
        'cream': '#D8DCCC'
      }
    },
  },
  plugins: [],
}
