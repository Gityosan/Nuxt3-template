import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
    strict: true
  },
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (config.plugins) config.plugins.push(vuetify())
      })
    }
  ],
  vite: {
    define: {
      'process.env.DEBUG': false
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  runtimeConfig: {}
})
