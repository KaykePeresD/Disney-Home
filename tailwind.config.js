/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],


  theme: {
    
    extend: {
      fontFamily:{
         primaryRegular:['Regular'],
         pramiryMedium:["Medium"],
         primaryBold:["Bold"],
      },
      colors: {
        darkGray: '#22242f',
        lightGray: '#cdced0',
      },
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        '.no-scrollbar':{
          '-ms-overflow-style':'none',
          'scrollbar-width':"none",
        },

      };

      addUtilities(newUtilities)
    },
  ],
}

