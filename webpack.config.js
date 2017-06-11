const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './src'),
    cache:true,
    entry: {
        // app: './js/index.js',
        test: './js/test.js',
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: './js/[name].js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015'
                    ]
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=img/[name].[ext]"
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=html/[name].[ext]'
            },
            {
                test: /\manifest.json$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery',
        })
    ],
    node:{
        fs:'empty',
        net:'empty',
        tls:'empty'
    }
};