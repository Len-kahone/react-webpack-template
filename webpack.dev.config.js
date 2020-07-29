const baseConfig=require("./webpack.base.config")
const {merge}=require("webpack-merge")
  const webpack = require('webpack');
module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: '8888',
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9999',

        // pathRewrite:{
        //   "^api":''
        // }
      },
    },
  },
  devtool: 'inline-source-map',

});

