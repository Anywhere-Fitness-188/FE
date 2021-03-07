import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import

const EventCard = (props) => {
    // const value = useContext(/contextObject/);

    
    
    return (
        <div className="event-card" key={props.event.id}>
            <header className="event-name">
                <h3>{props.event.name}</h3>
                <h6>{props.event.duration}</h6>
            </header>
            <section className="event-info">
                <h3>{props.event.start_time}</h3>
                <h3>{props.event.duration}</h3>
                <h3>{props.event.intensity_level}</h3>
                <h3>{props.event.location}</h3>
                <h3>{props.event.attendees}</h3>
                <h3>{props.event.max_attendees}</h3>
            </section>

            <button onClick={(e) => {
                e.preventDefault();
                props.setProtectedData({
                    ...props.protectedData,
                    isEditing:true,
                    editing: props.event
                })
            }} > Edit</button>
            
        </div>
    );

};

export default EventCard;

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