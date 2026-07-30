/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#FDF8F9',
          100: '#F5E8EC',
          200: '#E8CED6',
          300: '#D4A8B5',
          400: '#B07A8C',
          500: '#8B6070',
          600: '#6B3D4F',
          700: '#5C1A2E',
          800: '#4A1525',
          900: '#3A101D',
          950: '#2A0B15',
        },
        pearl: {
          50: '#FFFFFF',
          100: '#FDF8F9',
          200: '#F5E8EC',
          300: '#E8CED6',
          400: '#D4A8B5',
        },
        primary: '#5C1A2E',
        secondary: '#8B6070',
        border: 'rgba(92, 26, 46, 0.18)',
        borderLight: 'rgba(92, 26, 46, 0.1)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Bodoni Moda', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Lora', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(92, 26, 46, 0.12)',
        'soft-lg': '0 14px 36px rgba(92, 26, 46, 0.16)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'petal-fall': 'petalFall 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(10px) rotate(180deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
