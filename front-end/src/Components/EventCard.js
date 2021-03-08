import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DisplayContext } from "../context/DisplayContext";

const EventCard = (props) => {
  //   const values = useContext(DisplayContext);
  const values = props.events;

  console.log(props.values, "VALUES");

  return (
    <div className="event-card">
      {values.map((value) => (
        <section className="event-info">
          <h3>{value.name}</h3>
          <h4>{value.start_time}</h4>
          <h4>{value.duration}</h4>
          <h4>{value.intensity_level}</h4>
          <h4>{value.string}</h4>
          <h4>{value.attendees}</h4>
          <h4>{value.max_attendees}</h4>
        </section>
      ))}
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
