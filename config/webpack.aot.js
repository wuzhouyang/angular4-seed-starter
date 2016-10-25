var webpackMerge = require('webpack-merge');
var prod = require('./webpack.prod.js');

module.exports=webpackMerge(prod,{
    entry: {
        'main': './src/main.aot.ts'
    }
})