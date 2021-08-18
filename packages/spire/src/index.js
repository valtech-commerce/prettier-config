//--------------------------------------------------------
//-- Prettier config
//--------------------------------------------------------
import coreConfig from '@absolunet/prettier-config-core';
import loader     from '@absolunet/prettier-loader';

module.exports = loader({
	root:         __dirname,
	parentConfig: coreConfig
});
