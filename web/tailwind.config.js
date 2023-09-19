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
      },
        fontFamily: {
        'font-logo': "'Satisfy', cursive",
      }, 
        colors: {
          'text-main-color' : "#FF7200"
      },backgroundColor: {
        'orange-color' : "#FF7200"
      },
        height:{
          'h-46rem' : "46.875rem",
          'h-33rem' : "33.125rem"
      },
    },
  },
  plugins: [],
}

