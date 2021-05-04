import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import NavBar from "./components/NavBar/NavBar";
import Series from "./components/Series/Series";
import "./index.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
      </Switch>
    </>
  );
};

export default App;
