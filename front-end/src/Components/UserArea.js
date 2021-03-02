import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom';
import { editEventContext } from "../context/eventContext";
import PrivateRoute from "./PrivateRoute";
import UpdateEvent from "./UpdateEvent";
import CreateEvent from "./CreateEvent";

const UserArea = () => {
    const [editing, setEditing] = useState({
        name: "",
        type: "",
        time: "",
        duration: "",
        intensity: "",
        location: "",
        attendees: "",
        size: "",
    });
    // needs to be async?
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
                <button onClick={(e) => {
                    e.preventDefault();
                    history.push('/update');
                }}>Update</button>
                <Switch>
                
                <editEventContext.Provider value={[editing, setEditing]} >
                    <PrivateRoute exact path="/fitness" component={CreateEvent} />
                    <PrivateRoute exact path="/update">
                        <UpdateEvent event={editing} />
                    </PrivateRoute>
                    
                </editEventContext.Provider>

                </Switch>
            </Router>
            
        </div>
    );
}

export default UserArea;