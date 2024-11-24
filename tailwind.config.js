/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-teal": "#00bfb9",
        "custom-dark-teal": "#009794",
        "custom-darker-teal": "#003b3a",
        "custom-darkest-teal": "#005353",
      },
    },
  },
  plugins: [],
};
