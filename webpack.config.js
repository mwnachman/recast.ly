var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: './index',

  output: {
    path: __dirname + '/compiled/src',
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          cacheDirectory: true
        }
      }
    ]
  },

  resolve: {
    root: [
      path.resolve(__dirname + '/compiled/src/components')
    ]
  }
}