import { useState, useEffect } from "react";
import Trending from "../Trending/Trending";
import styled from "styled-components";
import PopularMovies from "../PopularMovies/PopularMovies";

const HomeSectionTrending = styled.section`
  padding: 1rem;
  h1 {
    font-size: 1.4rem;
    margin-left: 2rem;
  }
`;

const Home = () => {
  const [trend, setTrend] = useState();
  const [popular, setPopular] = useState();
  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c"
    )
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {
        const trending = data;
        setTrend(trending.results);
      });
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=en-US&page=1"
    )
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {
        const popular = data;
        setPopular(popular.results);
      });
  }, []);
  console.log("from home", popular);
  return (
    <HomeSectionTrending>
      <h1>Trending</h1>
      <Trending moviesTrending={trend} />
      <h1>Populaire</h1>
      <PopularMovies popularMovies={popular} />
    </HomeSectionTrending>
  );
};

export default Home;
