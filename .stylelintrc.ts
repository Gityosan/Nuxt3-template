module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  plugins: [],
  ignoreFiles: ['**/node_modules/**', '**/.nuxt/**', '**/dist/**'],
  rules: {
    // 'at-rule-no-unknown': false,
    'scss/at-rule-no-unknown': true,
    'scss/comment-no-empty': null,
    'string-quotes': 'single',
    'block-no-empty': null,
    'number-leading-zero': null,
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    indentation: 2,
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'no-invalid-position-at-import-rule': null,
    'no-irregular-whitespace': null,
    'selector-class-pattern': null,
    'property-no-unknown': null,
    // prettierのインラインスタイルの末尾のコロンを削除するとコンフリクトするため、回避設定
    'declaration-block-trailing-semicolon': null,
    // ::v-deepエラー回避
    'selector-pseudo-class-no-unknown': null
  }
}
