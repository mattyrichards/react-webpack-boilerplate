const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const CONFIG = {
  source: path.join(__dirname, 'src'),
  sourcePath: '/js/',
  sourcePathCSS: '/scss/',
  sourcePathName: 'entry.js',
  build: path.join(__dirname, 'build'),
  buildPath: '/js/',
  buildPathName: 'app.js'
};

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    CONFIG.source + CONFIG.sourcePath + CONFIG.sourcePathName
  ],
  output: {
    path: CONFIG.build + CONFIG.buildPath,
    filename: CONFIG.buildPathName,
    publicPath: '/js/',
    contentBase: CONFIG.build
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("matt.css")
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css-loader!sass-loader!autoprefixer-loader"),
        include: CONFIG.source + CONFIG.sourcePathCSS
      },
      {
        test: /\.js?/,
        loaders: [
          'react-hot', 
          'babel?presets[]=react,presets[]=es2015'
        ],
        include: CONFIG.source + CONFIG.sourcePath
      }
    ]
  }
};

