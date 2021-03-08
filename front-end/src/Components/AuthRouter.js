import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import DisplayEvents from "./DisplayEvents";

const AuthRouter = () => (
  <div className="auth-router">
    <Router>
      <ul className="nav">
        <li>
          <Link to="/"> Login</Link>
        </li>
        <li>
          <Link to="/register">Home</Link>
        </li>
        {/* <li>
          <Link to="/display">Events List</Link>
        </li> */}
      </ul>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route path="/" component={Login} />
        {/* <Route path="/display" component={DisplayEvents} /> */}
      </Switch>
    </Router>
  </div>
);
export default AuthRouter;
