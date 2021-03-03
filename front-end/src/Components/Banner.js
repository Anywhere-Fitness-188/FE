import { useState } from "react";
import React, { useState } from "react";

const Banner = () => {
  const [name, setName] = useState();
  return <div>Welcome {name}!</div>;
};
