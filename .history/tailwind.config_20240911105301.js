/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
    extend: {colors: {
      "dark-blue": "#293241"
    },
  }
  },
  plugins: [],
}

