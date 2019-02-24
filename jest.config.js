module.exports = {
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
	],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			diagnostics: false,
		},
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
};
