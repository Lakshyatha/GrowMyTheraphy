/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: 'var(--text-heading)',
          light: 'var(--bg-page)',
          warm: 'var(--bg-warm)',
          accent: 'var(--accent-primary)',
          sage: 'var(--accent-secondary)',
          sand: 'var(--accent-sand)',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"beaufort-pro"', 'Georgia', 'serif'],
        sans: ['"Mulish"', '"Muli"', 'system-ui', 'sans-serif'],
        script: ['"PrintedMoments"', '"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
};
