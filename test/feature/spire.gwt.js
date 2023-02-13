//--------------------------------------------------------
//-- spire - Given-When-Then
//--------------------------------------------------------
import path from "node:path";
import * as gwt from "../config.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

given.currentRuleset = () => {
	given.ruleset("spire");
};

given.currentExtraConfig = () => {
	given.extraConfig({
		parserOptions: {
			project: [path.join(__dirname, "fixtures", "tsconfig.json")],
		},
	});
};

export { given, when, then };
