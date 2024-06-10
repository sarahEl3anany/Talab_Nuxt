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
  image: {
    dir: "/public",
    providers: {
      local: {
        // Defaults to '/_nuxt/image' if not set
        provider: 'ipx',
        options: {
          baseURL: '/'
        }
      }
    },
    domains: [],
    alias: {
      public: '/public',
    },
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})