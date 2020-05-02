const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: "./bin/browser/browser.js",
    output: {
        path: path.join(__dirname, "docs"),
        filename: "browser-bundle.js",
    },
    optimization: {
        minimize: true,
    },
};
