/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#CCA665",
        secondary: "#5D8A76",
        blue: "#1FA3E5",
      },
      fontFamily: {
        NeueHaaslight: ["NeueHaasDisplayLight", "serif"],
        NeueHaasregular: ["NeueHaasDisplayRoman", "sans-serif"],
        NeueHaasmedium: ["NeueHaasDisplayMedium", "sans-serif"],
        NeueHaasbold: ["NeueHaasDisplayBold", "sans-serif"],
        NeueHaasblack: ["NeueHaasDisplayBlack", "sans-serif"],
      },
      backgroundPosition: {
        footerIcon: 'right 10px center',
        getInTouchGraphic: 'right 0 bottom 70px'
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1380px",
      "3xl": "1536px",
    }
  },
  plugins: [],
};
