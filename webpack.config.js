const webpack = require('webpack')
const path = require('path')

const package = require('./package.json')
const version = JSON.stringify(package.version)

const plugins = [
	new webpack.BannerPlugin({
		banner:
			`@license Urpflanze v${version}` +
			`\n[file]` +
			`\n\nGithub: https://github.com/urpflanze-org/core` +
			`\n\nThis source code is licensed under the MIT license found in the\nLICENSE file in the root directory of this source tree.`,
	}),
]

const umd = bProduction => ({
	entry: {
		urpflanze: './dist/cjs/index.js',
	},
	output: {
		filename: bProduction ? 'urpflanze.min.js' : 'urpflanze.js',
		path: path.resolve('./build/umd'),
		library: {
			name: 'Urpflanze',
			type: 'umd',
		},
		globalObject: 'window',
	},
	plugins,
	devtool: bProduction ? undefined : 'source-map',
	mode: bProduction ? 'production' : 'none',
})

const esm = bProduction => ({
	entry: {
		urpflanze: './dist/esm/index.js',
	},
	output: {
		filename: bProduction ? 'urpflanze.min.js' : 'urpflanze.js',
		path: path.resolve('./build/esm'),
		library: {
			type: 'module',
		},
	},
	plugins,
	devtool: bProduction ? undefined : 'source-map',
	mode: bProduction ? 'production' : 'none',
	experiments: {
		outputModule: true,
	},
})

module.exports = [umd(false), umd(true), esm(false), esm(true)]
