const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sold-dark-gray": "#25282A",
        "sold-semi-dark-gray": "#CFCFCF",
        "sold-middle-gray": "#EBEAED",
        "sold-semilight-gray": "#F5F8FA",
        "sold-light-gray": "#FCFCFC",
        "sold-orange": "#F93822",
        "sold-green": "#84AE2B",
        "sold-blue": "#00A3E0",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      spacing: {
        '138': '34.5rem',
      }
    },
  },
  plugins: [],
}