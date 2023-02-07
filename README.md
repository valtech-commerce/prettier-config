# Prettier config
[![Tests][tests-badge]][tests-url]
[![Lerna][lerna-badge]][lerna-url]


> Opinionated Prettier [shareable configs](https://prettier.io/docs/en/configuration.html#sharing-configurations).

## Rulesets

| Package | Version | Description | Documentation |
|---|---|---|---|
| **[@valtech-commerce/prettier-config-core](packages/core)** | [![npm](https://img.shields.io/npm/v/@valtech-commerce/prettier-config-core.svg)](https://www.npmjs.com/package/@valtech-commerce/prettier-config-core) | **Core rules** | [docs](https://valtech-commerce.github.io/prettier-config/core) |
| [@valtech-commerce/prettier-config-pwastudio](packages/pwastudio) | [![npm](https://img.shields.io/npm/v/@valtech-commerce/prettier-config-pwastudio.svg)](https://www.npmjs.com/package/@valtech-commerce/prettier-config-pwastudio) | [PWA Studio](https://github.com/magento/pwa-studio) rules | [docs](https://valtech-commerce.github.io/prettier-config/pwastudio) |
| [@valtech-commerce/prettier-config-spire](packages/spire) | [![npm](https://img.shields.io/npm/v/@valtech-commerce/prettier-config-spire.svg)](https://www.npmjs.com/package/@valtech-commerce/prettier-config-spire) | [Spire](https://www.episerver.com/products/b2b-commerce-cloud) rules | [docs](https://valtech-commerce.github.io/prettier-config/spire) |
|-|-|-|-|
| [@valtech-commerce/prettier-loader](packages/loader) | [![npm](https://img.shields.io/npm/v/@valtech-commerce/prettier-loader.svg)](https://www.npmjs.com/package/@valtech-commerce/prettier-loader) | Config loader | [docs](https://valtech-commerce.github.io/prettier-config/loader) |

### Dependency tree
```mermaid
  graph TD;
    A[core] --> B[pwastudio];
    A[core] --> C[spire];
```


## Install

```
$ npm install @valtech-commerce/prettier-config-[RULESET]
```


## Usage

Add some Prettier config to your `.prettierrc.cjs`:

```js
module.exports = {
  ...require("@valtech-commerce/prettier-config-[RULESET]")
};
```


## Related

- [@valtech-commerce/eslint-config](https://github.com/valtech-commerce/eslint-config) - ESLint shareable config.
- [@valtech-commerce/stylelint-config](https://github.com/valtech-commerce/stylelint-config) - stylelint extendable config.


# Documentation

See the [full documentation](https://valtech-commerce.github.io/prettier-config) for an in-depth look.

See the [Changelog](CHANGELOG.md) to see what has changed.


## Contribute

See the [Contributing Guidelines](CONTRIBUTING.md) for ways to get started.

See the [Support Guide](SUPPORT.md) for ways to get help.

See the [Security Policy](SECURITY.md) for sharing vulnerability reports.

This project has a [Code of Conduct](CODE_OF_CONDUCT.md).
By interacting with this repository, organization, or community you agree to abide by its terms.


## License

[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)




[tests-badge]: https://github.com/valtech-commerce/prettier-config/workflows/tests/badge.svg?branch=main
[lerna-badge]: https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg

[tests-url]: https://github.com/valtech-commerce/prettier-config/actions?query=workflow%3Atests+branch%main
[lerna-url]: https://lernajs.io/
