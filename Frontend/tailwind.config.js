// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors: {
            pry: "#3F51B5",
          },
          transitionProperty: {
            oneTransition: 'max-height 0.7s ease-in-out'
          }
        },
        screens: {
          'ph' : {'max':'480px'},
          'tb' : '1024px',
          'dk' : '1280px',
          'smph': '351px'
        },
        
    },
    plugins: [],
};
