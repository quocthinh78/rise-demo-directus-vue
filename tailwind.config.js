/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        light: "#e2f3f5",
        teal: "#22d1ee",
        modal: "rgb(0,0,0,0.3)",
        dark: "#0a0810",
        red: {
          DEFAULT: "#f00",
        },
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            bottom: '0px',
          },
          '100%': {
            opacity: '1',
            bottom: "42px",
          }
        },
        fadeOut: {
          '0%': {
            opacity: '1',
            bottom: "42px",
          },
          '100%': {
            opacity: '0',
            bottom: '0px',
          }
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out',
        fadeOut: 'fadeOut 0.4s ease-out'
      }
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("flowbite/plugin")],
};
