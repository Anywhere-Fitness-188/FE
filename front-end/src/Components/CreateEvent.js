import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { CreateEventContext } from "../context/CreateEventContext";
import axiosWithAuth from "../utils/axiosWithAuth";

const CreateEvent = () => {
  const [create, setCreate] = useState(false);
  const { userId, setUserId } = useContext(CreateEventContext);
  console.log(userId);
  // const id = useContext(CreateEventContext);
  // console.log(id, "CREATING EVENT");
  const changeCreate = () => {
    setCreate(!create);
  };
  const [event, setEvent] = useState({
    name: "Yoga",
    // type: "",
    start_time: "9",
    duration: "",
    intensity_level: "",
    location: "",
    attendees: 0,
    max_attendees: 0,
    user_id: 2,
  });
  // console.log(event);

  const changeName = (e) => {
    setEvent({ ...event, name: e.target.value });
  };
  // const changeType = (e) => {
  //   setEvent({ ...event, type: e.target.value });
  // };
  const changeTime = (e) => {
    setEvent({ ...event, start_time: e.target.value });
  };
  const changeDuration = (e) => {
    setEvent({ ...event, duration: e.target.value });
  };
  const changeIntensity = (e) => {
    setEvent({ ...event, intensity_level: e.target.value });
  };
  const changeLocation = (e) => {
    setEvent({ ...event, location: e.target.value });
  };
  const changeAttendees = (e) => {
    setEvent({ ...event, attendees: e.target.value });
  };

  //   This is going to need to be updated as people sign up OR we don't need to include people if we aren't signing people up. We only need the max number of people///

  const changeSize = (e) => {
    setEvent({ ...event, max_attendees: e.target.value });
  };

  const eventPost = (e) => {
    e.preventDefault();
    const newEvent = {
      name: event.name,
      // type: event.type,
      start_time: event.start_time,
      duration: event.duration,
      intensity_level: event.intensity_level,
      location: event.location,
      attendees: event.attendees,
      max_attendees: event.max_attendees,
      user_id: userId,
    };
    console.log(newEvent);
    axiosWithAuth()
      .post("api/classes", newEvent)
      .then((res) => {
        console.log("ATTN", res.data);
        changeCreate();
        setEvent({
          name: "",
          // type: "",
          time: "",
          duration: "",
          intensity: "",
          location: "",
          attendees: 0,
          max_attendees: 0,
          user_id: userId,
        });
      });
  };
  return (
    <div>
      {!create && <button onClick={changeCreate}>Create a new Event!</button>}
      {create && (
        <h3>
          Event Name:
          <input onChange={changeName} type="text" value={event.name} />
        </h3>
      )}
      {/* {create && (
        <h3>
          Type of Workout:
          <input onChange={changeType} type="text" value={event.type} />
        </h3>
      )} */}
      {create && (
        <h3>
          Start Time:
          <input onChange={changeTime} type="text" value={event.start_time} />
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
            value={event.intensity_level}
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
          <input
            onChange={changeSize}
            type="text"
            value={event.max_attendees}
          />
        </h3>
      )}
      {create && <button onClick={eventPost}>Create your Event!</button>}
      {create && <button onClick={changeCreate}>Nevermind</button>}
    </div>
  );
};

export default CreateEvent;
