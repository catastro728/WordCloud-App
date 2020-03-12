'use strict'
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            loaders : 'babel-loader'    //버전 호환
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            context: './public',
            from: '*.*'
        }])
    ],
    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 8080
    }
}