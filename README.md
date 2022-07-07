# Nuxt3 Template

## Nuxt3 の開発用テンプレートです

個人的に調べて 2022/6 時点の Nuxt.js ver3 の開発をする上で必要ライブラリを入れたリポジトリです。

- eslint/prettier/stylelint の設定を追加しています
- scss の stylelint 設定も追加しています
- sass は dart sass を入れています
- order は stylelint-config-recess-order を入れています。
- vscode の拡張機能 prettier/eslint/stylelint/Vue Language Features (Volar) を入れることをお勧めします。

## The preparation method

### Commands

`npx nuxi init appName`

`yarn add -D vuetify@next @vuetify/vite-plugin sass @mdi/font @mdi/js`

`yarn add -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @nuxtjs/eslint-config-typescript`

`yarn add -D eslint eslint-config-prettier eslint-plugin-nuxt postcss-html`

`yarn add -D prettier stylelint stylelint-config-prettier stylelint-config-recess-order stylelint-config-standard-scss`

## Getting Started

`yarn install`

`yarn dev`
