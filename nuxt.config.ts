// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

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
