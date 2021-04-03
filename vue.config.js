const path = require('path');
const routes = require('./routes');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.resolve('dist'),
        routes: [...routes],
      }),
    ],
  },
};
