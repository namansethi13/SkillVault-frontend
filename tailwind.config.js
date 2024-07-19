/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('hero-bg2.png')",
      },
      margin: {
        'calc' : 'calc(83.33333333333334% - 6rem)'
      }
    },
  },
  screens:{
    'ipad':'1024px'
  },
  plugins: []
};