const { resolve } = require('path');

module.exports = (env = {}) => {
    const options = {
        context    : resolve(__dirname, '..'),
        dir        : __dirname,
        env        : env.production ? 'production' : 'development',
        type       : env.server ? 'server' : 'client',
        development: !env.production,
        production : !!env.production,
        client     : !env.server,
        server     : !!env.server
    };

    process.env.DEBUG = env.debug;
    process.env.NODE_ENV = options.env;

    const config = {
        mode            : options.env,
        context         : options.context,
        entry           : require('./entry')(options),
        devtool         : require('./devtool')(options),
        target          : require('./target')(options),
        externals       : require('./externals')(options),
        output          : require('./output')(options),
        module          : {
            rules : require('./module.rules')(options)
        },
        resolve         : require('./resolve')(options),
        plugins         : require(`./plugins/${options.type}`)(options),
        optimization    : require('./optimization')(options),
        bail            : options.production,
        profile         : options.production,
        stats           : {
            children: false
        },
        node            : {
            __filename: false,
            __dirname : false
        }
    };

    return config;
};
