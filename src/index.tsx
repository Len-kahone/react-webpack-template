import React from "react";
import ReactDom from "react-dom";
import App from "@/pages/App";

//配置热更新，只能处理非入口文件,在ts里面配置需要安装@types/webpack-env，否则报错
import { routesConfig } from "@/routes/routes-config";
import { renderRoutes } from "@/routes/route-loader";
console.log(renderRoutes(routesConfig));
ReactDom.render(<App/>,document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}