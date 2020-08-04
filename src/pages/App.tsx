import React, { Component } from "react";
import Login from "@/component/Login";
// import {HashRouter as Router, Route,Switch,Redirect} from "react-router-dom";
import Head from "@/component/Head";
const App:React.FC=()=>{
  return (
    <div>
      <Head/>
      <Login/>
    </div>
  );
};

export default App;