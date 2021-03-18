const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATH = require('path');

module.exports = {
    entry: './src/script/index.js',
    output: {
        filename: 'main.js',
        path: PATH.resolve(__dirname, ''),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",]
            }
        ]
    },






};


