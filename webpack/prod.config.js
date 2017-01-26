const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css!postcss-loader',
    }, {
      test: /\.styl$/,
      loader: 'style!css!postcss-loader!stylus',
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      __DEVELOPMENT__: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
    }),
  ],
};
