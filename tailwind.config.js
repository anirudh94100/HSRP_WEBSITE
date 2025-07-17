/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFD900',
        'brand-cyan': '#00FFFF',
        'brand-blue': '#3B5998',
      }
    },
  },
  plugins: [],
}
