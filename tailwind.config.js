/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-border': 'spin-cw 4s linear infinite',
      },
      keyframes: {
        'spin-cw': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },  
      screens: {
        'xs': '375px',
        '422': '422px',   
      }, 
      
      colors: {
        accent: {
          DEFAULT: "#be123c",
          muted: "#9f1239",
          glow: "rgba(190, 18, 60, 0.25)",
        },
        surface: {
          DEFAULT: "#121212",
          elevated: "#1a1a1a",
        },
      },
      fontFamily: {
        quicksand: ['Urbanist', 'sans-serif'],
      },
      boxShadow: {
        glow: "0 0 40px rgba(190, 18, 60, 0.12)",
        "glow-strong": "0 0 48px rgba(190, 18, 60, 0.22)",
      },
    },
  },
  plugins: [],
};