// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  css:[
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.css'
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  image: {
    // Specify static provider or other settings if needed
    // Example configuration for static images:
    providers: {
      local: {
        // Defaults to '/_nuxt/image' if not set
        provider: 'ipx',
        options: {
          baseURL: '/'
        }
      }
    },
    // Defaults
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