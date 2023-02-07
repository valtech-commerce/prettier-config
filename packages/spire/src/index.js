//--------------------------------------------------------
//-- Prettier config
//--------------------------------------------------------
import coreConfig from "@valtech-commerce/prettier-config-core";
import loader from "@valtech-commerce/prettier-loader";

module.exports = loader({
	root: __dirname,
	parentConfig: coreConfig,
});
