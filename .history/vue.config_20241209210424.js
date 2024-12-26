const { defineConfig } = require('@vue/cli-service');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const { VantResolver } = require('unplugin-vue-components/resolvers');

import ComponentsPlugin from

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
});