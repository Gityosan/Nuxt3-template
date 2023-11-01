import type { StorybookConfig } from '@storybook-vue/nuxt'
import { mergeConfig, type UserConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/atom/**/*.stories.mdx',
    '../components/atom/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {}
  },
  docs: { autodocs: 'tag' }
  // viteFinal: async (config: UserConfig) => {
  //   return mergeConfig(config, {
  //     plugins: [
  //       Components({
  //         // resolvers: [Vuetify3Resolver()],
  //         directoryAsNamespace: true,
  //         dirs: ['components'],
  //         dts: '.storybook/components.d.ts'
  //       })
  //     ]
  //   })
  // }
}
export default config
