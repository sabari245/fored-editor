/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3E7CE8",
        level: {
          0: "#202124",
          1: "#2e2f31",
          2: "#404040",
          3: "#4c4c4c",
          4: "#5b5e64",
        }
      },
      fotnFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}
