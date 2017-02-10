//生产环境下 webpack配置文件
//production webpack config
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var ngtools = require('@ngtools/webpack');

var env=process.env.NODE_ENV;
module.exports = webpackMerge(commonConfig, {
    output: {
        path: helpers.root('dist'),
        publicPath: '',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: true,
            mangle: true,
            screw_ie8: true,
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                htmlLoader: {
                    minimize: false
                }
            }
        }),

        //ng2 aot webpack插件配置
        //ng2 aot webpack config
        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: helpers.root('src','app','app.module')+'#AppModule'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(env)
            }
        })
    ]
});