const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        "index": "./client/src/index.ts",
        "projectTemplate": "./client/src/projectTemplate.ts"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'client/dist'),
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
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
};
