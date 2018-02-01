const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    entry: {
        app: ['./src/index.tsx']
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?-url'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    devtool: 'cheap-module-source-map'
};

module.exports = config;
