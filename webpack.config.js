const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  distr: path.join(__dirname, 'dist')
};


module.exports = {
    mode: 'production',
    entry: PATHS.source + '/index.ts',
    output: {
        path: PATHS.distr,
        filename: '[name].js',
        library: "index"
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
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Task manager"
      })
    ]
};
