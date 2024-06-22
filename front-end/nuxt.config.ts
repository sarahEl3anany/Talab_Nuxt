// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // axios: {
  //   baseURL: process.env.API_URL,
  // },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  css:[
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
})