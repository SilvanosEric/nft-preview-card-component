/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "p-soft-blue": "hsl(215, 51%, 70%)",
        "p-cyan": "hsl(178, 100%, 50%)",
        "n-main-bg": "hsl(217, 54%, 11%)",
        "n-card-bg": "hsl(216, 50%, 16%)",
        "n-white": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        "fs-body": "18px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
