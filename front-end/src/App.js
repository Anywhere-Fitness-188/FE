import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import AuthRouter from "./Components/AuthRouter";
import UserArea from "./Components/UserArea";
import "./App.css";
import CreateEvent from "./Components/CreateEvent";
import { CreateEventContext } from "./context/CreateEventContext";
import DisplayEvents from "./Components/DisplayEvents";

function App() {
  const [userId, setUserId] = useState();
  return (
    <CreateEventContext.Provider value={{ userId, setUserId }}>
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="App-logo">
              <h1>Fitness Tracker</h1>
            </div>
          </header>
          <section className="main-content">
            <Switch>
              <PrivateRoute exact path="/fitness" component={UserArea} />
              <Route path="/" component={AuthRouter} />
            </Switch>
          </section>
        </div>
      </Router>
      {/* <DisplayEvents /> */}
    </CreateEventContext.Provider>
  );
}

export default App;
