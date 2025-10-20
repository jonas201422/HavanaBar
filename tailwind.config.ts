import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './content/**/*.{json,md}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B0D0F',
        surface: '#111318',
        accent: '#C07A3A',
        secondary: '#8A8F98',
        text: '#E7E9EC'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Cormorant', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 10px 40px -15px rgba(192, 122, 58, 0.45)'
      },
      backgroundImage: {
        'glass-radial': 'radial-gradient(circle at top left, rgba(192, 122, 58, 0.15), rgba(11, 13, 15, 0.8))'
      }
    }
  },
  plugins: []
};

export default config;
