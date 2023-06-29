import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labs from 'vuetify/labs/components'
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({ components: { ...components, ...labs } })
  app.vueApp.use(vuetify)
})
