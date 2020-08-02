import React from "react";
import ReactDom from "react-dom";
import Login from "@/component/Login";
import {HashRouter as Router, Route,Switch,Redirect} from "react-router-dom";
import  "@/index.less";
import Head from "@/component/Head";

//配置热更新，只能处理非入口文件,在ts里面配置需要安装@types/webpack-env，否则报错
if (module.hot) {
    module.hot.accept();
}
ReactDom.render(<div>
    {/* <Router>
        <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Redirect from="/" to="/login"></Redirect>
        </Switch>
    </Router> */}   
    <Head></Head>
    <Login></Login>


</div>,document.getElementById("app"));

