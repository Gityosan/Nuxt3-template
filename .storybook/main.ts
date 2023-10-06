import type { StorybookConfig } from '@storybook/vue3-vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
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
            'nuxt/app': [
              'useHead',
              'useAsyncData',
              'useLazyAsyncData',
              'refreshNuxtData',
              'defineNuxtComponent',
              'useNuxtApp',
              'defineNuxtPlugin',
              'useRuntimeConfig',
              'useState',
              'useFetch',
              'useLazyFetch',
              'useCookie',
              'useRequestHeaders',
              'useRequestEvent',
              'useActiveRoute',
              'defineNuxtRouteMiddleware',
              'navigateTo',
              'abortNavigation',
              'addRouteMiddleware',
              'throwError',
              'clearError',
              'useError',
              'defineNuxtLink'
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
    return config
  }
}
export default config
