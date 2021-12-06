const bar = require('webpackbar')
const errors = require('friendly-errors-webpack-plugin')
const nodemon = require('nodemon-webpack-plugin')
const baseConfig = require('./base.webpack.config')

const { merge } = require('webpack-merge')

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

module.exports = merge(baseConfig, developmentConfig)
