module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
