/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
      backgroundColor: {
        "black-valo": "#3C3A4C",
        "red-valo": "#f94555",
        "white": "#ffffff",
    },
    textColor: {
      "red-valo": "#f94555",
    },
  },
  plugins: [],
};
