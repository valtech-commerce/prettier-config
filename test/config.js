//--------------------------------------------------------
//-- Config tests
//--------------------------------------------------------

export default ({ given, when, then }) => {
	beforeEach(() => {
		given.noException();
		given.noRuleset();
		given.noConfig();
		given.currentRuleset();
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
