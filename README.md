# nuxt-ionic

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> [Ionic](https://ionicframework.com/docs/) integration for [Nuxt](https://nuxtjs.org)

[▶️ &nbsp;Online playground](https://stackblitz.com/github/danielroe/nuxt-ionic/tree/main/playground)

## Features

**⚠️ `nuxt-ionic` is currently a work in progress. ⚠️**

- Zero-config required
- Auto-import Ionic components and composables
- Ionic Router integration
- Pre-render routes
- Mobile meta tags
- PWA support with [`nuxt-pwa-module`](https://github.com/kevinmarrec/nuxt-pwa-module)
- Works out-of-the-box with [Capacitor](https://capacitorjs.com/) to build mobile apps

## Quick setup

1. Add `nuxt-ionic` dependency to your project

```bash
yarn add --dev nuxt-ionic
# npm install -D nuxt-ionic
# pnpm i -D nuxt-ionic
```

1. Add `nuxt-ionic` to the `modules` section of `nuxt.config.ts`

```js
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-ionic'],
  ionic: {
    // default options - no configuration is required
    integrations: {
      meta: true,
      pwa: true,
      router: true,
    },
    css: {
      core: true,
      basic: true,
      utilities: false,
    },
  },
})
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run `pnpm dev` to start [playground](./playground) in development mode

## License

Made with ❤️

Published under the [MIT License](./LICENCE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-ionic?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-ionic
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-ionic?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-ionic
[github-actions-src]: https://img.shields.io/github/workflow/status/danielroe/nuxt-ionic/ci/main?style=flat-square
[github-actions-href]: https://github.com/danielroe/nuxt-ionic/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/gh/danielroe/nuxt-ionic/main?style=flat-square
[codecov-href]: https://codecov.io/gh/danielroe/nuxt-ionic
