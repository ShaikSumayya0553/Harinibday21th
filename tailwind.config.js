/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        marcellus: ['"Marcellus"', 'serif'],
        caveat: ['"Caveat"', 'cursive'],
        patrick: ['"Patrick Hand"', 'cursive'],
        indie: ['"Indie Flower"', 'cursive'],
        sacramento: ['"Sacramento"', 'cursive'],
        kalam: ['"Kalam"', 'cursive'],
        gochi: ['"Gochi Hand"', 'cursive'],
        comfortaa: ['"Comfortaa"', 'cursive'],
        quicksand: ['"Quicksand"', 'sans-serif'],
      },
      colors: {
        burgundy: {
          50: '#FDF2F4',
          100: '#FCE7EA',
          200: '#F8D0D6',
          300: '#F1A8B4',
          400: '#E57388',
          500: '#D0425F',
          600: '#B42A47',
          700: '#8E1C34',
          800: '#5F0F21',
          900: '#3D0713',
          950: '#26040C',
        },
        wine: {
          light: '#6B1D2F',
          DEFAULT: '#4A0E17',
          dark: '#2A060C',
        },
        gold: {
          50: '#FDFCF7',
          100: '#FAF5E6',
          200: '#F3E8C4',
          300: '#E9D698',
          400: '#DEC06D',
          500: '#D4A843',
          600: '#B88B2F',
          700: '#916B25',
          800: '#735220',
          900: '#5B401C',
        },
        parchment: {
          light: '#FDFBF7',
          DEFAULT: '#F5EFEB',
          dark: '#E8DED1',
        },
        sage: {
          50: '#F4F7F2',
          100: '#E6EEE2',
          200: '#D2DEC9',
          300: '#B6CBA9',
          400: '#9AB389',
          500: '#7E9B6B',
          600: '#648052',
          700: '#4E6540',
          800: '#3D5032',
          900: '#2F3F27',
        },
        matcha: {
          light: '#EAF2DE',
          DEFAULT: '#9BB184',
          dark: '#68824E',
        },
        clover: {
          light: '#D7ECD1',
          DEFAULT: '#528347',
          dark: '#3A6331',
        },
        olive: {
          light: '#EDF0DE',
          DEFAULT: '#6B7A46',
          dark: '#4B572E',
        },
        cream: {
          light: '#FFFDF9',
          DEFAULT: '#FAF7F0',
          dark: '#F0EAD6',
        }
      },
      keyframes: {
        waddle: {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(0)' },
          '50%': { transform: 'rotate(3deg) translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        heartFloat: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0.8' },
          '50%': { transform: 'translateY(-30px) scale(1.1)', opacity: '1' },
          '100%': { transform: 'translateY(-60px) scale(0.9)', opacity: '0' },
        }
      },
      animation: {
        waddle: 'waddle 2.2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        heartFloat: 'heartFloat 4s ease-in infinite',
      }
    },
  },
  plugins: [],
}
