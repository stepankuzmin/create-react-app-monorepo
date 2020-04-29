const path = require('path');
const { override, babelInclude, overrideDevServer, watchAll } = require('customize-cra');

module.exports = {
  webpack: override(babelInclude([path.resolve('src'), path.resolve('node_modules/@example/ui')])),
  devServer: overrideDevServer(watchAll())
};
