/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        layer: [
          " linear-gradient(180deg, #040404 24.07%, rgba(4, 4, 4, 0) 96.3%)",
        ],
      },
      animation: {
        backtoTop: "backtoTop 3s linear infinite",
        proloader: "preloaderone 0.5s 550ms infinite linear",
        proloader1: "preloaderone 0.5s 750ms infinite linear",
        proloader2: "preloaderone 0.5s 950ms infinite linear",
        proloader3: "preloaderone 0.5s 1050ms infinite linear ",
        hand: " hands 4s infinite linear",
      },
      keyframes: {
        backtoTop: {
          "0%": {
            transform: "translatey(0) scale(.998)",
          },

          "50%": {
            transform: " translatey(-7px) scale(1.1023)",
          },
          "100%": {
            transform: "translatey(0) scale(.998)",
          },
        },
        preloaderone: {
          "100%": { transform: " translateY(-25%)" },
        },
        hands: {
          "0%": { transform: " translateY(0)" },
          "75%": { transform: " translateY(15px)" },
          "100%": { transform: " translateY(0)" },
        },
      },
      plugins: [],
    },
  },
};
