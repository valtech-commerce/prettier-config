//--------------------------------------------------------
//-- Loader - Given-When-Then
//--------------------------------------------------------
import path from "path";
import * as gwt from "../../../../test/base.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

let myFunction;
let root;
let filename;
let config;
let parentConfig;

//-- Given - Reset
given.noFunction = () => {
	myFunction = undefined;
};

given.noRoot = () => {
	root = undefined;
};

given.noFilename = () => {
	filename = undefined;
};

given.noParentConfig = () => {
	parentConfig = undefined;
};

given.noConfig = () => {
	config = undefined;
};

//-- Given
given.rootDefined = () => {
	root = path.join(__dirname, "fixtures");
};

given.parentConfigDefined = () => {
	parentConfig = {
		tabWidth: 16,
		printWidth: 20,
	};
};

//-- When
when.packageIsLoaded = () => {
	myFunction = require(path.join(__dirname, "..", "..", "dist", "node")); // eslint-disable-line node/global-require
};

when.functionIsCalled = () => {
	when.attempting(() => {
		config = myFunction({
			root,
			filename,
			parentConfig,
		});
	});
};

//-- Then
then.defaultExportShouldBeAFunction = () => {
	expect(myFunction).toBeFunction();
};

then.configShouldContainFileContent = () => {
	expect(config).toContainEntries([
		["lorem", "ipsum"],
		["tabWidth", 2],
	]);
};

then.configShouldContainParentConfig = () => {
	expect(config).toContainEntries([
		["lorem", "ipsum"],
		["tabWidth", 2],
		["printWidth", 20],
	]);
};

export { given, when, then };
