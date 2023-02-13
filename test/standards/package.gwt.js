//--------------------------------------------------------
//-- Standards - Given-When-Then
//--------------------------------------------------------
import path from "node:path";
import { fsSync } from "@valtech-commerce/fs";
import * as gwt from "../base.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

let root;
let packageConfig;

//-- Given - Reset
given.noRoot = () => {
	root = undefined;
};

given.noPackage = () => {
	packageConfig = undefined;
};

//-- Given - Root
given.root = () => {
	root = path.join(__dirname, "..", "..");
};

//-- When - Package
when.packageIsParsed = () => {
	packageConfig = fsSync.readJson(path.join(root, "package.json"));
};

//-- Then - Config
then.packageNameShouldBeValid = () => {
	expect(packageConfig.name).toMatch(/^@valtech-commerce\/.+$/u);
};

then.packageKeywordsShouldBeValid = () => {
	expect(packageConfig.keywords).toIncludeAllMembers(["prettier", "prettierconfig", "prettier-config"]);
};

then.packageExportsShouldExist = () => {
	Object.values(packageConfig.exports).forEach((file) => {
		expect(fsSync.exists(path.join(root, file))).toBeTrue();
	});
};

export { given, when, then };
