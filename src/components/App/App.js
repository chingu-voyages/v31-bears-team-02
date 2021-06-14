import * as React from "react";
import { Switch, Route } from "react-router-dom";
//
import { HOME } from "../../config/routes";
// import { Route } from "../routes";
import HomePage from "../HomePage";
import NotFound from "../NotFound";
import "./App.css";
import TopNavBar from "../TopNavBar";
import Game from "../Game/Game";

function App() {
  // eslint-disable-next-line no-unused-vars
  // const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <div className="App">
      <TopNavBar />
      <Switch>
        <Route
          exact
          path={HOME}
          component={HomePage}
          // isAuthenticated={isAuthenticated}
        />
        <Route path="/game" component={Game} />
        <Route
          path="*"
          component={NotFound}
          // isAuthenticated={isAuthenticated}
        />
      </Switch>
    </div>
  );
}

export default App;
