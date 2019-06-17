module.exports = (options) => {
    const common = {
        client: [
            'regenerator-runtime/runtime',
            'intersection-observer',
            './src/client/index.js'
        ],
        server: [
            'source-map-support/register',
            './src/server/index.js'
        ]
    };

    const config = {
        client: {
            development: [
                'react-hot-loader/patch',
                'webpack-hot-middleware/client',
                ...common.client
            ],
            production: {
                main: common.client
            }
        },
        server: {
            development: common.server,
            production: common.server
        }
    };

    return config[options.type][options.env];
};
