# @absolunet/prettier-loader

[![npm](https://img.shields.io/npm/v/@absolunet/prettier-loader.svg)](https://www.npmjs.com/package/@absolunet/prettier-loader)
[![npm dependencies](https://david-dm.org/absolunet/prettier-config/status.svg?path=packages/loader)](https://david-dm.org/absolunet/prettier-config?path=packages/loader)
[![npms](https://badges.npms.io/%40absolunet%2Fprettier-loader.svg)](https://npms.io/search?q=%40absolunet%2Fprettier-loader)
[![tests](https://github.com/absolunet/prettier-config/workflows/tests/badge.svg?branch=master)](https://github.com/absolunet/prettier-config/actions?query=workflow%3Atests+branch%3Amaster)

> Prettier YAML configuration loader

Reads and parses a Prettier YAML [shareable config](https://prettier.org/docs/developer-guide/shareable-configs.html) file and merges it over a parent configuration.


## Install

```
$ npm install @absolunet/prettier-loader
```


## Usage

Expects a `shareable-config.yaml` file in the root of your package.

```js
import loader    from '@absolunet/prettier-loader';
import xyzConfig from 'prettier-config-XYZ';

module.exports = loader({
	root:         __dirname,
	parentConfig: xyzConfig
});
```


## Related

- [Opiniated configs](https://github.com/absolunet/prettier-config)


## Documentation

View [documentation](https://documentation.absolunet.com/prettier-config/loader)






<br><br>

## License
MIT © [Absolunet](https://absolunet.com)
