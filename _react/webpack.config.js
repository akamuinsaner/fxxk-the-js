const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取css
const postcssImport = require("postcss-import");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩js
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css

const postcssOpts = {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: (webpack) => [
        postcssImport({
            addDependencyTo: webpack
        }),
    ]
};

module.exports = {
    entry: './src/index.tsx',

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            routes: path.resolve(__dirname, 'src/routes'),
            assets: path.resolve(__dirname, 'src/assets'),
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader?cacheDirectory",
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        { loader: 'postcss-loader', options: postcssOpts },
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name][hash].[ext]',
                            publicPath: '/assets',
                            outputPath: './assets'
                        }
                    }
                ]
            },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        ]
    },



    devServer: {
        port: 8989,
        contentBase: './dist',
        open: false,
        compress: true,
        hot: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.ejs'
        }),
        new ExtractTextPlugin("index.css"),
        new UglifyJsPlugin({
            extractComments: true,
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
}