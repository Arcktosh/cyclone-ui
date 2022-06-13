/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
       'spin-slow': 'spin 10s linear infinite',
      }
    },
   },
   plugins: [require("daisyui")],
   daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
