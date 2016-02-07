const webpack = require('webpack');
const path = require('path');

const CONFIG = {
  source: path.join(__dirname, 'src'),
  sourcePath: '/js/',
  sourcePathName: 'index.js',
  build: path.join(__dirname, 'build'),
  buildPath: '/js/',
  buildPathName: 'main.js'
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
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?/,
      loaders: ['react-hot', 'babel'],
      include: CONFIG.source + CONFIG.sourcePath
    }]
  }
};
