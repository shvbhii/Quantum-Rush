// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables the dark mode toggle
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        light: '#f0f0f0',
        primary: {
          light: '#3b82f6', // blue
          dark: '#2563eb',
        },
        accent: {
          light: '#ec4899', // pink
          dark: '#d946ef', // fuchsia
        },
      },
      fontFamily: {
        sans: ['"Exo 2"', 'sans-serif'], // A modern, techy font
      },
      keyframes: {
        road: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        celebrate: {
            '0%, 100%': { transform: 'scale(1)', color: '#facc15' },
            '50%': { transform: 'scale(1.2)', color: '#a855f7' },
        }
      },
      animation: {
        road: 'road 0.5s linear infinite',
        celebrate: 'celebrate 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}