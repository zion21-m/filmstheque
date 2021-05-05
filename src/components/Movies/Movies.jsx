import { useState, useEffect } from "react";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";

const MovieSection = styled.section`
  padding: 1rem;
  .moviesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h1 {
    font-size: 1.3rem;
  }
  .moviesPresentationText {
    font-size: 1rem;
  }
`;

const Movies = () => {
  const [movieByPopularity, setMovieByPopularity] = useState();
  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    )
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {
        const movies = data;
        setMovieByPopularity(movies.results);
        console.log("movies", movieByPopularity);
      });
  }, []);
  const poster = "https://image.tmdb.org/t/p/w500";

  const arrayMoviesByPopularity = [];
  for (let index in movieByPopularity) {
    arrayMoviesByPopularity.push(movieByPopularity[index]);
  }
  console.log("array", arrayMoviesByPopularity);

  const renderMoviesByPopularity = () => {
    return arrayMoviesByPopularity.map((movie) => {
      return (
        <CardContainer
          src={poster + movie.poster_path}
          title={movie.title ? movie.title : movie.name}
          popularity={`Popularité: ${movie.popularity}`}
        />
      );
    });
  };

  return (
    <MovieSection>
      <h1>Trouve ton film</h1>
      <p className="moviesPresentationText">
        Nos films sont présentés par popularité, en fonction des avis des autres
        utilisateurs, afin de vous présenter le meilleur.
      </p>
      <div className="moviesContainer">{renderMoviesByPopularity()}</div>
    </MovieSection>
  );
};

export default Movies;
