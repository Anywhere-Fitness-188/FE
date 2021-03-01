import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import AuthRouter from "./Components/AuthRouter";
import Login from './Components/Login.js';
import Register from './Components/Register.js';
import "./App.css";
import CreateEvent from "./Components/CreateEvent";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <h1>Fitness Tracker</h1>
          </div>
        </header>
        <section className="main-content">
          <Switch>
            {/* <Route exact path="/home" component={Register} /> */}
            <Route path="/" component={AuthRouter} />
          </Switch>
        </section>
        
      
      {/* <Login/>
      <CreateEvent />  */}
    </div>
    </Router>
  );
}

export default App;
