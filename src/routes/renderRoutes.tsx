import React from "react";
import {routeConifg} from "./routes";
import { Route } from "react-router-dom";

const renderRoutes=function(routes:routeConifg[]):any{
    return routes.map(route=>{
        const { path,exact=false, component:Component, routes = [] } = route;
        return (
          <Route
            exact={exact}
            key={path}
            path={path}
            render={(props: any) => {
              return <Component routes={routes} {...props}></Component>;
            }}
          ></Route>
        );
    });
};
export default renderRoutes;
