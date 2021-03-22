module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        body:['Poppins']
      },
      backgroundColor: theme => ({
        'primary':'#1E4C97',
        'secondary':'#F1F1F1'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
