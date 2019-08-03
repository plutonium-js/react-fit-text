// Imports: Dependencies
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  	entry: './src/fit-text.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
		library: 'react-fit-text',
		libraryTarget: 'umd'
	},
	module: {
		rules : [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader:'babel-loader'
		}]
	}
};
