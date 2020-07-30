const baseConfig = require("./webpack.base.config.js");
const { merge } = require("webpack-merge");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, //从js中分离css
          "css-loader",
          "postcss-loader",
          "less-loader",
        ], //postcss给css添加前缀，兼容浏览器
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), //打包前先清空文件夹
    new OptimizeCSSAssetsPlugin({}), //对css进行压缩
    new MiniCssExtractPlugin({
      filename:"css/[name].[contenthash:6].css"
    }), //将css从js中分离出来，以link的方式引用
  ],
});
