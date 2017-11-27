const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    config.pathSource + config.pathJSAbsolute + config.filenameEntry
  ],
  output: {
    filename: config.pathJSRelative + config.filenameOutput,
    path: config.pathOutput,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader'
          }
        ]
      }
    ]
  },
  devtool: 'eval',
  devServer: {
    contentBase: config.pathOutput,
    hot: true,
    publicPath: '/',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: config.pathSource + config.pathSourceTemplate + config.filenameTemplate,
      filename: config.filenameHTML
    })
  ]
};