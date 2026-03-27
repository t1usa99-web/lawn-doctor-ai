import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lawn-green': '#4CAF50',
        'lawn-dark': '#2E7D32',
        'lawn-light': '#81C784',
        'earth-brown': '#795548',
        'soil-dark': '#3E2723',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
