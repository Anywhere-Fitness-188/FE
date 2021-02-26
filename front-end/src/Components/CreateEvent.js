import React, { useEffect, useState } from "react";
import "../App.css";
import axiosWithAuth from "../api/axiosWithAuth";

const CreateEvent = () => {
  const [create, setCreate] = useState(false);
  const changeCreate = () => {
    setCreate(!create);
  };
  const [event, setEvent] = useState({
    name: "",
    type: "",
    time: "",
    duration: "",
    intensity: "",
    location: "",
    attendees: "",
    size: "",
  });
  const changeName = (e) => {
    setEvent({ ...event, name: e.target.value });
  };
  const changeType = (e) => {
    setEvent({ ...event, type: e.target.value });
  };
  const changeTime = (e) => {
    setEvent({ ...event, time: e.target.value });
  };
  const changeDuration = (e) => {
    setEvent({ ...event, duration: e.target.value });
  };
  const changeIntensity = (e) => {
    setEvent({ ...event, intensity: e.target.value });
  };
  const changeLocation = (e) => {
    setEvent({ ...event, location: e.target.value });
  };
  const changeAttendees = (e) => {
    setEvent({ ...event, attendees: e.target.value });
  };

  //   This is going to need to be updated as people sign up OR we don't need to include people if we aren't signing people up. We only need the max number of people///

  const changeSize = (e) => {
    setEvent({ ...event, size: e.target.value });
  };

  const eventPost = () => {
    axiosWithAuth()
      .post("/classes", {
        name: event.name,
        type: event.type,
        time: event.time,
        duration: event.duration,
        intensity: event.intensity,
        location: event.location,
        attendees: event.attendees,
        size: event.size,
      })
      .then((res) => {
        console.log("ATTN", res);
        changeCreate();
        setEvent({
          name: "",
          type: "",
          time: "",
          duration: "",
          intensity: "",
          location: "",
          attendees: "",
          size: "",
        });
      });
  };
  return (
    <div>
      {!create && <button onClick={changeCreate}>Create a new Event!</button>}
      {create && (
        <h3>
          Event Name:
          <input 
            onChange={changeName} 
            type="text" 
            value={event.name} />
        </h3>
      )}
      {create && (
        <h3>
          Type of Workout:
          <input onChange={changeType} type="text" value={event.type} />
        </h3>
      )}
      {create && (
        <h3>
          Start Time:
          <input onChange={changeTime} type="text" value={event.time} />
        </h3>
      )}
      {create && (
        <h3>
          Duration:
          <input onChange={changeDuration} type="text" value={event.duration} />
        </h3>
      )}
      {create && (
        <h3>
          Intensity:
          <input
            onChange={changeIntensity}
            type="text"
            value={event.intensity}
          />
        </h3>
      )}
      {create && (
        <h3>
          Location:
          <input onChange={changeLocation} type="text" value={event.location} />
        </h3>
      )}
      {create && (
        <h3>
          Current Attendees:
          <input
            onChange={changeAttendees}
            type="text"
            value={event.attendees}
          />
        </h3>
      )}
      {create && (
        <h3>
          Max Size:
          <input onChange={changeSize} type="text" value={event.size} />
        </h3>
      )}
      {create && <button onClick={eventPost}>Create your Event!</button>}
      {create && <button onClick={changeCreate}>Nevermind</button>}
    </div>
  );
};

export default CreateEvent;
