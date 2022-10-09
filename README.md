# Nuxt3 Template

## Nuxt3 の開発用テンプレートです

個人的に調べて 2022/6 時点の Nuxt.js ver3 の開発をする上で必要ライブラリを入れたリポジトリです。

- nuxt:3.0.0-rc.11
- vuetify:3.0.0-beta.13
- vuetify の設定(plugins)をしています
- eslint/prettier/stylelint の設定を追加しています
- scss の stylelint 設定も追加しています
- sass は dart sass を入れています
- order は stylelint-config-recess-order を入れています。
- vscode の拡張機能 prettier/eslint/stylelint/Vue Language Features (Volar) を入れることをお勧めします。

## The preparation method

1. `npx nuxi init appName`<br>

2. `yarn add -D vuetify@next sass @mdi/font @mdi/js`<br>

3. `yarn add -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @nuxtjs/eslint-config-typescript`<br>

4. `yarn add -D eslint eslint-config-prettier eslint-plugin-nuxt prettier`<br>

5. `yarn add -D stylelint stylelint-config-prettier stylelint-config-recess-order stylelint-config-standard-scss postcss-html`<br>

## Getting Started

1. `yarn install`

2. `yarn dev`
