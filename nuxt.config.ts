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
  // components: { global: true, dirs: ['~/components'] },
  typescript: {
    shim: false,
    strict: true
  },
  // css: ['vuetify/styles', '@/assets/index.scss'],
  css: ['@/assets/index.scss'],
  // build: {
  //   transpile: ['vuetify']
  // },
  modules: [
    // (options, nuxt) => {
    //   nuxt.hooks.hook('vite:extendConfig', (config) => {
    //     if (config.plugins) config.plugins.push(vuetify())
    //   })
    // },
    './modules/vuetify/module',
    '@nuxtjs/critters'
    // '@nuxtjs/storybook'
  ],
  critters: {
    config: {
      preload: 'swap',
      pruneSource: true
    }
  },
  // vite: {
  // build: {
  //   rollupOptions: {
  //     external: ['vue-router']
  //   }
  // },
  // optimizeDeps: { exclude: ['vuetify'] },
  // ssr: {
  //   noExternal: ['vuetify']
  // }
  // resolve: {
  //   alias: {
  //     './runtimeConfig': './runtimeConfig.browser'
  //   }
  // },
  // define: {
  //   'window.global': {},
  //   'process.env.DEBUG': false
  // },
  // server: {
  //   watch: {
  //     usePolling: true
  //   }
  // }
  // },
  // runtimeConfig: { public: {} },
  runtimeConfig: {
    app: {
      name: 'Nuxt',
      version: '1.0.0',
      baseURL: '/',
      host: 'localhost',
      port: 3000
    }
  }
  // devtools: {
  //   enabled: true,

  //   timeline: {
  //     enabled: true
  //   }
  // }
})
