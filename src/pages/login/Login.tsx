import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BrowserRouter as Router, Route,Link } from "react-router-dom";

const Login= ()=>{
    return <div id="login">
        <h1>登陆</h1>
        <ul>
            <li><Link to="/">首页</Link></li>
        </ul>
    </div>;
};

export default Login;