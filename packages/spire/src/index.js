//--------------------------------------------------------
//-- Prettier config
//--------------------------------------------------------
import path       from 'path';
import pkgDir     from 'pkg-dir';
import fss        from '@absolunet/fss';
import coreConfig from '@absolunet/prettier-config-core';

module.exports = {
	...coreConfig,
	...fss.readYaml(path.join(
		pkgDir.sync(__dirname),
		'shareable-config.yaml'
	))
};
