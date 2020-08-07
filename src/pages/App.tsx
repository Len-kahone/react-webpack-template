import React, { Component,Fragment } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";

interface AppProps {
  routes: any;
}
const App: React.FC<AppProps> = (props) => {
  const routes = [
    {
      path: "/home",
      exact: true,
      component: React.lazy(() => import("pages/home/Home")),
    },
  ];
  return (
    <Fragment>

      <div id="app">app</div>
      <Route path="/home"  component={Home}></Route>
    </Fragment>
  );
};

export default App;
