const { resolve } = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = (options) => {
    const use = [{
        loader: options.client && options.production ? ExtractCssChunks.loader : 'style-loader'
    }, {
        loader : options.client ? 'css-loader' : 'css-loader/locals',
        options: {
            context       : options.context,
            modules       : true,
            sourceMap     : options.development,
            minimize      : options.production,
            localIdentName: '[local]-[hash:hex:6]',
            import        : false
        }
    }, {
        loader : 'postcss-loader',
        options: {
            plugins: [
                require('postcss-import'),
                require('postcss-nested'),
                require('postcss-css-variables'),
                require('autoprefixer')
            ]
        }
    }];

    if(options.server) {
        delete use.shift();
    }

    return {
        test    : /\.pcss$/,
        use     : use,
        enforce : 'post',
        include : [
            resolve(options.context, 'src'),
            resolve(options.context, 'stories'),
            resolve(options.context, 'dev_modules'),
            resolve(options.context, 'node_modules')
        ]
    };
};
