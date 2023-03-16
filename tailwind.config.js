/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding: '5rem',
    },
    extend: {
      colors:{
        primary: '#60a5fa',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens:{
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}
