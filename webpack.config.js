var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        'webpack-dev-server/client?http//localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.resolve(__dirname,'app/index.js')
    ],
    output: {
        path: path.resolve(__dirname, "/dist/"),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.tpl.html',
            'inject': 'body',
            'filename': './index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(png|jpg|woff|woff2|ttf|eot|svg)$/,
                loader:'url-loader?limit=8192'
            }
        ]
    }
}