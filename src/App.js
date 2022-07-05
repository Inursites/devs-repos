import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage3Dark from "./pages/Homepage3Dark";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage3Dark />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
