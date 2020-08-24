import React, { useState,useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
// import One from "pages/admin/One";
const One = React.lazy(() => import("pages/admin/One"));
// type propsType = RouteComponentProps<any>
import renderRoutes from "@/routes/renderRoutes";
import Nav from "./Nav";
export const ColorContext=React.createContext<string>("");

type routePorps = RouteComponentProps<any>;
type myProp = routePorps & {
  routes?: any;
};
const Admin: React.FC<myProp> = (props) => {
  const { routes, history } = props;
  const [num, setNum] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  type StateType = {
    num: number;
  };
  type ActionType= {
    type: string;
  }
  const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case "add":
        return {num:state.num+1};
      case "reduce":
        return {num:state.num-1};

      default:
        return {num:0};
    }
  };
  const [state, dispatch] = useReducer(reducer,{num:0});
  return (
    <ColorContext.Provider value="#f00">
      <div>
        <h1> 这是admin页面</h1>
        <h2>{state.num}</h2>
        <button onClick={() => dispatch({ type: "add" })}>点击增加</button>
        <button onClick={() => dispatch({ type: "reduce" })}>点击增加</button>
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
        {/* <Route  path="/admin/one" component={One}></Route> */}
      </div>
    </ColorContext.Provider>
  );
};
export default Admin;
