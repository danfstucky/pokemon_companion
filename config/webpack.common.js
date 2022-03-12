const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'router': path.join(__dirname, '../src/router'),
            'store': path.join(__dirname, '../src/store'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // Allows importing scss/css files and using scss in vue components.
            {
                test: /\.(scss|css)$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader',
                    {
                        // Image Optimization
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true, // disable for local dev so quicker loads
                            mozjpeg: {
                                enabled: true,
                                progressive: true,
                            },
                            optipng: {
                                enabled: true,
                            },
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.png',
            inject: true
        })
    ]
}
