import type { StorybookConfig } from '@storybook/vue3-vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'
import { readFileSync } from 'node:fs'
import { CompilerOptions } from 'typescript'

interface TSConfig {
  extends?: string
  compileOnSave?: boolean
  compilerOptions?: CompilerOptions
  include?: string[]
  exclude?: string[]
}
const tsconfigContent = readFileSync(new URL('../.nuxt/tsconfig.json', import.meta.url), 'utf-8')
const cleanContent = tsconfigContent.replace(/\/\/.*$/gm, '').trim()
const tsconfig: TSConfig = JSON.parse(cleanContent)

// compilerOptions.paths を Vite の alias に変換
const aliasEntries = Object.entries(tsconfig.compilerOptions?.paths || {}).map(([key, value]) => ({
  [key.replace(/\/\*$/, '')]: fileURLToPath(
    new URL(value[0].replace(/\/\*$/, ''), new URL('../', import.meta.url)),
  ),
}));
const alias = aliasEntries.reduce((acc, entry) => ({ ...acc, ...entry }), {});
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
    config.plugins?.push(
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          {
            vuetify: ['useTheme', 'useDefaults', 'useDisplay', 'useLayout', 'useLocale', 'useRtl']
          },
          {
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
              'cancelIdleCallback',
              'useHead'
              // 'useRouter', comment out because of 'useRouter' already imported by 'vue-router'
              // 'useRoute' comment out because of 'useRouter' already imported by 'vue-router'
            ]
          }
        ],
        dirs: ['composables'],
        dts: '.storybook/auto-imports.d.ts'
      }),
      Components({
        dirs: ['components'],
        resolvers: [Vuetify3Resolver()],
        dts: '.storybook/components.d.ts'
      })
    )
    config.define = {
      ...config.define,
      'process.env': process.env,
    };
    if (config.resolve) {
      config.resolve.alias = { ...config.resolve.alias, ...alias };
    }
    return config
  }
}
export default config
