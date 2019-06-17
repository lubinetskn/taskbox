const { resolve } = require('path');

module.exports = (options) => {
    const result = [];

    if(options.development) {
        result.push(
            {
                enforce: 'pre',
                test   : /\.pcss$/,
                include: [
                    resolve(options.context, 'src'),
                    resolve(options.context, 'dev_modules')
                ],
                exclude: [
                    /node_modules/
                ],
                use    : [{
                    loader : 'postcss-loader',
                    options: {
                        plugins: [
                            require('stylelint')
                        ],
                    }
                }]
            },
            {
                enforce: 'pre',
                test   : /\.jsx?$/,
                include: [
                    resolve(options.context, 'src'),
                    resolve(options.context, 'dev_modules'),
                ],
                exclude: [
                    /node_modules/
                ],
                use    : [{
                    loader : 'eslint-loader',
                    options: {
                        cache: true
                    }
                }]
            }
        );
    }

    result.push(
        {
            enforce: 'pre',
            test   : /\.tsx?$/,
            include: [
                resolve(options.context, 'src'),
                /(?:dev|node)_modules[\/\\](?:lib|booker|core)-ui__/
            ],
            use    : [{
                loader : 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }]
        },
        {
            test    : /\.(png|jpe?g|gif|svg|webp|xml|txt|webapp|ico)$/,
            include : [
                resolve(options.context, 'src', 'server', 'components', 'html'),
            ],
            use: [{
                loader  : 'file-loader',
                options : {
                    name    : '[name].[ext]',
                    emitFile: false
                }
            }]
        },

        require('./module.rules.pcss')(options),
        require('./module.rules.img')(options),
        require('./module.rules.babel')(options),
    );

    return result;
};
