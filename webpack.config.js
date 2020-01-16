const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '.'),
        port: 4200
    }
};