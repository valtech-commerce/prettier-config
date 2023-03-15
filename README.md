# Prettier config

[![npm][npm-badge]][npm-url]
[![npms.io: Score][npmsio-badge]][npmsio-url]
[![libraries.io: SourceRank][librariesio-badge]][librariesio-url]
[![Tests][tests-badge]][tests-url]
[![License: MIT][license-badge]][license-url]

> Opinionated Prettier [shareable configs](https://prettier.io/docs/en/configuration.html#sharing-configurations).

## Rulesets

| Ruleset                                | Description    |
| -------------------------------------- | -------------- |
| **[core](shareable-config/core.yaml)** | **Core rules** |

### Dependency tree

```mermaid
  graph TD;
    core;
```

## Install

```
$ npm install @valtech-commerce/prettier-config
```

## Usage

Add some Prettier config to your `.prettierrc.cjs`:

```js
module.exports = {
	...require("@valtech-commerce/prettier-config/[RULESET]"),
};
```

## Documentation

See the [Changelog](CHANGELOG.md) to see what has changed.

## Contribute

See the [Contributing Guidelines](CONTRIBUTING.md) for ways to get started.

See the [Support Guide](SUPPORT.md) for ways to get help.

See the [Security Policy](SECURITY.md) for sharing vulnerability reports.

This project has a [Code of Conduct](CODE_OF_CONDUCT.md).
By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)

[npm-badge]: https://img.shields.io/npm/v/@valtech-commerce/prettier-config?style=flat-square
[npmsio-badge]: https://img.shields.io/npms-io/final-score/@valtech-commerce/prettier-config?style=flat-square
[librariesio-badge]: https://img.shields.io/librariesio/sourcerank/npm/@valtech-commerce/prettier-config?style=flat-square
[tests-badge]: https://img.shields.io/github/actions/workflow/status/valtech-commerce/prettier-config/tests.yaml?style=flat-square&branch=main
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@valtech-commerce/prettier-config
[npmsio-url]: https://npms.io/search?q=%40valtech-commerce%2Fprettier-config
[librariesio-url]: https://libraries.io/npm/@valtech-commerce%2Fprettier-config
[tests-url]: https://github.com/valtech-commerce/prettier-config/actions/workflows/tests.yaml?query=branch%3Amain
[license-url]: https://opensource.org/licenses/MIT
