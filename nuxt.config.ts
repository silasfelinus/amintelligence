// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-content-assets', '@nuxt/content', '@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@pinia/nuxt', 'theme-change'],

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
