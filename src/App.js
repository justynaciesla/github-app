import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import ListOfUsers from "./components/listOfUsers";
import UserProfile from "./components/userProfile";
import NotFound from "./components/notFound";

function App() {
  return (
    <React.Fragment>
      <main className="App">
        <Switch>
          <Route path="/users/:username" component={UserProfile} />
          <Route path="/users" component={ListOfUsers} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/users" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
