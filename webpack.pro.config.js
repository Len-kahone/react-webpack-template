const baseConfig = require('./webpack.base.config.js');
const { merge } = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),//打包前先清空文件夹
    new OptimizeCSSAssetsPlugin({}), //对css进行压缩
  ],
});
