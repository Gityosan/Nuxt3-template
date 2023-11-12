import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

const isDev = process.env.NODE_ENV === 'development'
const options = JSON.parse('<%= JSON.stringify(options) %>')

;('<% if (!options.treeshaking) { %>')
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

options.components = components
options.directives = directives
;('<% if (options.useVuetifyLabs) { %>')
import * as labs from 'vuetify/labs/components'
options.components = { ...options.components, ...labs }
;('<% } %>')
;('<% } %>')

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify(options)
  nuxtApp.vueApp.use(vuetify)

  if (!process.server && isDev) {
    // eslint-disable-next-line no-console
    console.log('💚 Initialized Vuetify 3', vuetify)
  }

  return {
    provide: {
      vuetify
    }
  }
})
