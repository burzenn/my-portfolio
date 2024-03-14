/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'purple': '#4338CA',
      'gray': '#6B7280',
      'titlegray': '#1F2937',
      'whitish': '#F9F9F9',
      'redish': '#AF0C48',
      'darkpurple': '#B7AAFF',
      'darkgray': '#FFFFFF',
      'darktitlegray': '#AEBCCF',
      'darkwhitish': '#141414',
      'darkredish': '#BAB2E7',
      'darkbg': '#252128'

    },
    extend: {},
  },
  plugins: [],
}