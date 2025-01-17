/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',    // İndigo-600
        secondary: '#10B981',  // Emerald-500
        accent: '#F59E0B',    // Amber-500
        error: '#EF4444',     // Red-500
        success: '#22C55E',   // Green-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

