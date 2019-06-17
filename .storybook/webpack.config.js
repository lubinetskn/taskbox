const path = require('path');
const util = require('util');
const baseResolve = require('../webpack/resolve');
const baseRulesPcss = require('../webpack/module.rules.pcss');

const baseWebpackOptions = {
  server: false,
  client: true,
  development: true,
  production: false,
  context: path.resolve(__dirname, '..'),
};

module.exports = async ({ config, mode }) => {
  config.resolve = baseResolve(baseWebpackOptions);
  // config.node = { fs: 'empty' };
  config.module.rules.push(baseRulesPcss(baseWebpackOptions));
  config.module.rules[0].include.push(
    /(?:dev|node)_modules[\/\\](?:lib|booker|core)-ui__/,
  );
  config.module.rules[0].exclude = undefined;

 console.log(util.inspect(config, { depth: 8, colorize: true }))

  return config;
};
