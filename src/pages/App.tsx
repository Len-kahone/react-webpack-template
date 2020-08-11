import React, { Component, Fragment, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import routes from "@/routes/route-config";
const App: React.FC = (props) => {
  return (
    <Fragment>
      <Router>
        <Suspense fallback="loading">
          <Switch>
            {routes.map(item=>{
              return <Route exact path={item.path} key={item.path} component={item.component}></Route>;
            })}
            {/* <Route
              path="/"
              exact
              component={React.lazy(() => import("pages/home/Home"))}
            ></Route>
            <Route
              path="/admin"
              exact
              component={React.lazy(() => import("pages/admin/Admin"))}
            ></Route>
            <Route
              path="/login"
              exact
              component={React.lazy(() => import("pages/login/Login"))}
            ></Route> */}
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default App;
