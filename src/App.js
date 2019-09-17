import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Authentication from "./components/Authentication"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Authentication} />
      </Switch>
    );
  }
}

export default App;
