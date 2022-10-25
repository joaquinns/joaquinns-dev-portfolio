/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkColor: "#080b10",
        darkColorLight: "#0b0e14",
        darkColorLightConstrant: "#191922",
      },
      gridTemplateColumns: {
        responsiveAutoGrid: "repeat(auto-fill, minmax(250px, 1fr));",
      },
      keyframes: {
        show: {
          "0%": {
            opacity: "0",
            transform: "scale(0.3)",
            filter: "hue-rotate(180deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
            filter: "hue-rotate(0deg)",
          },
        },
      },
      animation: {
        entrance: "show 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
