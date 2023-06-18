/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkPurlple: '#1A1C48',
        purple: '#9499C3',
      },
    },
  },
  plugins: [],
};
