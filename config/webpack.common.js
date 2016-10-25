
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'main': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['angular2-template-loader','awesome-typescript-loader','angular2-load-children-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file?name=assets/[name].[hash].[ext]!image-webpack'
            },
            {
                test:/favicon.ico$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({fallbackLoader:'style',loader:'css?minimize'})
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader:'style!css'
            }
        ]
    },

    postcss:[
        require('autoprefixer')
    ],

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
             name: ['main', 'vendor', 'polyfills']
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};