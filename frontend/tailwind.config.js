/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: {
          400: "#ff853e ",
          // #ff853e
          // #F92F60
        },
        mainLightcolor: {
          300: "#fd6a15",
          // #fa4470
          //  #fd6a15
        },
      },
      fontSize: {
        vs: "0.7rem",
        ns: "1rem",
      },
      screens: {
        tMobile: { max: "650px" },
        mobile: { max: "550px" },
        sMobile: { max: "425px" },
      },
    },
  },
  plugins: [],
};
