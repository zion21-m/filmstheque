import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Movies from "./components/Movies/Movies";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import Series from "./components/Series/Series";
import StartingPage from "./components/StartingPage/StartingPage";
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
        <Route exact path="/" component={StartingPage} />
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
      <Footer />
    </>
  );
};

export default App;
