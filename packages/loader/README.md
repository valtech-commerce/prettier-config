# @valtech-commerce/prettier-loader

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]


> Prettier YAML configuration loader

Reads and parses a Prettier YAML [shareable config](https://prettier.org/docs/developer-guide/shareable-configs.html) file and merges it over a parent configuration.


## Install

```
$ npm install @valtech-commerce/prettier-loader
```


## Usage

Expects a `shareable-config.yaml` file in the root of your package.

```js
import loader    from '@valtech-commerce/prettier-loader';
import xyzConfig from 'prettier-config-XYZ';

module.exports = loader({
	root:         __dirname,
	parentConfig: xyzConfig
});
```


## Related

- [Opiniated configs](https://github.com/valtech-commerce/prettier-config)


## Documentation

View [documentation](https://valtech-commerce.github.io/prettier-config/loader)


## License
[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)




[npm-badge]:          https://img.shields.io/npm/v/@valtech-commerce/prettier-loader?style=flat-square
[dependencies-badge]: https://img.shields.io/david/valtech-commerce/prettier-config?path=packages/loader&style=flat-square
[tests-badge]:        https://img.shields.io/github/workflow/status/valtech-commerce/prettier-config/tests/main?label=tests&style=flat-square
[npms-badge]:         https://badges.npms.io/%40valtech-commerce%2Fprettier-loader.svg?style=flat-square
[license-badge]:      https://img.shields.io/badge/license-MIT-green?style=flat-square

[npm-url]:          https://www.npmjs.com/package/@valtech-commerce/prettier-loader
[dependencies-url]: https://david-dm.org/valtech-commerce/prettier-config?path=packages/loader
[tests-url]:        https://github.com/valtech-commerce/prettier-config/actions?query=workflow%3Atests+branch%3Amain
[npms-url]:         https://npms.io/search?q=%40valtech-commerce%2Fprettier-loader
[license-url]:      https://opensource.org/licenses/MIT
