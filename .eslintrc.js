module.exports = {
	extends: [ 'airbnb-base' ],
	parser: "@typescript-eslint/parser",
	plugins: [ "@typescript-eslint" ],
	rules: {
		indent: [ 2, 'tab' ],
		'no-tabs': 0,
		'space-in-parens': [ 2, 'always' ],
		'template-curly-spacing': [ 2, 'always' ],
		'array-bracket-spacing': [ 2, 'always' ],
		'object-curly-spacing': [ 2, 'always' ],
		'computed-property-spacing': [ 2, 'always' ],
	},
	"settings": {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"]
			}
		},
	},
	overrides: [
		{
			files: [ '*.spec.js', '*.spec.ts' ],
			env: {
				jest: true
			},
		}
	]
}
