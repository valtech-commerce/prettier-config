//--------------------------------------------------------
//-- Config - Given-When-Then
//--------------------------------------------------------
import path from "path";
import * as gwt from "../base.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

let root;
let config;
let prettier;

//-- Given - Reset
given.noRoot = () => {
	root = undefined;
};

given.noConfig = () => {
	config = undefined;
};

//-- Given - Root
given.root = (value) => {
	root = value;
};

given.prettier = () => {
	// eslint-disable-next-line node/global-require
	prettier = require(require.resolve("prettier", { paths: [path.join(__dirname, "..", "..", "packages", "core")] }));
};

//-- When - Config
when.configIsLoaded = () => {
	when.attempting(() => {
		config = require(root); // eslint-disable-line node/global-require
	});
};

when.configIsUsed = () => {
	when.configIsLoaded();
	when.attempting(() => {
		prettier.check("", { ...config, parser: "babel" });
	});
};

//-- Then - Config
then.configShouldNotBeEmpty = () => {
	expect(config).toBeObject();
	expect(config).not.toEqual({});
};

export { given, when, then };
