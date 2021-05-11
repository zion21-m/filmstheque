import React, { useState, useEffect } from "react";
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
  const [word, setWord] = useState();
  const [fetchLink, setFetchLink] = useState();
  const [tvFetchLink, setTvFetchLink] = useState();
  const [dataSearch, setDataSearch] = useState();
  const [tvDataSearch, setTvDataSearch] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const searchApiLink =
      "https://api.themoviedb.org/3/search/movie?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&query=";
    const searchTvApiLink =
      "https://api.themoviedb.org/3/search/tv?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&query=";
    let linkToFetch = searchApiLink + search;
    let tvLinkFetch = searchTvApiLink + search;
    setFetchLink(linkToFetch);
    setTvFetchLink(tvLinkFetch);
    setWord(search);
  };
  console.log("fetchLink", fetchLink);
  useEffect(
    function () {
      fetch(fetchLink)
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          const searchData = data;
          setDataSearch(searchData.results);
        });
    },
    [fetchLink]
  );
  useEffect(
    function () {
      fetch(tvFetchLink)
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          const searchedTvData = data;
          setTvDataSearch(searchedTvData.results);
        });
    },
    [tvFetchLink]
  );

  console.log("searchdata", dataSearch);
  return (
    <>
      <NavBar onChange={handleSearch} onClick={handleClick} />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route
          path="/search"
          render={() => (
            <Search
              dataSearchResult={dataSearch}
              searchedWord={word}
              tvDataSearched={tvDataSearch}
            />
          )}
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
