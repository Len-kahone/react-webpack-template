import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import One from "pages/admin/One";
 const Admin = () => {
    return (
      <div>
        <h1> 这是admin页面</h1>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
        </ul>
        <Router>
          <Link to="/admin/one">one</Link>
          <Route exact path="/admin/one" component={One}></Route>
        </Router>
      </div>
    );
};
export default Admin;
