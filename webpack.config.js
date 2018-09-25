const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: 'http://127.0.0.1',
        port: 3000
    },
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     use: [{
            //             loader: 'file-loader',
            //             options: {
            //                 name: 'index.html'
            //             }
            //         },
            //         {
            //             loader: 'extract-loader'
            //         },
            //         {
            //             loader: 'html-loader'
            //         }
            //     ]
            // },
            {

                test: /\.css$/,
                use: ['style-loader', 'css-loader']

            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[ext'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            favicon: './src/up.png'
        })
    ]
}