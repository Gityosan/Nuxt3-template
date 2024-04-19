# Nuxt3 Template

## Nuxt3 の開発用テンプレートです(A Template for Nuxt3)

個人的に調べて 2024/04 時点の Nuxt.js ver3 の開発をする上で必要ライブラリを入れたリポジトリです。(This repository includes essential libraries for developing with Nuxt.js version 3 as of April 2024, based on personal research.)

- nuxt: 3.11.2
- vuetify: 3.5.16
- vitest: 1.5.0
- typescript: 5.4.5
- yarn: 4.1.0

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
