const webpack = require('webpack');

 module.exports = {
     entry: './bin/browser/browser.js',
     output: {
         path: './docs',
         filename: 'browser-bundle.js'
     },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
 };
