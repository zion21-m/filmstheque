import { useState, useEffect } from "react";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const MovieSection = styled.section`
  padding: 1rem;
  background-color: #e5e5e5;
  .moviesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
      });
  }, []);

  const poster = "https://image.tmdb.org/t/p/w1280";
  const arrayMoviesByPopularity = [];
  for (let index in movieByPopularity) {
    arrayMoviesByPopularity.push(movieByPopularity[index]);
  }

  if (!movieByPopularity) {
    return <Loader />;
  } else {
    const renderMoviesByPopularity = () => {
      return arrayMoviesByPopularity.map((movie) => {
        return (
          <CardContainer
            src={poster + movie.poster_path}
            title={movie.title ? movie.title : movie.name}
            popularity={`Popularité: ${movie.popularity}`}
            details={`${movie.overview}`}
            id={movie.id}
            type="movie"
          />
        );
      });
    };
    return (
      <MovieSection>
        <h1>Trouve ton film</h1>
        <p className="moviesPresentationText">
          Nos films sont présentés par popularité, en fonction des avis des
          autres utilisateurs, afin de vous présenter le meilleur.
        </p>
        <div className="moviesContainer">{renderMoviesByPopularity()}</div>
      </MovieSection>
    );
  }
};

export default Movies;
