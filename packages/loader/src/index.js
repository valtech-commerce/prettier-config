//--------------------------------------------------------
//-- Read and process shareable config
//--------------------------------------------------------
import deepMerge                 from 'deepmerge';
import path                      from 'path';
import pkgDir                    from 'pkg-dir';
import fss                       from '@absolunet/fss';
import { Joi, validateArgument } from '@absolunet/joi';


module.exports = (options) => {
	options.filename     = options.filename     || 'shareable-config.yaml';
	options.parentConfig = options.parentConfig || {};

	validateArgument('options', options, Joi.object({
		root:         Joi.string().required().empty(),
		filename:     Joi.string().required().empty(),
		parentConfig: Joi.object().empty()
	}).required());

	const shareableConfig = fss.readYaml(path.join(pkgDir.sync(options.root), options.filename));

	return deepMerge(shareableConfig, options.parentConfig);
};