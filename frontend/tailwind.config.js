// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   darkMode: 'media',
//   extend: {
//   keyframes: {
//     shake: {
//       '0%, 100%': { transform: 'translateX(0)' },
//       '25%': { transform: 'translateX(-6px)' },
//       '50%': { transform: 'translateX(6px)' },
//       '75%': { transform: 'translateX(-4px)' }
//     },
//     success: {
//       '0%': { transform: 'scale(1)' },
//       '50%': { transform: 'scale(1.03)' },
//       '100%': { transform: 'scale(1)' }
//     }
//   },
//   animation: {
//     shake: 'shake 0.4s ease-in-out',
//     success: 'success 0.4s ease-in-out'
//   }
// },

// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media', // Enables automatic dark mode based on system
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '50%': { transform: 'translateX(6px)' },
          '75%': { transform: 'translateX(-4px)' },
        },
        success: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        shake: 'shake 0.4s ease-in-out',
        success: 'success 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}
