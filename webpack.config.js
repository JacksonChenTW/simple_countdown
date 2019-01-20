const path = require('path');
const webpack = require("webpack");

module.exports = {

	// モード：development、production、none （ https://webpack.js.org/concepts/mode/ ）
	mode: "development",

	// load the babel-polly in 
	entry: ["babel-polyfill","./src/src.js"],

	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin("版权所有，盗版必究！"),
	],
	output:{
		filename:'bundle.js',
		path: path.resolve(__dirname, 'src')
	}
}
