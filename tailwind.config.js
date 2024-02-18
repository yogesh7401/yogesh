module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'dark': '#0d1117',
      'card': '#010409',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
