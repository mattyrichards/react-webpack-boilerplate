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
    // this needs to be a relative value so can't use paths.buildPath (/js/)
    filename: 'js/' + paths.buildPathName,
    path: paths.build,
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
    contentBase: paths.build,
    hot: true,
    publicPath: '/',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: paths.source + paths.sourcePathTemplate + 'index.hbs',
      filename: 'index.html'
    })
  ]
};