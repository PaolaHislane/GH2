/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004B84',
        secondary: '#FF6B18',
      },
    },
  },
  plugins: [],
};