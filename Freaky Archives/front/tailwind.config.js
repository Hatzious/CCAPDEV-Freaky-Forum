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
        freaky: "#246638",
        hover: "#FFFFFF", /* Text color when hovering on */
        glow: "#EBECDA", /* Peachy-color for glowing */
        olive: "#0A0B01", /* Navbar color */
        border: "#252618" /* Light olive for borders */
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