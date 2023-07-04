/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#EC640B',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(255, 255, 255, 0.25)',
        '4xl': [
            '0 35px 35px rgba(255, 255, 255, 0.25)',
            '0 45px 65px rgba(255, 255, 255, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

