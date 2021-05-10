import { useState, useEffect } from "react";
import Trending from "../Trending/Trending";
import styled from "styled-components";
import PopularMovies from "../PopularMovies/PopularMovies";
import WelcomePage from "../WelcomePage/WelcomePage";

const HomeTrendingSection = styled.section`
  padding: 4rem 1rem;
  background: #e5e5e5;
  h1 {
    font-size: 2rem;
    margin-left: 5rem;
  }
`;
const HomePopularSection = styled.section`
  padding: 4rem 1rem;
  background: #191919;
  h1 {
    font-size: 2rem;
    margin-left: 5rem;
    color: #fff;
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

  return (
    <>
      <WelcomePage />
      <HomeTrendingSection>
        <h1>A la une</h1>
        <Trending moviesTrending={trend} />
      </HomeTrendingSection>
      <HomePopularSection>
        <h1>Populaire</h1>
        <PopularMovies popularMovies={popular} />
      </HomePopularSection>
    </>
  );
};

export default Home;
