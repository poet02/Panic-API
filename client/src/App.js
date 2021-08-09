import React, { useState, useEffect } from "react";

import { CssBaseline } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/home";

const App = () => {
  return (
    <>
      <Router>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
      </Router>
    </>
  );
};

export default App;
