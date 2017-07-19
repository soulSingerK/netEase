var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractSass = new ExtractTextPlugin({
	filename: "[name].css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: ['./src/style/scss/index.scss'],
	output: {
		filename: '[name].bundle.css',
		path: path.resolve(__dirname, './dist/style')
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: extractSass.extract({
				use: [{
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}],
				// use style-loader in development 
				fallback: "style-loader"
			})
		}]
	},
	plugins: [
		extractSass
	]

}