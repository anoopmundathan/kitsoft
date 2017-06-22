
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
            { 
            	test: /\.js$/, 
            	use: 'babel-loader' 
            }
		]
	},
	plugins: [new htmlWebpackPlugin({
		template: './public/index.html',
		minify: {
			collapseWhitespace: true,
        	removeComments: true,
        	removeRedundantAttributes: true,
        	removeScriptTypeAttributes: true,
        	removeStyleLinkTypeAttributes: true
		}
	})]
}

module.exports = config;