/* Well, it's tricky to explain, why we're really using webpack. I was using it in most of my past projects and there aren't reasons why should not use it. */

const path = require('path')
const webpack = require('webpack')

const bar = require('webpackbar')
const errors = require('friendly-errors-webpack-plugin')
const nodemon = require('nodemon-webpack-plugin')
const tspaths = require('tsconfig-paths-webpack-plugin')

const { ESBuildMinifyPlugin } = require('esbuild-loader')
const { merge } = require('webpack-merge')

const baseConfig = {
	entry: './lib/index.ts',
	target: 'node',
	stats: 'none',
	devServer: {
		quiet: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'esbuild-loader',
				exclude: /node_modules/,
				options: {
					loader: 'ts',
					target: 'esnext',
				},
			},
			/* An alternative loader for TypeScript,
			 * esbuild is faster than ts-loader, so we'll keep it for now.
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			*/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		plugins: [new tspaths()],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	externals: {
		express: 'commonjs express',
		consola: 'commonjs consola',
		keyv: 'commonjs keyv',
		mongodb: 'commonjs mongodb',
	},
}
const productionConfig = {
	mode: 'production',
	plugins: [
		new bar({
			name: 'mellstruct',
		}),
		new errors(),
	],
	optimization: {
		minimizer: [
			new ESBuildMinifyPlugin({
				target: 'esnext', // Syntax to compile to (see options below for possible values)
			}),
		],
	},
}

const developmentConfig = {
	mode: 'development',
	watch: true,
	plugins: [
		new bar({
			name: 'mellstruct',
		}),
		new errors(),
		new nodemon({
			quiet: true,
		}),
	],
}

if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'CI') {
	module.exports = merge(baseConfig, productionConfig)
} else {
	module.exports = merge(baseConfig, developmentConfig)
}
