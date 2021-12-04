module.exports = {
	extensions: ['ts'],
	require: ['ts-node/register', 'tsconfig-paths/register'],
	failFast: true,
	failWithoutAssertions: false,
	verbose: false,
	concurrency: 8,
	tap: false,
	cache: true,
	timeout: '60s',
	files: ['lib/__tests__/**/*'],
	environmentVariables: {
		NODE_ENV: 'CI',
	},
}
