module.exports = {
	extensions: ['ts'],
	require: ['ts-node/register', 'tsconfig-paths/register'],
	failFast: true,
	concurrency: 5,
	files: ['__tests__/**/*'],
}
