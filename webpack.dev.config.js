const baseConfig=require("./webpack.base.config");
const {merge}=require("webpack-merge");
const path=require("path");
module.exports = merge(baseConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          "style-loader", //style-loader自带热更新，所以开发模式用style-loader
          "css-loader",
          "less-loader",
          {
            loader: "style-resources-loader",
            options: {
              patterns: path.resolve(__dirname, "src/style/common.less"),
              injector: "append",
            },
          },
        ], //postcss给css添加前缀，兼容浏览器
      },
    ],
  },
  plugins: [],

  devServer: {
    historyApiFallback: true,

    port: 7000,
    open: true,
    hot: true,
    quiet:true,
    proxy: {
      "/api": {
        target: "http://localhost:9999",

        // pathRewrite:{
        //   "^api":''
        // }
      },
    },
  },
  output: {
    // 开发环境下，filename 不能使用 contenthash/chunkhash
    filename: "js/[name].[hash:8].bundle.js",
    chunkFilename: "js/[name].chunk.js",
    publicPath: "/",
  },
  devtool: "'cheap-module-eval-source-map'", //代码构建后映射技术，可以追踪代码出错位置 ,推荐使用source-map或者cheap-module-source-map，一个方便调试，一个速度快
});

