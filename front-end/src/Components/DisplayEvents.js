import { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const DisplayEvents = () => {
  const [events, setEvents] = useState([]);
  const getEvent = () => {
    axiosWithAuth()
      .get("/api/classes")
      .then((res) => {
        setEvents(res.data);
      });
  };
  useEffect(getEvent, []);

  return <div>{events}</div>;
};

export default DisplayEvents;
