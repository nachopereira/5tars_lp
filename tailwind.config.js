/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#09D2E4",
          light2: "#047A90",
          DEFAULT: "#002B46",
          dark: "#002037",
          text: "#C0D9F8",
        },
      },
      screens: {
        xs: "420px",
      },
      boxShadow: {
        brandcolor: "0px 0px 10px 2px #047A90",
      },
      backgroundImage: {
        "bg-star-image": "url('../public/star.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
