//--------------------------------------------------------
//-- Config - Given-When-Then
//--------------------------------------------------------
import path from "node:path";
import { given as baseGiven, when as baseWhen, then as baseThen } from "./base.gwt.js";

const given = { ...baseGiven };
const when = { ...baseWhen };
const then = { ...baseThen };

const prettier = require("prettier");

let ruleset;
let configPath;
let config;

//-- Given - Reset
given.noRuleset = () => {
	ruleset = undefined;
};

given.noConfig = () => {
	config = undefined;
};

//-- Given - Ruleset
given.ruleset = (value) => {
	ruleset = value;
};

//-- When - Config
when.configIsLoaded = () => {
	when.attempting(() => {
		configPath = path.join(__dirname, "..", "src", "config", ruleset);
		config = require(configPath);
	});
};

when.configIsUsed = async () => {
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
