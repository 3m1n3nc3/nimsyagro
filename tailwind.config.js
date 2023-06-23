/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#40b500',
        'primary-2': '#62e719',
        secondary: '#f6af2b',
        accent: '#ed1a25'
      },
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/aspect-ratio'),
    import('@tailwindcss/typography'),
  ],
}