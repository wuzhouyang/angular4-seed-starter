//生产环境下 webpack配置文件
//production webpack config
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common');
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
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            disable: false,
            allChunks: true
        }),
        //最小化 (minify) 
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            screw_ie8: true,
            beautify: false,
            comments: false,
            compress: {
                warnings: false,
                warnings: true,
                drop_console: false,
                collapse_vars: true,
                reduce_vars: true
            }
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