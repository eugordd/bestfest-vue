'use strict';

const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

/*
 Use this file for WebStorm
 Languages & Frameworks -> JavaScript -> Webpack
 */

module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@api': resolve('src/api'),
      '@assets': resolve('src/assets'),
      'fonts': resolve('src/assets/fonts'),
      '@components': resolve('src/components'),
      '@global': resolve('src/global'),
      '@plugins': resolve('src/plugins'),
      '@router': resolve('src/router'),
      '@store': resolve('src/store'),
      '@styles': resolve('src/styles'),
      '@views': resolve('src/views'),
      '@constants': resolve('src/constants')
    }
  }
};
