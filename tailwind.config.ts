// eslint-disable-next-line no-undef
module.exports = {
  content: ['./**/*.html', './**/*.vue', './**/*.jsx'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    ( 'daisyui'),
    ('@tailwindcss/typography'),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}