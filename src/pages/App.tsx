import React, { Component,Fragment } from "react";
import { BrowserRouter as Router,Switch, Route ,Link} from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
interface AppProps {
  routes: any;
}
const App: React.FC = (props) => {
  // const routes = [
  //   {
  //     path: "/home",
  //     exact: true,
  //     component: React.lazy(() => import("pages/home/Home")),
  //   },
  // ];
  return (
    <Fragment>
    
      <Router>
      <ul>
        <li>
          <Link to={{
            pathname:"/home",
            // search:"?name=kahone"
          }}>跳到home页面</Link>
        </li>
      </ul>
      <Route  path="/home"  component={Home}>
        <Route path="/home/login"  component={Login}></Route>
      </Route>
      </Router>
    </Fragment>
  );
};

export default App;
