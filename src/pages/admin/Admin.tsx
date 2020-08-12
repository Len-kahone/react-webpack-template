import React,{Suspense} from "react";
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import One from "pages/admin/One";
// type propsType = RouteComponentProps<any>
import renderRoutes from "@/routes/renderRoutes";
interface routePorps{
  routes?:any,
}
 const Admin:React.FC<routePorps> = (props) => {
   const {routes} =props;
  
   return (
     <div>
       <Router>
         <h1> 这是admin页面</h1>
         <ul>
           <li>
             <Link to="/">首页</Link>
           </li>
           <Link to="/admin/one">one</Link>
         </ul>

         <Link to="/admin/one">one</Link>
         <Suspense fallback="loading">
           <Switch>{renderRoutes(routes)}</Switch>
         </Suspense>
         {/* <Route exact path="/admin/one" component={One}></Route> */}
       </Router>
     </div>
   );
 };
export default Admin;
