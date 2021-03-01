import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import CreateEvent from "./CreateEvent";

const AuthRouter = () => {
    // logout function
    const logout = () => {
        localStorage.removeItem('token');  
    }

    return (
        <div className="user-area">
            <Router>
                <h2>Welcome to Fitness Tracker</h2>
                <button onClick={logout}>Log Out</button>
                <Switch>
                <PrivateRoute exact path="/fitness" component={CreateEvent} />
                {/* <Route path="/" component={Login} />  */}
                </Switch>
            </Router>
        </div>
    );
}

export default AuthRouter;