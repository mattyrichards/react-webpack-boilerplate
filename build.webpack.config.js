const webpack = require('webpack');
const CONFIG = require('./path.config');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const values = require('postcss-modules-values');

module.exports = {
  entry: [
    CONFIG.source + CONFIG.sourcePath + CONFIG.sourcePathName
  ],
  output: {
    path: CONFIG.build + CONFIG.buildPath,
    filename: CONFIG.buildPathName,
    contentBase: CONFIG.build
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
        include: CONFIG.source + CONFIG.sourcePath,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          combineLoaders([
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
        )
      }
    ]
  },
  postcss: function () {
    return [values, autoprefixer];
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ExtractTextPlugin('../css/styles.css',
    {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};
