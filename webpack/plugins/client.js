const { extname, parse } = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = (options) => {
    const common = require('./common')(options);

    const base = [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|ru/),
        new ExtractCssChunks({
            filename     : options.development ? '[name].css' : '[name].[contenthash:6].css',
            chunkFilename: '[name].[contenthash:6].css',
            hot          : options.development,
            cssModules   : true,
            orderWarning : true
        }),
        new CopyWebpackPlugin([
            { from: 'src/client/service-worker/service-worker.js', to: 'service-worker.js' }
        ], { context: options.context }),
    ];

    const config = {
        development : [
            ...common,
            ...base,
            new webpack.HotModuleReplacementPlugin()
        ],
        production  : [
            ...common,
            ...base,
            new CopyWebpackPlugin([
                { from: 'src/server/components/internal-error/index.html', to: 'error.html' },
                { from: 'src/client/statics/', to: '' },
                { from: 'src/server/components/html/img/favicon.ico', to: 'favicon.ico' }
            ], { context: options.context }),
            new ManifestPlugin({
                publicPath     : '/',
                fileName       : './../server/client-manifest.json',
                writeToFileEmit: true,
                generate       : (seed, files) => {
                    return files.reduce((manifest, { name, path, isInitial }) => {
                        const ext = extname(name);

                        if(!manifest.js) {
                            manifest.js = [];
                        }

                        if(!manifest.css) {
                            manifest.css = [];
                        }

                        if(ext === '.js' && isInitial) {
                            manifest.js.push(path)
                        }

                        if(ext === '.css' && isInitial) {
                            manifest.css.push(path)
                        }

                        return manifest;
                    }, seed);
                }
            }),
            new ManifestPlugin({
                publicPath     : '/',
                fileName       : './../server/css-chunks-manifest.json',
                writeToFileEmit: true,
                generate       : (seed, files) => {
                    return files.reduce((manifest, { name, path, isInitial }) => {
                        if(name.match(/\.css$/) && !isInitial) {
                            const parsed = parse(name);
                            const parts = parsed.name.split('~');
                            for(const part of parts) {
                                if(!manifest[part]) {
                                    manifest[part] = [];
                                }

                                manifest[part].push(path);
                            }
                        }

                        return manifest;
                    }, seed);
                }
            }),
            new CompressionPlugin({
                test     : /\.(js|css|ttf|svg|html|xml|webapp)$/,
                algorithm: 'gzip'
            }),
            new BrotliPlugin({
                test: /\.(js|css|ttf|svg|html|xml|webapp)$/
            })
        ]
    };

    return config[options.env];
};
