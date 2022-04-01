module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  // required to lint *.vue files
  plugins: [],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-sparse-arrays': 'off',
    'array-callback-return': 0,
    'import/no-named-as-default': 0,
    // vue settings
    'vue/script-setup-uses-vars': 0,
    'vue/attribute-hyphenation': 0,
    'vue/no-v-html': 0,
    'vue/multi-word-component-names': 0,
    // nuxt settings
    'nuxt/no-globals-in-created': 0,
    'nuxt/no-env-in-hooks': 0,
  },
}
