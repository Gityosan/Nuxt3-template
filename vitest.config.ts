// <reference types="vitest">
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      dirs: ['utils', 'composables'],
      imports: ['vue', 'vue-router', 'vitest'],
      dts: 'test/auto-imports.d.ts'
    }),
    Components({
      dirs: ['components'],
      resolvers: [Vuetify3Resolver()],
      dts: 'test/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  test: {
    root: '.',
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      enabled: true
    }
  }
})
