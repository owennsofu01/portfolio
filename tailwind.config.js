/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Brand palette (matches COLORS in src/constants/colors.ts) so every
      // teal-* class shares the hero's hue instead of Tailwind's default teal.
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        teal: {
          50: '#EEF8F8',
          100: '#D5EEEF',
          200: '#AADCDE',
          300: '#72C4C7',
          400: '#3AACB0',
          500: '#0F969C',
          600: '#0D8389',
          700: '#0C7075',
          800: '#0A575C',
          900: '#072E33',
          950: '#05161A',
        },
      },
    },
  },
  plugins: [],
};
