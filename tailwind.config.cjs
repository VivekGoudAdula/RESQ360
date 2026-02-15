
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#028090',
        'primary-dark': '#014751',
        accent: '#02C39A',
        emergency: '#DC2626',
        warning: '#F59E0B',
        success: '#10B981',
        dark: '#0F172A',
        'text-secondary': '#64748B',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scroll': 'scroll 50s linear infinite',
        'heart-beat': 'heartBeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 10px 30px rgba(220, 38, 38, 0.3)' },
          '50%': { boxShadow: '0 20px 50px rgba(220, 38, 38, 0.6)' },
        },
        scroll: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        heartBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.1)' },
          '20%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.2)' },
          '40%': { transform: 'scale(1)' },
        }
      },
    },
  },
  plugins: [],
}
