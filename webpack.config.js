// Todo: Fail

const path = require('path');
const webpack = require('webpack');
//const htmlWebpackPlugin = require('html-webpack-plugin');
//require('@babel/register');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = env => {
    return {
        target: "web",
        // the environment in which the bundle should run
        resolve: {
            // options for resolving module requests
            mainFields: ["browser", "module", "main"],
        },
        mode: env.MODE,
        //watch: true,
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 200, // after build
            poll: 1000 // every
        },
        entry: {
            datebob: ['./src/index.js']
        },
        output: {
            path: path.resolve(__dirname, 'dist'), 
            filename: '[name].esm.js',
            library: "LIB",
            libraryTarget: "var",
        },
        optimization: {
            minimize: true
        },
        //devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    /* use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                plugins: [
                                    "@babel/plugin-transform-modules-commonjs",
                                    "@babel/plugin-transform-modules-amd",
                                    ["@babel/plugin-transform-modules-umd", {
                                        "globals": {
                                            "datebob": "datebob"
                                        }
                                    }],
                                ],
                                presets: [
                                    '@babel/preset-env'
                                ],
                            },
                        }
                    ], */
                    /* use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                plugins: [
                                ],
                                presets: [
                                    [
                                        '@babel/preset-env', {
                                            "modules": false,
                                            "targets": {
                                                "browsers": [
                                                    "chrome >= 60, not dead"
                                                ]
                                            },
                                            "useBuiltIns": "usage"
                                        },
                                    ],
                                ],
                            }
                        }
                    ], */
                }/* ,
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'css',
                                name: '[name].min.css'
                            }
                        },
                        'sass-loader'
                    ]
                } */
            ]
        },
        plugins: [
            new EsmWebpackPlugin()
            /* new htmlWebpackPlugin({
                template: 'index.html',
                filename: 'index.html',
                hash: true
            }),
            new webpack.DefinePlugin({
                'API_URL': JSON.stringify(env.API_URL)
            }) */
        ]
    }
};
