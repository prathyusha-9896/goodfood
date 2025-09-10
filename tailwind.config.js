
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {
        fontFamily: {
      albra: ["Albra", "serif"],
      golos: ['"Golos Text"', "sans-serif"],
    },
  } },
  plugins: [],
};
