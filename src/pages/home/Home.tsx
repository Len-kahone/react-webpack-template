import React, { Component, Suspense } from "react";
import { HashRouter as Router, Route, NavLink, Switch, Link } from "react-router-dom";
import  "./Home.less";
export default class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      routes: props.routes,
    };
  }
  componentDidMount() {
    // console.log(this.props);
  }
  handleClick() {
    console.log(this.props.history.push("/login"));
  }
  render() {
    return (
     <div id="home">
         <h1>俊平老色批首页</h1>
         <ul>
             <li><Link to="/login">登陆</Link></li>
             <li><Link to="/admin">管理员</Link></li>
         </ul>
     </div>
    );
  }
}
