/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js,php}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'tablet': '780px',
      'lg': '1024px',
      'laptop': '1180px',
      'desktop': '1280px',
      '2xl': '1280px',
    },
    extend: {
      colors: {
        darkBgColor: '#08080c',
        primaryHoverColor: '#f2d082',
        primaryActiveColor: '#e3c682',
        darkHoverColor: '#101014'
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Barlow: ['Barlow', 'sans-serif'],
        IBMPlexSans: ['IBM Plex Sans', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        NotoSans: ['Noto Sans', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
        Outfit: ['Outfit', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        SlaboBig: ['Slabo 27px', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
        Lato: ['Lato', 'sans-serif']
      },
      fontSize: {
        larger: '15.7px'
      },
      padding: {
        largerScreenPadding: '35px 170px',
        mediumScreenPadding: '',
        miniScreenPadding: '',
        phonesPadding: '',
        headerSpacing: '0.6875rem',
        headerSpaces: '0.5rem',
        paddingHorizon: '80px'
      }
    },
  },
  plugins: [],
}
