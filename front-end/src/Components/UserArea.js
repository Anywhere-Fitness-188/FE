import React, { useEffect, useState, useHistory } from 'react';
// import { editEventContext } from "../context/eventContext";
// import PrivateRoute from "./PrivateRoute";
import UpdateEvent from "./UpdateEvent";
// import CreateEvent from "./CreateEvent";
import EventCard from "./EventCard";
import axiosWithAuth from '../api/axiosWithAuth';

const UserArea = () => {
    const [protectedData, setProtectedData] = useState({
        isEditing: false,
        editing: {
        name: "",
        type: "",
        start_time: "",
        duration: "",
        intensity_level: "",
        location: "",
        attendees: "",
        max_attendees: ""
        },
        events: []
    });
    const getFromApi = () => {
        axiosWithAuth()
        .get('/classes')
        .then((res) => {
            console.log('ab: UserArea.js: axios.then res:', res);
            setProtectedData({
                ...protectedData,
                events:res.data
            })
            
        })
        .catch((err) => {
            console.error('ab: UserArea.js: axios.catch err:', err);
        })
    }
    // get classes
    useEffect(() => {
        return getFromApi();
    },[protectedData.isEditing])
    // needs to be async?
    // const history = useHistory();
    // logout function
    // const logout = () => {
    //     localStorage.removeItem('token');
    //     history.push('/');  
    // }

    return (
        <div className="user-area">
            {console.log("ab: UserArea: Component.jsx: 'access to component lvl state': protectedData.events", protectedData.events)}
            
            {/* <Router>
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
            </Router> */}

            {   protectedData.isEditing ? (
                    <div className="edit-page">
                        <UpdateEvent event={protectedData.editing} isEditing={protectedData.isEditing} protectedData={protectedData} setProtectedData={setProtectedData} />
                    </div>
                ) : protectedData.events.length < 1 ? (
                    <div className="loading">****LOADING****</div>
                ) : protectedData.events.map((ev) => {
                        return (
                            <EventCard event={ev} protectedData={protectedData} setProtectedData={setProtectedData} />
                        )
                    }
                )
            }
            {/* <button onClick={logout}>Log Out</button> */}
            

            
        </div>
    );
}

export default UserArea;


// api/classes
// -takes { 
    // "name": [string] (required),
    // "start_time": [string] (required),
    // "duration": [string],
    // "intensity_level": [string],
    // "location": [string],
    // "attendees": [integer],
    // "max_attendees": [integer]
//      }
