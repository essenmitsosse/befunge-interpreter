module.exports = {
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
	],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
};
