# Nuxt3 Template

## Nuxt3 の開発用テンプレートです(A Template for Nuxt3)

個人的に調べて 2023/11 時点の Nuxt.js ver3 の開発をする上で必要ライブラリを入れたリポジトリです。(This repository includes essential libraries for developing with Nuxt.js version 3 as of November 2023, based on personal research.)

- nuxt: 3.9.1
- vuetify: 3.4.10
- vitest: 1.2.0
- typescript: 5.3.3
- @nuxt/devtools: 1.0.3
- yarn: 4.0.2
- eslint/prettier/stylelint の設定を追加しています
- 下記 vscode の拡張機能を入れることをお勧めします
  - prettier
  - eslint
  - stylelint
  - Vue Language Features (Volar)
  - TypeScript Vue Plugin (Volar)
- extensions の検索欄に`@builtin typescript`と打ち、出てくる`「TypeScript と JavaScript の言語機能(TypeScript and JavaScript Language Features)」`の中の`「無効にする(ワークスペース)(Disable (Workspace)」`を押して無効化してください

## Getting Started

### If you are using yarn@v1 ...

1. `corepack enable`
2. `yarn set version stable`

### For Local

1. `yarn run initialize`
2. `yarn run dev`

### For Dokcer

1. `docker compose build`
2. `docker compose up`

### For test

1. `yarn run test:ui`

### If you encounter the Can't find module yarn-3.x.x.cjs error...

1. Delete the `node_modules` folder.
2. Copy the contents of `.yarnrc.yml` to another location, then delete `.yarnrc.yml`.
3. Remove the packageManager attribute in package.json.
4. Run `yarn set version stable` again.
5. Restore the contents to `.yarnrc.yml`.
6. Run `yarn` or `yarn install` again.
