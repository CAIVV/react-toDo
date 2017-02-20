var path = require("path");

module.exports = {
	entry: './src/App.jsx' ,
	
	output: {
		path: path.join(__dirname, "public"),
		filename: 'bundle.js',
		publicPath: "/"
	},
	
	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
	},
	
	module:{
		loaders:[
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'react-hot-loader!babel-loader'
			},
			{
				test: /\.scss$/,
				loaders: 'style-loader!css-loader!sass-loader'
			}
		] 
	},
	
	devtool: 'eval-source-map',
	
	resolve: {
		extensions: ['.js', '.jsx']
	}
};