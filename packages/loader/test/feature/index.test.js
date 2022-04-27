//--------------------------------------------------------
//-- Loader - Feature tests
//--------------------------------------------------------
import { given, when, then } from "./index.gwt";

describe(`Validate that loader works`, () => {
	beforeEach(() => {
		given.noException();
		given.noFunction();
		given.noRoot();
		given.noFilename();
		given.noParentConfig();
		given.noConfig();
	});

	test(`Ensure default export is a function`, () => {
		when.packageIsLoaded();
		then.defaultExportShouldBeAFunction();
	});

	test(`Ensure root path is mandatory`, () => {
		when.packageIsLoaded();
		when.functionIsCalled();
		then.shouldHaveThrownMessageContaining('"options.root" is required');
	});

	test(`Ensure config contains parsed file content`, () => {
		given.rootDefined();
		when.packageIsLoaded();
		when.functionIsCalled();
		then.configShouldContainFileContent();
	});

	test(`Ensure config contains parent config and conflicting entries are overwritten`, () => {
		given.rootDefined();
		given.parentConfigDefined();
		when.packageIsLoaded();
		when.functionIsCalled();
		then.configShouldContainParentConfig();
	});
});
