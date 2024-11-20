/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
        fontSize: {
            'tiny': '7px',
        },
        animation : {
            flip : "flip 4s ease-in-out infinite"
        } ,
        keyframes : {
            flip : {
                "0% , 100%" : {
                    transform: "rotateY(25deg)",
                    boxShadow: "-10px 0px 8px -5px #000000",
                    transitionDelay: "500ms"
                } ,
                "50%" : {
                    transform: "rotateY(-25deg)" ,
                    boxShadow: "10px 0px 8px -5px #000000",
                    transitionDelay: "500ms"
                }
            }
        } ,
    },
  },
  plugins: [],
}

