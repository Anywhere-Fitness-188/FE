import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import AuthRouter from "./Components/AuthRouter";
import UserArea from "./Components/UserArea";
import "./App.css";

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
            <PrivateRoute exact path="/fitness" component={UserArea} />
            <Route path="/" component={AuthRouter} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
