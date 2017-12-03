const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

module.exports = {
  entry: [
    // Required for HOT reloading in React
    'react-hot-loader/patch',
    // Configure dev server address/port
    'webpack-dev-server/client?http://localhost:8080',
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',
    // Entry point of application
    config.pathSource + config.pathJSAbsolute + config.filenameEntry
  ],
  output: {
    // Filename requires relative path to JS folder
    filename: config.pathJSRelative + config.filenameOutput,
    // Path used for all output assets
    path: config.pathOutput,
    // Required by dev server/ HMR
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
    historyApiFallback: true,
    // Where to serve content from
    contentBase: config.pathOutput,
    // Hot yes please
    hot: true,
    // Required by dev server/ HMR
    publicPath: '/',
  },
  plugins: [
    // Prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // We want to write our own index.html file from a Handlebars template
    new htmlWebpackPlugin({
      template: config.pathSource + config.pathSourceTemplate + config.filenameTemplate,
      filename: config.filenameHTML
    })
  ]
};
