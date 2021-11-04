/* Well, it's tricky to explain, why we're really using webpack. I was using it in most of my past projects and there aren't reasons why should not use it. */

const path = require('path');
const webpack = require('webpack');

const bar = require('webpackbar');
const errors = require('friendly-errors-webpack-plugin');
const nodemon = require('nodemon-webpack-plugin');
const tspaths = require('tsconfig-paths-webpack-plugin');

module.exports = {
	entry: './lib/index.ts',
	mode: 'development', // TODO: Should be realtive to NODE_ENV
	target: 'node',
	watch: true, // TODO: Should be realtive to NODE_ENV
	stats: 'none',

	devServer: {
		quiet: true,
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		plugins: [new tspaths()],
	},

	plugins: [
		new bar({
			name: 'mellstruct',
		}),
		new errors(),
		new nodemon(),
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
