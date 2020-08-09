import React, { Component } from "react";
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";

export default class Home extends Component {
    constructor(props:any){
        super(props);
    }
    componentDidMount(){
        console.log(this.props);

    }
    render() {
        return (
                <Router>
                欢迎来到home页面
                    <NavLink to="/home/login">跳到login</NavLink>
                   
                </Router>
        );
    }
}
