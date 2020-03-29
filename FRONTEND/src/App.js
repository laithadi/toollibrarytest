import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import AllTools from "./Tools/pages/AllTools";
import MyTools from "./Tools/pages/MyTools";
import Tool from "./Tools/pages/Tool";
import MainHeader from "./navigation/MainHeader";

const App = () => {
  return (
    <Router>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <AllTools />
          </Route>
          <Route path="/mytools">
            <MyTools />
          </Route>
          <Route path="/tool/:toolname">
            <Tool />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
