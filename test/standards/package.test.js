//--------------------------------------------------------
//-- Standards tests
//--------------------------------------------------------
import { given, when, then } from "./package.gwt";

describe(`Validate package.json`, () => {
	beforeEach(() => {
		given.noException();
		given.noRoot();
		given.noPackage();
	});

	test(`Ensure name is valid`, () => {
		given.root();
		when.packageIsParsed();
		then.packageNameShouldBeValid();
	});

	test(`Ensure keywords are valid`, () => {
		given.root();
		when.packageIsParsed();
		then.packageKeywordsShouldBeValid();
	});

	test(`Ensure exports endpoints exist`, () => {
		given.root();
		when.packageIsParsed();
		then.packageExportsShouldExist();
	});
});
