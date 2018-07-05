const path = require('path');

const PATHS = {
  source: path.join(__dirname, 'src'),
  distr: path.join(__dirname, 'dist')
};

module.exports = {
  mode: 'production',
  entry: PATHS.source + '/index.tsx',
  output: {
    path: PATHS.distr,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    }]
  }
};
