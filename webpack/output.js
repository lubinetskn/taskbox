const { resolve } = require('path');

module.exports = (options) => {
    const result = {
        client : {
            path            : resolve(options.context, 'build', 'client'),
            filename        : options.development ? '[name].js' : '[name].[contenthash:6].js',
            chunkFilename   : '[name].[contenthash:6].js',
            publicPath      : '/'
        },
        server : {
            path            : resolve(options.context, 'build', 'server'),
            filename        : 'index.js',
            publicPath      : '/',
            libraryTarget   : 'commonjs2'
        }
    };

    return result[options.type];
};
