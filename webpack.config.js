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
        path: path.resolve(__dirname,'dist'),
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'app.html',
            template: './src/index.html'
        })
    ]
}