import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d4ed8',
          foreground: '#ffffff'
        },
        accent: '#f97316',
        trust: '#0e7490',
        success: '#22c55e'
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [animatePlugin]
};

export default config;
