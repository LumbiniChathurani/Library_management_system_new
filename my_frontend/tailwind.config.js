/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enables dark mode via 'class' strategy
  theme: {
    extend: {
      colors: {
        cornflower: {
          50: "#EFF6FF",
          100: "#D6E4FF",
          200: "#ADC8FF",
          300: "#84A9FF",
          400: "#6690FF",
          500: "#3366FF",
          600: "#254EDA",
          700: "#1939B7",
          800: "#102694",
          900: "#08166F",
        },
      },
    },
  },
  plugins: [],
};
