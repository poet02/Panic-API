import React, { useState, useEffect } from "react";

import { CssBaseline } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import Featured from "./components/Products/Product/featured";
// import Filter from "./components/Products/Filter/Filter";
// import PriceRanges from "./components/Products/Filter/PriceRanges";
// import OrderBy from "./components/Products/Filter/OrderBy";

const App = () => {
  return (
    <>
    
      <Router>
        <div>
          <CssBaseline />
         
          <Switch>
            <Route exact path='/'>
              <div>homee</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
