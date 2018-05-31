const path = require('path'); /*require a node path module*/
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test'){
  require('dotenv').config({path:'.env.test'});
} else if(process.env.NODE_ENV === 'development'){
  require('dotenv').config({path:'.env.development'});
}
module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  console.log('env',env);
  return {
    entry: ['babel-polyfill','./src/app.js'], //support old browser
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
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY' : JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMIN' : JSON.stringify(process.env.FIREBASE_AUTH_DOMIN),
        'process.env.FIREBASE_DATABASE_URL' : JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID' : JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET' : JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID' : JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true, /*tell the browser serve the index.html page when 404*/
      publicPath: '/dist/'
    }
  };
};
