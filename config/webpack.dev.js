const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        devMiddleware: {
            stats: 'minimal',
        },
        static: {
            // directory: path.join(__dirname, 'static')
            directory: path.join(__dirname, '../src')
        }
    },
});
