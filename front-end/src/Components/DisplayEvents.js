import { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import EventCard from "./EventCard";

const DisplayEvents = () => {
  const [events, setEvents] = useState([]);
  const getEvent = () => {
    axiosWithAuth()
      .get("/api/classes")
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
        console.log(events);
      });
  };
  useEffect(getEvent, []);

  return <div>{/* <EventCard events={events} /> */}</div>;
};

export default DisplayEvents;
