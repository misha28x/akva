const { guessProductionMode } = require("@ngneat/tailwind");
const { blueGray, indigo, rose, blue } = require("tailwindcss/colors");

process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
  prefix: "",
  mode: "jit",
  purge: {
    content: [
      "./apps/**/*.{html,ts,css,scss,sass,less,styl}",
      "./libs/**/*.{html,ts,css,scss,sass,less,styl}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#fff",
        warn: { ...rose },
        blueGray: { ...blueGray },
        primary: {
          ...blue,
        },
        indigo: {
          ...indigo,
        },
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
