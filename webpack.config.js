const path = require('path');
const webpack = require('webpack');

const buildPath = path.join(__dirname, 'lib');
const entry = path.join(__dirname, 'src', 'index.js');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: [
    entry
  ],
  output: {
    path: buildPath,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ]
};
