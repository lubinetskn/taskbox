const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = (options) => {
    const common = require('./common')(options);

    const config = {
        development : [
            ...common
        ],
        production  : [
            ...common,
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            }),
            new CleanPlugin(['build/server/*', 'build/client/*'], {
                root   : options.context,
                verbose: true
            }),
            new CopyWebpackPlugin([
                { from: 'src/server/index.js', to: 'index.js' },
                { from: 'src/server/components/internal-error/index.html', to: 'error.html' }
            ], { context: options.context })
        ]
    };

    return config[options.env];
};
