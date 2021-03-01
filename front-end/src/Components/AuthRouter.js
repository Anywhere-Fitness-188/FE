import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";

const AuthRouter = () => (
    <div className="auth-router">
        <Router>
            <ul className="nav" >
                <li>
                <Link to="/"> Login</Link>
                </li>
                <li>
                <Link to="/home">Home</Link>
                </li>
            </ul>
            <Switch>
              <Route exact path="/home" component={Register} />
              <Route path="/" component={Login} /> 
            </Switch>
        </Router>
    </div>
)
export default AuthRouter;