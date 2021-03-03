import { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import EventCard from "./EventCard";
import { eventsContext } from "../context/eventContext";

const DisplayEvents = () => {
  const [events, setEvents] = useState([]);
  const getEvent = () => {
    axiosWithAuth()
      .get("/api/classes")
      .then((res) => {
        console.log(res.data, "DISPLAY");
        setEvents(res.data);
      });
  };
  console.log(events);
  useEffect(getEvent, []);

  return (
    <eventsContext.Provider value={{ events }}>
      <div>
        <EventCard />
      </div>
    </eventsContext.Provider>
  );
};

export default DisplayEvents;
