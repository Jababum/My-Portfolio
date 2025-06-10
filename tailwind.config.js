export default {
  darkMode: 'class', // Enable class-based dark mode
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // blue-500
          dark: '#60a5fa',  // blue-400
        },
        background: {
          light: '#ffffff',
          dark: '#18181b', // gray-900
        },
      },
    },
  },
  plugins: [],
};