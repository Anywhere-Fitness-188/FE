import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import "./App.css";
import CreateEvent from "./Components/CreateEvent";


function App() {
  return (
    <div className="App">
      <Register/>
      <Login/>
      <CreateEvent /> 
    </div>
  );
}

export default App;
