import { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import EventCard from "./EventCard";
import { DisplayContext } from "../context/DisplayContext";

const DisplayEvents = () => {
  const [events, setEvents] = useState([]);
  const getEvent = () => {
    axiosWithAuth()
      .get("/api/classes")
      // should the get take all of the class fields? Why?
      .then((res) => {
        console.log(res.data, "DISPLAY");
        setEvents(res.data);
      });
    console.log(events);
  };

  useEffect(getEvent, []);

  return (
    <DisplayContext.Provider value={{ events }}>
      <div>
        <EventCard values={events} />
      </div>
    </DisplayContext.Provider>
  );
};

export default DisplayEvents;
