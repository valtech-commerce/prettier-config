# Prettier config
[![tests](https://github.com/absolunet/prettier-config/workflows/tests/badge.svg?branch=master)](https://github.com/absolunet/prettier-config/actions?query=workflow%3Atests+branch%3Amaster)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

> Opinionated Prettier [shareable configs](https://prettier.io/docs/en/configuration.html#sharing-configurations).

## Rulesets

| Package | Version | Description | Documentation |
|---|---|---|---|
| **[@absolunet/prettier-config-core](packages/core)** | [![npm](https://img.shields.io/npm/v/@absolunet/prettier-config-core.svg)](https://www.npmjs.com/package/@absolunet/prettier-config-core) | **Core rules** | [docs](https://documentation.absolunet.com/prettier-config/core) |
| [@absolunet/prettier-config-pwastudio](packages/pwastudio) | [![npm](https://img.shields.io/npm/v/@absolunet/prettier-config-pwastudio.svg)](https://www.npmjs.com/package/@absolunet/prettier-config-pwastudio) | [PWA Studio](https://github.com/magento/pwa-studio) rules | [docs](https://documentation.absolunet.com/prettier-config/pwastudio) |
| [@absolunet/prettier-config-spire](packages/spire) | [![npm](https://img.shields.io/npm/v/@absolunet/prettier-config-spire.svg)](https://www.npmjs.com/package/@absolunet/prettier-config-spire) | [Spire](https://www.episerver.com/products/b2b-commerce-cloud) rules | [docs](https://documentation.absolunet.com/prettier-config/spire) |

### Dependency tree
```
                                 ┌────────────────┐
                                 │      core      │
                                 └────────────────┘
                                          │
                                          │
                        ┌─────────────────┴─────────────────┐
                        │                                   │
                        │                                   │
                        ▼                                   ▼
               ┌────────────────┐                  ┌────────────────┐
               │   pwastudio    │                  │      spire     │
               └────────────────┘                  └────────────────┘
```


## Install

```
$ npm install @absolunet/prettier-config-[RULESET]
```


## Usage

Add some Prettier config to your `.prettierrc.js`:

```js
module.exports = {
  ...require("@absolunet/prettier-config-[RULESET]")
};
```


## Related

- [@absolunet/eslint-config](https://github.com/absolunet/eslint-config) - ESLint shareable config.
- [@absolunet/stylelint-config](https://github.com/absolunet/stylelint-config) - stylelint extendable config.


## License
MIT © [Absolunet](https://absolunet.com)
