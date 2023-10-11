export default defineNuxtConfig({
  
  devtools: { enabled: false },

  css: ['assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})