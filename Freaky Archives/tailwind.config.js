/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}", "./index.html"],
  theme: {
    extend: {
      colors: {
        blackBlack: "#000000",
        bluishBlack: "#030C02",
        fiftyGray: "#595959",
        paleGold: "#6f6f44",
        peach: "#ebedd4",
        freaky: "#246638"
      },
      fontFamily: {
        comforter: ['Comforter', 'cursive'],
        varela: ['Varela', 'sans-serif'],
        french: ['"IM Fell French Canon"', 'serif'],
        island: ['"Island Moments"', 'cursive'],
        scary: ['"IM Fell Great Primer"', 'serif']
      }
    },
  },
  plugins: [],
}