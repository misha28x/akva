const { guessProductionMode } = require('@ngneat/tailwind');
const { blueGray } = require('tailwindcss/colors');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './apps/**/*.{html,ts,css,scss,sass,less,styl}',
      './libs/**/*.{html,ts,css,scss,sass,less,styl}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#fff',
      primary: {
        ...blueGray,
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
