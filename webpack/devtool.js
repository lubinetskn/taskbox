module.exports = (options) => {
    const config = {
        client : {
            development : 'eval-source-map',
            // development : 'inline-cheap-module-source-map',
            // production  : false,
            production  : 'source-map'
        },
        server : {
            // development : 'cheap-module-eval-source-map',
            development : false,
            // development : 'inline-cheap-source-map',
            production  : 'source-map'
        }
    };

    return config[options.type][options.env];
}
