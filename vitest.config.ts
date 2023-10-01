// <reference types="vitest">
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vitest']
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
