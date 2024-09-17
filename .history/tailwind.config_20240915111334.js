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
    extend: {
      backgroundImage: {
        "homepage-image": "url('/public/bghomepage.jpg')"
      },
      colors: {
      "dark-blue": "#293241"
    },
    keyframes: {
      'fade-in-out': {
        '0%': { opacity: '0', transform: 'scale(0.95)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
      },
    },
    animation: {
      'fade-in-out': 'fade-in-out 0.5s ease-in-out', // Customize duration and easing
    },
  }
  },
  plugins: [],
}

