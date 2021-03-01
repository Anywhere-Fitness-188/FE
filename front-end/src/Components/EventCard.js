import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import

const EventCard = () => {
    // const value = useContext(/contextObject/);

    return (
        <div className="event-card">
            <header className="event-name">
                <h3>name</h3>
                <h6>Type</h6>
            </header>
            <section className="event-info">
                <h4>time api stored in context</h4>
                <h4>duration in minutes</h4>
                <h4>intensity high medium low</h4>
                <h4>location string</h4>
                <h4>attendees #</h4>
                <h4>size(max)</h4>
            </section>
            
        </div>
    );

};

export default EventCard;

//           name: "",
//           type: "",
//           time: "",
//           duration: "",
//           intensity: "",
//           location: "",
//           attendees: "",
//           size: "",