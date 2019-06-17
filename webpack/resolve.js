const path = require('path');
const ThemeWebpackPlugin = require('theme-webpack-plugin');

module.exports = (options) => {
    return {
        cacheWithContext: false,
        enforceExtension: false,
        extensions      : ['.js', '.pcss', '.ts', '.tsx', '.jsx', '.json'],
        symlinks        : false,
        mainFields      : options.server ? ['main'] : ['browser', 'main'],
        modules         : options.development ? ['dev_modules', 'node_modules'] : ['node_modules'],
        unsafeCache     : true,
        alias           : {
            'server/component': path.resolve(options.context, 'src', 'server', 'components'),
            'client/component': path.resolve(options.context, 'src', 'client', 'components'),
            component         : path.resolve(options.context, 'src', 'common', 'components'),
            route             : path.resolve(options.context, 'src', 'common', 'routes'),
            common            : path.resolve(options.context, 'src', 'common'),
            configs           : path.resolve(options.context, 'configs'),
            config            : path.resolve(options.context, 'configs', options.server ? 'config' : 'client-config')
        },
        plugins: [
            new ThemeWebpackPlugin(/(booker|lib|core)-ui__[\w_-]+/, 'desktop')
        ]
    };
};
