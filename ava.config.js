export default {
	extensions: ['ts'],
	require: ['ts-node/register'],
	failFast: true,
	concurrency: 5,
	files: ['__tests__/**/*'],
};
