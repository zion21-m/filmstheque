import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import Series from "./components/Series/Series";
import "./index.css";

const App = () => {
  const [search, setSearch] = useState();
  const [fetchLink, setFetchLink] = useState();
  const [dataSearch, setDataSearch] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const searchApiLink =
      "https://api.themoviedb.org/3/search/movie?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&query=";
    let linkToFetch = searchApiLink + search;
    setFetchLink(linkToFetch);
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
  console.log("searchdata", dataSearch);
  return (
    <>
      <NavBar onChange={handleSearch} onClick={handleClick} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route
          path="/search"
          render={() => <Search resultDataSearch={dataSearch} />}
        />
      </Switch>
    </>
  );
};

export default App;
