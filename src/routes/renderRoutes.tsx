import React from "react";
import {routeConifg} from "./route-config";
import { Route } from "react-router-dom";

const renderRoutes=function(routes:routeConifg[]):any{
    return routes.map(route=>{
        const { path, component:Component, routes = [] } = route;
        console.log(path);
        return <Route exact key={path} path={path} render={(props:any)=>{
            return <Component routes={routes} {...props}></Component>;
        }}></Route>;
    });
};
export default renderRoutes;
