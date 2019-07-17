const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
        ]
    },



    devServer: {
        port: 8989,
        contentBase: './dist',
        open: false,
        compress: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.ejs'
        }),
    ],
}