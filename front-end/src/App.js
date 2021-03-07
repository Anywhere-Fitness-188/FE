import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PrivateRoute from "./Components/PrivateRoute";
import CreateEvent from "./Components/CreateEvent";
import AuthRouter from "./Components/AuthRouter";
import UserArea from "./Components/UserArea";
import "./App.css";
import UpdateEvent from './Components/UpdateEvent';



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
            
          
                    
            {/* <PrivateRoute exact path="/edit" component={UpdateEvent} /> */}
            <PrivateRoute exact  path="/add" component={CreateEvent} />
            <PrivateRoute exact path="/fitness" component={UserArea} />
            <Route path="/" component={AuthRouter} /> 
          </Switch>
        </section>
        
      
    </div>
    </Router>
  );
}

export default App;
