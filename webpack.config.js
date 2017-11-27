const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    paths.source + paths.sourcePath + paths.sourcePathName
  ],
  output: {
    filename: paths.buildPathName,
    path: paths.build + paths.buildPath,
    publicPath: paths.buildPath
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
    contentBase: paths.build,
    hot: true,
    publicPath: paths.buildPath,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      filename: paths.build + '/index.html',
      template: paths.source + paths.sourcePathTemplate + 'index.hbs',
    })
  ]
};