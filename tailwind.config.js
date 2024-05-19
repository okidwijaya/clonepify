/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        colors: {
          'navy-blue': '#16131b',
          'white-light-grey': '#e4e4e3', 
          'black-green': '#314026', 
          'black-grey-based': '#11150d',
          'black-navy-based': '#1a1929',
          'black-navy-based-text': '#0e0c17',
          'black-warm': '#121212',
          'cs-light-gray': "#e8eef1",
          'cs-light-blue': "#43b0f1",
          'cs-medium-blue': "#057dcd",
          'cs-dark-blue': "#1e3d58",
          'cs-dark-red': "#a41726",
        },
        fontSize: {
          'medium-sm': '12px',
        },
    },
  },
  plugins: [],
};
