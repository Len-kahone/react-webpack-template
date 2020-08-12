import React from "react";

export interface routeConifg {
  path: string;
  component: React.FC;
  routes?: routeConifg[];
}

const routes: routeConifg[] = [
  { path: "/", component: React.lazy(() => import("pages/home/Home")) },
  {
    path: "/admin",
    component: React.lazy(() => import("pages/admin/Admin")),
    routes: [
      {
        path: "/admin/one",
        component: React.lazy(() => import("pages/admin/One")),
      },
    ],
  },
  { path: "/login", component: React.lazy(() => import("pages/login/Login")) },
];
export default routes;
