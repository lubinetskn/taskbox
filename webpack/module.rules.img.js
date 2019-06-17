module.exports = (options) => {
    return {
        test: /\.(png|jpe?g|gif|svg|webp|ttf|woff|woff2|mp4|ico)$/,
        use : [{
            loader : 'url-loader',
            options: {
                limit   : 512,
                emitFile: options.client,
                name    : options.production ? '[name]-[hash:6].[ext]' : '[path][name].[ext]'
            }
        }]
    };
};
