const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Development',
        template: './src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                 use: [
    {
        loader: 'file-loader',
    },
],
            },
            {
                test: /\.styl$/,
                use: ['style-loader',
                    'css-loader',
                    'stylus-loader',]
            },
            {
                test: /\.less$/i,
                use: ['style-loader',
                    'css-loader',
                    'less-loader',],
            },
            {
                test: /\.scss$/i,
                use: ['style-loader',
                    'css-loader',
                    'sass-loader',],
            },
        ],
    },
}
