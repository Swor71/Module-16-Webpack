//importing modules
const path = require('path'),
    webpack = require('webpack');
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    OptimizeJsPlugin = require('optimize-js-plugin');

// environment declaring
    let env = process.env.NODE_ENV || 'development';

// plugins config    
    let plugins = [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html',
                inject: 'body',
            })
        ];

    if (env === 'production') {
        plugins.push(
            new webpack.optimize.UglifyJsPlugin(),
            new OptimizeJsPlugin({
                sourceMap: false
            })
        );
    }
    
    console.log('NODE_ENV: ', env);

// webpack config
module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: plugins
};