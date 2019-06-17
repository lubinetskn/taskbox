module.exports = (options) => {
    const config = {
        client: 'web',
        server: 'node'
    };

    return config[options.type];
};
