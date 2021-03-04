import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navigation from "./components/navigation/nav.component";
import Login from "./features/login/login";
import Room from "./features/room/room";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/room" component={Room} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
