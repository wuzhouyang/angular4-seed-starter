var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var helpers = require('./helpers');

//获取命令行下设置的环境变量
var env = process.env.NODE_ENV;
var isProd = env === 'prod';

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'main': './src/main.ts'
    },
    //查找依赖文件路径
    resolve: {
        //指定后缀 查找文件的时候可以省略后缀
        //can ignore the ext when find the files
        extensions: ['.ts', '.js']
    },

    //指定各种loader
    //config some loader
    module: {
        //loader将各种资源文件最终处理为js文件
        //loader convert all the resource file to js
        loaders: [
            {
                test: /\.ts$/,
                use:
                isProd ?
                    ['@ngtools/webpack'] :
                    [
                        '@angularclass/hmr-loader',
                        'angular2-template-loader',
                        'awesome-typescript-loader',
                        'angular2-router-loader'
                    ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                exclude: [
                    helpers.root('src', 'app')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                include: [
                    helpers.root('src', 'app')
                ],
                use: [
                    { loader: 'to-string-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.scss$/,
                exclude: [
                    helpers.root('src', 'app')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: [
                    helpers.root('src', 'app')
                ],
                use: [
                    { loader: 'to-string-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/iconfonts/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'assets/imgs/[name].[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),

        !isProd ? new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ) : () => { },

        //直接复制一些静态资源
        //copy some static resource
        new CopyWebpackPlugin([
            {
                from: helpers.root('src', 'favicon.ico'),
                to: helpers.root('dist', 'favicon.ico')
            }
        ]),

        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer')
                ]
            }
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        //如果想引入jq，使用此代码
        //if you want to use jq,use this

        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // })
    ]
};