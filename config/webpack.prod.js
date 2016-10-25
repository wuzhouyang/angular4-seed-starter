var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    output: {
        path: helpers.root('dist'),
        publicPath: '',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    htmlLoader: {
        minimize: false // workaround for ng2
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress:true,
            mangle:true,
            screw_ie8: true,
        }),
        new webpack.DefinePlugin({
          'process.env': {
            'ENV': JSON.stringify(ENV)
          }
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        host:'0.0.0.0',
        port: 8112,
        contentBase:'dist',
        inline:false,
        compress: true
    }
});