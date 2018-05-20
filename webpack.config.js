// const path = require('path');
//
// module.exports = {
//     entry: {
//         index: './client/src/index.js'
//     },
//     output: {
//         filename: '[name].js',
//         path: path.resolve(__dirname, 'client/dist'),
//         library: "index"
//     }
// }



// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.

const path = require('path');

module.exports = {
    mode: 'production',

    entry: {
        index: path.resolve(__dirname, 'client/src/index.ts')
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'client/dist'),
        library: "index"
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',

    // Add the loader for .ts files.
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    }
};
