const path = requuire('path');

module.exports = {
//watch: true,
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js')
  }
};
//module: {
//  rules: [{
//    test: /\.js$/,
//    exclude: /node_modules/,
//    use: [{
//      loader: 'babel-loader',
//      options: {
//        preset: ['env']
//     //loader: 'babel-loader?presets[]=env'
//      }   //{
//          //  loader: 'jshint-loader'
//          //}
//    }],
//  },{
//    enforce: 'pre',
//    test: /\.js$/,
//    exclude: /node_modules/,
//    loader: 'eslint-loader',
//  }],
//},
//plugins: [
//  new webpack.optimize.UglifyJsPlugin({
//    compress: {
//      drop_console: true
//    },
//  }),
//  new webpack.ProvidePlugin({
//    $: 'jquery'
//  }),
//],
//

