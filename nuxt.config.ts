import vuetify from 'vite-plugin-vuetify'
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
  components: { global: true, dirs: ['~/components'] },
  typescript: {
    shim: false,
    strict: true
  },
  css: ['vuetify/styles', '@/assets/index.scss'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (config.plugins) config.plugins.push(vuetify())
      })
    },
    '@nuxtjs/critters',
    '@nuxtjs/storybook'
  ],
  critters: {
    config: {
      preload: 'swap',
      pruneSource: true
    }
  },
  vite: {
    resolve: {
      alias: {
        './runtimeConfig': './runtimeConfig.browser'
      }
    },
    define: {
      'window.global': {},
      'process.env.DEBUG': false
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  runtimeConfig: { public: {} },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  }
})
