const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (options) => {
    const production = {
        runtimeChunk: 'single',
        minimizer   : [
            new UglifyJsPlugin({
                sourceMap    : true,
                parallel     : true,
                cache        : options.development,
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCssAssetsPlugin()
        ],
        splitChunks : {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test    : /[\/\\]node_modules[\/\\](?!(lib|booker|core)-ui__)/,
                    priority: -20,
                    name    : 'vendors',
                    chunks  : 'initial'
                },
                hls: {
                    test    : /hls\.js/,
                    priority: -10,
                    name    : 'hls'
                }
            }
        }
    };

    const result = {
        client: {
            development: {
                minimize: false
            },
            production
        },
        server: {
            development: {
                minimize: false
            },
            production : {
                minimize: false
            }
        }
    };

    return result[options.type][options.env];
};
