module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@nuxtjs',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  // required to lint *.vue files
  plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-sparse-arrays': 'off',
    'no-undef': 0,
    'array-callback-return': 0,
    'import/no-named-as-default': 0,
    // vue settings
    'vue/script-setup-uses-vars': 0,
    'vue/attribute-hyphenation': 0,
    'vue/no-v-html': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-multiple-template-root': 0,
    // nuxt settings
    'nuxt/no-globals-in-created': 0,
    'nuxt/no-env-in-hooks': 0
  }
}
