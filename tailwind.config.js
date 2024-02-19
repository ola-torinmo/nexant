/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
     
        'ipad-pro': '1366px',
      },
    },
  },
  plugins: [],
}

