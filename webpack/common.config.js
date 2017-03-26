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
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.css'],
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
      test: /\.json$/,
      loaders: ['json-loader'],
      exclude: /node_modules/,
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
