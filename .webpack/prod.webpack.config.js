const baseConfig = require('./base.webpack.config')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const bar = require('webpackbar')
const errors = require('friendly-errors-webpack-plugin')

const { merge } = require('webpack-merge')

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

module.exports = merge(baseConfig, productionConfig)
