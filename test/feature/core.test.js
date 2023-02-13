//--------------------------------------------------------
//-- core - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./core.gwt";

describe(`Validate that 'core' works`, () => {
	configTests({ given, when, then });
});
