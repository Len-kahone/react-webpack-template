import React, { Component, Fragment, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import renderRoutes from "@/routes/renderRoutes";
import routes from "@/routes/routes";
const App: React.FC = (props) => {
  return (
    <Fragment>
      <Router>
        <Suspense fallback="loading">
          <Switch>
            {  renderRoutes(routes)}
            {/* <Route
              path="/"
              exact
              component={React.lazy(() => import("pages/home/Home"))}
            ></Route>
            <Route
              path="/admin"
              component={React.lazy(() => import("pages/admin/Admin"))}
            ></Route>
            <Route
              path="/login"
              component={React.lazy(() => import("pages/login/Login"))}
            ></Route> */}
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default App;
