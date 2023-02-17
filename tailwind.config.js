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
        dark: "#636363",
        red: {
          DEFAULT: "#f00",
        },
      },
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
