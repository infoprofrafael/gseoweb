/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}", // Para ler o index.html na raiz do frontend
    "./src/**/*.{html,js}", // Para ler arquivos dentro da pasta src
    "./node_mmodules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'white': '#F3F4F6', // A personalização da sua cor
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}