import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Movies from "./components/Movies/Movies";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import Series from "./components/Series/Series";
// import WelcomePage from "./components/WelcomePage/WelcomePage";
import "./index.css";

const App = () => {
  const [search, setSearch] = useState();
  const [wordSearched, setWordSearched] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setWordSearched(search);
  };

  return (
    <>
      <NavBar onChange={handleSearch} onClick={handleClick} />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route
          path="/search"
          render={() => <Search searchedWord={wordSearched} />}
        />
        <Route
          path="/movie/:id"
          render={({ match }) => <MovieDetails match={match} />}
        />
        <Route
          path="/tv/:id"
          render={({ match }) => <MovieDetails match={match} />}
        />
      </Switch>
    </>
  );
};

export default App;
