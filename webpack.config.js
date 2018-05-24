const path = require('path'); /*require a node path module*/
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  console.log('env',env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public','dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/, /*check all the file end with js and load them into babel*/
        exclude:/node_modules/ /*the files that are not in node_modules */
      },{
        test:/\.s?css$/, /*support both css and scss by adding ? mark*/
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true, /*tell the browser serve the index.html page when 404*/
      publicPath: '/dist/'
    }
  };
};
