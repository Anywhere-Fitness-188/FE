import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { editEventContext } from "../context/eventContext";


const UpdateEvent = (props) => {
    const [state, setState] = useState();
    return (
        <div>
            <editEventContext.Consumer>
            {() =>  (
                <div className="update-form">
                    {props.event.type}
                    <form></form>
            
                </div>
            )}
            </editEventContext.Consumer>
        </div>
    )
};

export default UpdateEvent;

// name: "",
//           type: "",
//           time: "",
//           duration: "",
//           intensity: "",
//           location: "",
//           attendees: "",
//           size: "",
