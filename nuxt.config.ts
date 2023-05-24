// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [   '@nuxtjs/eslint-module', 'nuxt-content-assets', '@nuxt/content', '@nuxtjs/tailwindcss',
   '@pinia/nuxt'],


  eslint: {
    /* module options */
  },

  content: {
    documentDriven: true
  },

  devtools: {
    enabled: true
  }
})
