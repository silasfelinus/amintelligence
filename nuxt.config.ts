export default {
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      appURL: "https://cafepurr.com",
    },
    OPENAI_API_KEY: process.env.NUXT_OPENAI_API_KEY || "",
  },
  content: {
    documentDriven: true
  },

  devtools: {
    enabled: true
  }
}
