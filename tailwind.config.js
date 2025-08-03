/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Deep blue
        secondary: '#3B82F6', // Lighter blue
        accent: '#10B981', // Green for highlights
      },
    },
  },
  plugins: [],
}