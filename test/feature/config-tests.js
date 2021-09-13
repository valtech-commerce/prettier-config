//--------------------------------------------------------
//-- Config tests
//--------------------------------------------------------
export default ({ given, when, then }) => {
	beforeEach(() => {
		given.noException();
		given.noRoot();
		given.noConfig();
		given.prettier();
		given.currentRoot();
	});

	test(`Ensure YAML is parsable`, () => {
		when.configIsLoaded();
		then.shouldNotHaveThrown();
	});

	test(`Ensure file contains config`, () => {
		when.configIsLoaded();
		then.configShouldNotBeEmpty();
	});

	test(`Ensure config can be used`, () => {
		when.configIsUsed();
		then.shouldNotHaveThrown();
	});
};
