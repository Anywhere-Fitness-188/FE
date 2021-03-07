import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { editEventContext } from "../context/eventContext";
import axiosWithAuth from "../api/axiosWithAuth";


const UpdateEvent = (props) => {
    const [currentData, setCurrentData] = useState(
         {
            user_id: props.event.id,
            name: props.event.name,
            start_time: props.event.start_time,
            duration: props.event.duration,
            intensity_level: props.event.intensity_level,
            location: props.event.location,
            attendees: props.event.attendees,
            max_attendees: props.event.max_attendees
        }
    );
    const classId = {
        id: props.event.id
    }

    // const history = useHistory();

    const handleChanges = (e) => {
        setCurrentData({
            ...currentData,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/classes', currentData)
            .then((res) => {
                console.log(`ab: UpdateEvent.js: handleSubmit: axios.then: res:`, res);
                alert(`${res.data.message}`)
                props.setProtectedData({
                    ...props.protectedData,
                    isEditing: !props.isEditing,
                    editing: {
                        id: 0,
                        name: "",
                        type: "",
                        start_time: "",
                        duration: "",
                        intensity_level: "",
                        location: "",
                        attendees: "",
                        max_attendees: ""
                    },
                    events: props.protectedData.events
                });

                
            })
            .catch((err) => {
                console.error(`ab: UpdateEvent.js: handleSubmit: axios.catch: err:`, err)
            })
    }

    const handleCancelChanges = (e) => {
        e.preventDefault();
        props.setProtectedData({
            ...props.protectedData,
            isEditing: !props.isEditing,
            editing: {
                id: 0,
                name: "",
                type: "",
                start_time: "",
                duration: "",
                intensity_level: "",
                location: "",
                attendees: "",
                max_attendees: ""
                },
                events: props.protectedData.events
        });
    }

    const handleDelete = (e) => {
        e.preventDefault();
        
        if (window.confirm(`Are you sure you want to delete this class?`)) {
            axiosWithAuth()
        .delete('/classes', classId)
            .then((res) => {
                console.log(`ab: UpdateEvent.js: handleDelete: axios.then: res:`, res);
                alert(`${res.data.message}`)
            })
            .catch((err) => {
                console.log(`ab: UpdateEvent.js: handleDelete: axios.catch: err:`, err)
            })
        } else {
            console.log(`ab: UpdateEvent: handleDelete: confirm() "Cancel"`)
            return
        }
    }
    
    
    return (
        <div className="update-form">
            {/* {console.log(`ab: UpdateEvent.js: "returns Component with props": props: `, props, 'component lvl state Obj currentData:', currentData)} */}
            <form onSubmit={handleSubmit}>
                <header className="form-header">
                    Edit this {props.event.name}
                </header>
                <label htmlFor="name">
                    Name
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={currentData.name}
                        onChange={handleChanges}
                        />
                </label>
                <label htmlFor="start_time">
                    Start Time
                    <input
                        id="start_time"
                        type="text"
                        name="start_time"
                        onChange={handleChanges}
                        value={currentData.start_time}
                    />
                </label>
                <label htmlFor="duration">
                    Duration
                    <input
                        id="duration"
                        type="text"
                        name="duration"
                        onChange={handleChanges}
                        value={currentData.duration}
                    />
                </label>
                <label htmlFor="intensity_level">
                    Intensity Level
                    <input
                        id="intensity_level"
                        type="text"
                        name="intensity_level"
                        onChange={handleChanges}
                        value={currentData.intensity_level}
                    />
                </label>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        type="text"
                        name="location"
                        onChange={handleChanges}
                        value={currentData.location}
                    />
                </label>
                <label htmlFor="attendees">
                    Attendees
                    <input
                        id="attendees"
                        type="text"
                        name="attendees"
                        onChange={handleChanges}
                        value={currentData.attendees}
                    />
                </label>
                <label htmlFor="max_attendees">
                    Maximum Attendance
                    <input
                        id="max_attendees"
                        type="text"
                        name="max_attendees"
                        onChange={handleChanges}
                        value={currentData.max_attendees}
                    />
                </label>
                <button> Update</button>
            </form>
            <button onClick={handleCancelChanges}> Cancel</button>
            <button onClick={handleDelete}>Delete Class</button>
            
            
        </div>
    )
};

export default UpdateEvent;

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