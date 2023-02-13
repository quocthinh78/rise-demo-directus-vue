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
        dark: "#0e153a",
        red: {
          'DEFAULT': '#f00'
        }
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("flowbite/plugin")],
};
