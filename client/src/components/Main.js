import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Users from "./Users";
import BruteForce from "./BruteForce";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/users" component={Users}></Route>
    <Route exact path="/bruteforce" component ={BruteForce}></Route>
  </Switch>
);

export default Main;
