// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      WEBSITE_NAME_EN: process.env.WEBSITE_NAME_EN,
      WEBSITE_ADDRESS: process.env.WEBSITE_ADDRESS,
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  ssr: true,
  nitro: {
    baseURL: "http://localhost:3000",
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },
  routeRules: {
    "/**": { swr: true },
    "/dashboard/**": { ssr: false },
  },
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