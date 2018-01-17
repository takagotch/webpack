const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');
const path              = require('path');
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js',
    search: './src/search.js',
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  },
  output: {
   //filename: 'bundle.js',
    filename: '[name].js',
   //path: '/home/proj/public/assets'
    path: __dirname + '/dist'
   //path: "/home/proj/cdn/assets/[hash]",
   //publicPath: "http://cdn.example.com/assets/[hash]/"
  }
};

//__webpack_public_path__ = myRuntimePublicPath

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { 
       //test: /\.txt$/,
	 test: /\.(js|jsx)$/,
	 use: 'raw-loader'
       //test: /\.css$/,
       //use: 'css-loader'
      }
    ]
  }
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;


