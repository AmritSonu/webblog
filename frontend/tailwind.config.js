/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: {
          400: "#F92F60",
        },
        slatecolor: {
          300: "#cbd5e1",
        },
      },
    },
  },
  plugins: [],
};
