/*
 * @Author: jidongyu
 * @Date:   2020-08-31 21:05:26
 * @Last Modified by:   jidongyu
 * @Last Modified time: 2020-08-31 21:06:53
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.(jpg|png|gif|jpeg)$/,
            //     use: ['file-loader']
            // },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 200000,
                        }
                    }
                ]
            }
        ]
},
    devServer: {
    open: true,
        port: 9090
}
}