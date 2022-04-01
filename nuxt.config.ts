import { defineNuxtConfig } from 'nuxt3'
import vuetify from '@vuetify/vite-plugin'

declare module 'vite' {
  interface UserConfig {
    // This is the missing options. Please see https://vitejs.dev/config/#ssr-options
    ssr?: {
      external?: string[]
      noExternal?: string | RegExp | (string | RegExp)[] | true
      target?: 'node' | 'webworker'
    }
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  css: ['vuetify/styles'],
  vite: {
    plugins: [
      vuetify(),
      {
        // https://github.com/nuxt/framework/issues/2798
        configResolved(config) {
          const vuetifyIdx = config.plugins.findIndex(
            (plugin) => plugin.name === 'vuetify:import'
          )
          const vueIdx = config.plugins.findIndex(
            (plugin) => plugin.name === 'vite:vue'
          )
          if (~vuetifyIdx && vuetifyIdx < vueIdx) {
            const vuetifyPlugin = config.plugins[vuetifyIdx]
            // @ts-ignore
            config.plugins.splice(vuetifyIdx, 1)
            // @ts-ignore
            config.plugins.splice(vueIdx, 0, vuetifyPlugin)
          }
        }
      }
    ],
    ssr: {
      noExternal: ['vuetify']
    },
    define: {
      'process.env.DEBUG': 'false'
    }
  }
})
