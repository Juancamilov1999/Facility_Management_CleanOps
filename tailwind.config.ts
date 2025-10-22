import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A7BC1',
          light: '#4BA3D1',
        },
        dark: {
          DEFAULT: '#2C3E50',
          medium: '#7F8C8D',
          light: '#ECF0F1',
        },
        background: '#F8F9FA',
      },
      fontFamily: {
        sans: ['Quicksand', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
