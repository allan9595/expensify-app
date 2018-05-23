const path = require('path'); /*require a node path module*/

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, /*check all the file end with js and load them into babel*/
      exclude:/node_modules/ /*the files that are not in node_modules */
    },{
      test:/\.s?css$/, /*support both css and scss by adding ? mark*/
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true /*tell the browser serve the index.html page when 404*/
  }
};
