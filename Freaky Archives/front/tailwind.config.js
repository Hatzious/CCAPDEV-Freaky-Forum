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
      },
      keyframes: {
      jitter: {
        '0%': { transform: 'translate(0, 0)' },
        '10%': { transform: 'translate(-3px, 2px)' },
        '20%': { transform: 'translate(3px, -1px)' },
        '30%': { transform: 'translate(-2px, -3px)' },
        '40%': { transform: 'translate(2px, 3px)' },
        '50%': { transform: 'translate(-1px, 2px)' },
        '60%': { transform: 'translate(1px, -2px)' },
        '70%': { transform: 'translate(-3px, 1px)' },
        '80%': { transform: 'translate(3px, -3px)' },
        '90%': { transform: 'translate(-1px, -1px)' },
        '100%': { transform: 'translate(0, 0)' },
      }
    },
    animation: {
      jitter: 'jitter 0.12s infinite steps(2)',
    }
    },
  },
  plugins: [],
}