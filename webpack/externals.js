const externals = require('webpack-node-externals');

module.exports = (options) => {
    const config = {
        client: '',
        server: [
            externals({
                whitelist: [
                    /(lib|booker|core)-ui__[a-zA-Z0-9-_\/.]+/,
                    /\.(?!(?:jsx?|json)$).{1,5}$/i
                ]
            }),
            /^.*production\.json$/,
            /^.*development\.json$/,
            /.*\/configs\/.*/, // конфиги не должны входить в бандл для сервера
            './client-manifest.json',
            './css-chunks-manifest.json'
        ]
    };

    return config[options.type];
};
