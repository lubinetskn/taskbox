const { resolve } = require('path');
const webpack = require('webpack');
const { version } = require('../../package.json');

module.exports = (options) => {
    return [
        new webpack.WatchIgnorePlugin([
            resolve(options.context, 'node_modules'),
            resolve(options.context, 'webpack'),
            resolve(options.context, 'build'),
        ]),
        new webpack.DefinePlugin({
            __CLIENT__            : options.client,
            __SERVER__            : options.server,
            __PRODUCTION__        : options.production,
            __DEVELOPMENT__       : options.development,
            __VERSION__           : JSON.stringify(version),
            'process.env.NODE_ENV': JSON.stringify(options.env)
        })
    ];
};


