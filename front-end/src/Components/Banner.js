import React, { useState } from "react";
import CreateEventContext from "../context/CreateEventContext";
const Banner = () => {
  const [name, setName] = useState();
  return <div>Welcome {name}!</div>;
};
