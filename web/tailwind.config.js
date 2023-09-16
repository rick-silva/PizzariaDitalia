/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: { 
        backgroundImage: {
        'bg-pizzaBg': "url('./PizzaBg1.png')",
      }
    },
  },
  plugins: [],
}

