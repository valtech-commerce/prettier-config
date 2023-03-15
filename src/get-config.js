//--------------------------------------------------------
//-- Read and process shareable config
//--------------------------------------------------------
const path = require("node:path");
const { fsSync } = require("@valtech-commerce/fs");
const deepMerge = require("deepmerge");

module.exports = (...paths) => {
	return paths.reduce((config, filePath) => {
		const filePaths = filePath.split("/");
		const filename = filePaths.pop();
		const current = fsSync.readYaml(path.join(__dirname, "..", "shareable-config", ...filePaths, `${filename}.yaml`));

		return deepMerge.all([config, current], {
			arrayMerge: (destination, source) => source,
		});
	}, {});
};
