import React from "react";
import {
  RouteComponentProps
} from "react-router-dom";

type routePorps = RouteComponentProps<any>;
type myProp=routePorps&{
  routes?:any
}
export interface routeConifg {
  path: string;
  component: React.FC<myProp>;
  routes?: routeConifg[];
  exact?: boolean;
}

const routes: routeConifg[] = [
  { "path": "/", "exact": true, "component": React.lazy(() => import("pages/home/Home")) },
  {
    "path": "/admin",
    "component": React.lazy(() => import("pages/admin/Admin")),
    "routes": [
      {
        "path": "/admin/one",
        "component": React.lazy(() => import("pages/admin/One"))
      },
      {
        "path": "/admin/two",
        "component": React.lazy(() => import("pages/admin/Two"))
      }
    ]
  },
  { "path": "/login", "component": React.lazy(() => import("pages/login/Login")) }
];
export default routes;
