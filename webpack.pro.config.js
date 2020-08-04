const baseConfig = require("./webpack.base.config.js");
const { merge } = require("webpack-merge");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack=require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path=require("path");
const addAssetHtmlWebpackPlugin= require("add-asset-html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        include: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), //打包前先清空文件夹
    new OptimizeCSSAssetsPlugin({}), //对css进行压缩
    //将css从js中分离出来，以link的方式引用
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
    }),
    new BundleAnalyzerPlugin(),
    //告诉webpack哪些库不参与打包，同时使用时名称也得变
    // new webpack.DllReferencePlugin({
    //   manifest:require(path.resolve(__dirname,"dll/mainfest.json")),
    // }),
    //将某个文件打包输出去，并在html中自动引入该资源
    // new addAssetHtmlWebpackPlugin([
    //   {
    //     filepath:path.resolve(__dirname,"dll/jquery.dll.js")
    //   }
    // ])
  ],
  externals: {
    //不打包jq，通过script标签引入
    // jquery:"jQuery"
  },
  // optimization: {  //代码切割，将一些第三方库从index.js中抽离出来，分成几个js
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
});
