const { resolve } = require('path');

const presets = {
    server: [
        ['@babel/preset-react'],
        ['@babel/env', {
            modules         : false,
            shippedProposals: true,
            targets         : { node: '8' }
        }]
    ],
    client: [
        ['@babel/preset-react'],
        ['@babel/env', {
            modules         : false,
            shippedProposals: true,
            useBuiltIns     : 'usage',
            targets         : { browsers: ['last 3 versions', 'ie >= 11'] }
        }]
    ]
};

module.exports = (options) => {
    const plugins = [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose : true }],
        ['@babel/plugin-syntax-dynamic-import']
    ];

    if(options.development && options.client) {
        plugins.push('react-hot-loader/babel');
    }

    return {
        test   : /\.jsx?$/,
        include: [
            resolve(options.context, 'src'),
            resolve(options.context, 'configs'),
            /(?:dev|node)_modules[\/\\](?:lib|booker|core)-ui__/
        ],
        use    : [{
            loader : 'babel-loader',
            options: {
                presets       : presets[options.type],
                plugins       : plugins,
                babelrc       : false,
                cacheDirectory: options.development
            }
        }]
    };
};
