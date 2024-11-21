/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'button': "#e6e6e6",
        'button-dark': "#5c5c5c"
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
}

