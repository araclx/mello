const parallelvars = require('ci-parallel-vars')
const os = require('os')

module.exports = {
	extensions: ['ts'],
	require: ['ts-node/register', 'tsconfig-paths/register'],
	failFast: true,
	failWithoutAssertions: true,
	verbose: true,
	// concurrency: os.cpus().length - 1,
	// workerThreads: os.cpus().length - 1,
	tap: false,
	cache: true,
	timeout: '60s',
	files: ['lib/__tests__/**/*'],
	environmentVariables: {
		NODE_ENV: 'CI',
	},
}
