const path = require('path');

module.exports = {
  entry: {
    app: './client/src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'client/dist')
  }
}
