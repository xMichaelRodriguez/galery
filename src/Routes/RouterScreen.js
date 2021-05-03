import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { DirScreen } from "../components/DirScreen";
import { HomeScreen } from "../components/HomeScreen";
import { NavBarScreen } from "../components/NavBarScreen";
export const RouterScreen = () => {
 
  return (
    <Router>
      <NavBarScreen />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/path/:dir" component={DirScreen} />
      </Switch>
    </Router>
  );
};
