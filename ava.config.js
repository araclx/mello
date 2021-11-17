module.exports = {
	extensions: ['ts'],
	require: ['ts-node/register', 'tsconfig-paths/register'],
	failFast: true,
	failWithoutAssertions: false,
	verbose: true,
	concurrency: 8,
	tap: false,
	cache: true,
	timeout: '30s',
	files: ['__tests__/**/*'],
	environmentVariables: {
		NODE_ENV: 'CI',
	},
}
