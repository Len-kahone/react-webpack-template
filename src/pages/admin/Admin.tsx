import React, { useState,useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
const One = React.lazy(() => import("pages/admin/One"));
import renderRoutes from "@/routes/renderRoutes";
import Nav from "./Nav";
import Color from "@/store/Color";
type routePorps = RouteComponentProps;
type myProp = routePorps & {
  routes?: any;
};
const Admin: React.FC<myProp> = (props) => {
  const { routes, history } = props;
  const [num, setNum] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  return (
      <Color>
        <h1> 这是admin页面</h1>
        <button onClick={() => setTime(new Date().getTime())}>点击增加</button>
        <button onClick={() => setNum(num+1)}>点击增加</button>
        <Nav time={time}>{num}</Nav>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/admin/one">one</Link>
          </li>
          <li>
            <Link to="/admin/two">two</Link>
          </li>
        </ul>
        <Switch>{renderRoutes(routes)}</Switch>
      </Color>
  );
};

export default Admin;
