import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import CreateEvent from "./CreateEvent";

const UserArea = () => {
    const history = useHistory();
    // logout function
    const logout = () => {
        localStorage.removeItem('token');
        history.push('/');  
    }

    return (
        <div className="user-area">
            <Router>
                <h2>Welcome to Fitness Tracker</h2>
                <button onClick={logout}>Log Out</button>
                <Switch>
                <PrivateRoute exact path="/fitness" component={CreateEvent} />
                
                </Switch>
            </Router>
        </div>
    );
}

export default UserArea;