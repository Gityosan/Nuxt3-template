// <reference types="vitest">
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vitest']
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      enabled: true
    }
  }
})
