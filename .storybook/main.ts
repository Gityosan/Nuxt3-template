import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'
import { readFileSync } from 'node:fs'
import type { CompilerOptions } from 'typescript'

interface TSConfig {
  extends?: string
  compileOnSave?: boolean
  compilerOptions?: CompilerOptions
  include?: string[]
  exclude?: string[]
}
const tsconfigPath = new URL('../.nuxt/tsconfig.json', import.meta.url)
const tsconfigContent = readFileSync(tsconfigPath, 'utf-8')
const cleanContent = tsconfigContent.replace(/\/\/.*$/gm, '').trim()
const tsconfig: TSConfig = JSON.parse(cleanContent)

// compilerOptions.paths を Vite の alias に変換
const aliasEntries = Object.entries(tsconfig.compilerOptions?.paths || {}).map(([key, value]) => {
  return {
    [key.replace(/\/\*$/, '')]: fileURLToPath(
      new URL(value[0].replace(/\/\*$/, ''), tsconfigPath)
    ).replace(/\/$/, '')
  }
})
const alias = aliasEntries.reduce((acc, entry) => ({ ...acc, ...entry }), {})
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: { autodocs: 'tag' },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [
        AutoImport({
          imports: [
            'vue',
            {
              'vue-demi': ['isVue2', 'isVue3'],
              'vue-router': ['useLink'],
              vuetify: [
                'useTheme',
                'useDefaults',
                'useDisplay',
                'useLayout',
                'useLocale',
                'useRtl'
              ],
              '#app': [
                'useAsyncData',
                'useLazyAsyncData',
                'useNuxtData',
                'refreshNuxtData',
                'clearNuxtData',
                'defineNuxtComponent',
                'useNuxtApp',
                'defineNuxtPlugin',
                'definePayloadPlugin',
                'reloadNuxtApp',
                'useRuntimeConfig',
                'useState',
                'clearNuxtState',
                'useFetch',
                'useLazyFetch',
                'useCookie',
                'useRequestHeaders',
                'useRequestEvent',
                'useRequestFetch',
                'useRequestURL',
                'setResponseStatus',
                'setPageLayout',
                'onNuxtReady',
                'useRouter',
                'useRoute',
                'defineNuxtRouteMiddleware',
                'navigateTo',
                'abortNavigation',
                'addRouteMiddleware',
                'showError',
                'clearError',
                'isNuxtError',
                'useError',
                'createError',
                'defineNuxtLink',
                'useAppConfig',
                'updateAppConfig',
                'defineAppConfig',
                'preloadComponents',
                'preloadRouteComponents',
                'prefetchComponents',
                'loadPayload',
                'preloadPayload',
                'isPrerendered',
                'getAppManifest',
                'getRouteRules',
                'definePayloadReducer',
                'definePayloadReviver',
                'requestIdleCallback',
                'cancelIdleCallback'
              ],
              '@unhead/vue': [
                'injectHead',
                'useHead',
                'useSeoMeta',
                'useHeadSafe',
                'useServerHead',
                'useServerSeoMeta',
                'useServerHeadSafe'
              ]
            }
          ],
          vueTemplate: true,
          dirs: ['composables'],
          dts: '.storybook/auto-imports.d.ts'
        }),
        Components({
          resolvers: [Vuetify3Resolver()],
          directoryAsNamespace: true,
          dirs: ['components'],
          dts: '.storybook/components.d.ts'
        })
      ],
      build: { rollupOptions: { external: ['vue', 'vue-demi'] } },
      define: { 'process.env': process.env },
      preview: {
        headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*' }
      },
      resolve: { alias, preserveSymlinks: true },
      envPrefix: ['NUXT_']
    })
  }
}
export default config
