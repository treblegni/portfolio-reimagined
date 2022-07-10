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
        'green-gray-medium': '#3E514D',
        'green-gray-regular': '#506460',
        'green-gray-light': '#6A8082',
        'cream': '#D7DBD3'
      }
    },
  },
  plugins: [],
}
