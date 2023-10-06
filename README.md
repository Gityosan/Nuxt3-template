# Nuxt3 Template

## Nuxt3 の開発用テンプレートです

個人的に調べて 2023/10 時点の Nuxt.js ver3 の開発をする上で必要ライブラリを入れたリポジトリです。

- nuxt: 3.7.4
- vuetify: 3.3.20
- vitest: 0.34.6
- typescript: 5.2.2
- @nuxt/devtools: 1.0.0-beta.0
- eslint/prettier/stylelint の設定を追加しています
- 下記 vscode の拡張機能を入れることをお勧めします
  - prettier
  - eslint
  - stylelint
  - Vue Language Features (Volar)
  - TypeScript Vue Plugin (Volar)
- extensions の検索欄に`@builtin typescript`と打ち、出てくる`「TypeScript と JavaScript の言語機能(TypeScript and JavaScript Language Features)」`の中の`「無効にする(ワークスペース)(Disable (Workspace)」`を押して無効化してください

## Getting Started

### For Local

1. `npm install`
2. `npm run dev`

### For Dokcer

1. `docker compose build`
2. `docker compose up`

### For test

1. `npm run test:ui`
