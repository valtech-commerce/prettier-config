//--------------------------------------------------------
//-- pwastudio - Feature tests
//--------------------------------------------------------
import configTests from "../config";
import { given, when, then } from "./pwastudio.gwt";

describe(`Validate that 'pwastudio' works`, () => {
	configTests({ given, when, then });
});
