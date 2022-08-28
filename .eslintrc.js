module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier'
  ],
  plugins: [],
  rules: {
    // global settings
    semi: [2, 'never'],
    'no-console': 'off',
    // typescript settings
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // vue settings
    'vue/script-setup-uses-vars': 0,
    'vue/attribute-hyphenation': 0,
    'vue/require-default-prop': 0,
    'vue/no-mutating-props': 0,
    'vue/require-explicit-emits': 0,
    'vue/no-v-model-argument': 0,
    'vue/no-v-html': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-useless-template-attributes': 0
    // nuxt settings
  }
}
