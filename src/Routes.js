import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./core/Dashboard";
import Home from "./core/Home";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
