/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: {
          400: "#F92F60",
        },
        mainLightcolor: {
          300: "#fa4470",
        },
      },
    },
  },
  plugins: [],
};
