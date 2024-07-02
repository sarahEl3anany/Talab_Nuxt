// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://127.0.0.1:8000',
    },
  },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", 'nuxt-vue3-google-signin'],
  googleSignIn: {
    clientId: '812442679665-j0oi4lse4s5gugt6pi9plr44akd2pris.apps.googleusercontent.com',
  },
  css:[
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
})