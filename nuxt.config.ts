export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: '' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },
  typescript: { shim: false, strict: true },
  css: ['@/assets/index.scss'],
  modules: ['@nuxtjs/critters', './modules/vuetify/module'],
  critters: {
    config: {
      preload: 'swap',
      pruneSource: true
    }
  },
  runtimeConfig: {
    app: {
      name: 'Nuxt',
      version: '1.0.0',
      baseURL: '/',
      host: 'localhost',
      port: 3000
    }
  },
  devtools: { enabled: true }
})
