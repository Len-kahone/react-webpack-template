import React,{Suspense} from "react";
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
// import One from "pages/admin/One";
const One=React.lazy(()=>import("pages/admin/One"));
// type propsType = RouteComponentProps<any>
import renderRoutes from "@/routes/renderRoutes";
interface routePorps{
  routes?:any,
}
 const Admin:React.FC<routePorps> = (props) => {
   const {routes} =props;
  
   return (
     <div>
       <h1> 这是admin页面</h1>
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
   );
 };
export default Admin;
