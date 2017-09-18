const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const merge = require('webpack-merge');

const development = require('./dev.config.js');
const production = require('./prod.config.js');

const PATHS = {
  entry: path.join(__dirname, '../client'),
  build: path.join(__dirname, '../dist'),
};

const common = {
  entry: [
    PATHS.entry,
  ],

  output: {
    path: PATHS.build,
    filename: 'client.js',
    publicPath: '/static/',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.css'],
    modulesDirectories: ['node_modules', PATHS.entry],
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, '../client'),
        ],
      }
    ],
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=650000&mimetype=application/font-woff&name=[name].[ext]'
    }, {
      test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=650000&mimetype=application/font-woff2&name=[name].[ext]'
    }, {
      test: /\.[ot]tf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=650000&mimetype=application/octet-stream&name=[name].[ext]'
    }, {
      test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=650000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]'
    }, {
      test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=650000&mimetype=image/svg+xml&name=[name].[ext]'
    }, {
      test: /\.png$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.jpg$/,
      loader: 'file?name=[name].[ext]',
    }],
  },

  postcss: (webpack) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
      postcssImport({
        addDependencyTo: webpack,
      }),
    ];
  },
};

if (process.env.NODE_ENV === 'development') {
  module.exports = merge(development, common);
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(production, common);
}
