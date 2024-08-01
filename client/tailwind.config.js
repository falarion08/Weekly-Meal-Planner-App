/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        'huge': '5rem', // Adjust size as needed
      },
      colors: {
        'gradient-green': '#00FF00', // Customize green color as needed
      },

      keyframes: {
        flyInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        flyInFromRight: 'flyInFromRight 1.3s ease-out',
      },

      
    },
  
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
