const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
    entry: './js/index.js',
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
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
            ],
        },
};