const webpack = require('webpack');
const CONFIG = require('./path.config');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');
const values = require('postcss-modules-values');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const atImport = require('postcss-import');
const calc = require('postcss-calc');
const nested = require('postcss-nested');

module.exports = {
  entry: [
    CONFIG.source + CONFIG.sourcePath + CONFIG.sourcePathName
  ],
  output: {
    path: CONFIG.build + CONFIG.buildPath,
    filename: CONFIG.buildPathName,
    contentBase: CONFIG.build,
    publicPath: '/js/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: CONFIG.source + CONFIG.sourcePath
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015'
        ],
        exclude: 'node_modules',
        include: CONFIG.source + CONFIG.sourcePath
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader',
            include: CONFIG.source + CONFIG.sourcePathCSS
          },
          {
            loader: 'css-loader',
            include: CONFIG.source + CONFIG.sourcePathCSS,
            query: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            include: CONFIG.source + CONFIG.sourcePathCSS
          }
        ])
      }
    ]
  },
  postcss: function (webpack) {
    return [atImport({addDependencyTo: webpack}), nested, values, calc({mediaQueries: true}), autoprefixer];
  },
  devtool: 'eval',
  plugins: [

  ]
};
