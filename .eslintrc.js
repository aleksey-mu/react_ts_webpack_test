module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
	},
	extends: ['airbnb-base', 'prettier', 'prettier/react'],

	plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],

	rules: { strict: 0 },
};
