/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{css,js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#D8DCCC",
        green: {
          dark: "#30423E",
          medium: "#3E5146",
          regular: "#506455",
          light: "#5F8175",
          slime: "#7EAE54"
        }
      }
    }
  },
  plugins: []
}
