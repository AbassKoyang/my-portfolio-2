/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#333',
          200: '#444',
          // Add more dark mode colors as needed
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}





