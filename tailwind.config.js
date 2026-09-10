/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#071813',
          900: '#0B251E',
          800: '#0E362C',
          700: '#144B3D',
          600: '#1B6452',
          500: '#237E67',
          400: '#329B81',
          300: '#54BAA1',
          200: '#8CD5C2',
          100: '#C2EBE0',
          50: '#EBF7F4',
        },
        charcoal: {
          950: '#080A0B',
          900: '#0E1113',
          850: '#13171A',
          800: '#1A1F23',
          700: '#262D33',
          600: '#38424B',
          500: '#525F6B',
          400: '#758391',
          300: '#A1ADB8',
          200: '#CCD4DB',
          100: '#E5E9EC',
          50: '#F4F6F8',
        },
        champagne: {
          500: '#B89865',
          400: '#CBB084',
          300: '#DECCA8',
          200: '#ECE2CC',
          100: '#F7F3EB',
          50: '#FAF8F4',
        },
        stone: {
          warm: '#F7F6F2',
          card: '#F0EFEA',
          muted: '#E3E1D9',
          border: '#D5D2C7',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cinzel"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0,0,0,0.03), 0 10px 30px rgba(0,0,0,0.04)',
        'elevated': '0 10px 35px -5px rgba(0,0,0,0.08), 0 0 1px 1px rgba(0,0,0,0.04)',
        'glow-emerald': '0 0 35px -5px rgba(20, 75, 61, 0.35)',
        'luxury': '0 20px 50px rgba(11, 37, 30, 0.12)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
