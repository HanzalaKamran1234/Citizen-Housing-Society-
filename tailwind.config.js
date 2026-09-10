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
          DEFAULT: '#89C742',
          50: '#F5FAF0',
          100: '#E9F5DD',
          200: '#D4EBB8',
          300: '#BCE091',
          400: '#A3D46A',
          500: '#89C742', // Primary Brand Color
          600: '#71A833',
          700: '#588527',
          800: '#40621C',
          900: '#2A4212',
          950: '#142207',
        },
        dark: {
          bg: '#0A0D0A',      // Primary Deep Background
          card: '#111611',    // Secondary Dark Surface
          elevated: '#171E17',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-brand': 'rgba(137, 199, 66, 0.25)',
        },
        neutral: {
          warm: '#F7F8F4',    // Warm White
          soft: '#E8ECE5',    // Soft Neutral
          muted: '#A7AEA5',   // Muted Text
          faint: '#6E766C',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'tighter': '-0.02em',
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      boxShadow: {
        'brand-subtle': '0 4px 20px -2px rgba(137, 199, 66, 0.12)',
        'brand-glow': '0 0 35px -5px rgba(137, 199, 66, 0.35)',
        'brand-intense': '0 0 50px -5px rgba(137, 199, 66, 0.55)',
        'dark-luxury': '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
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
