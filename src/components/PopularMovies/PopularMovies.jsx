import React from "react";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";

const poster = "https://image.tmdb.org/t/p/w500";

const PopularMovieStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
`;

export default function PopularMovies({ popularMovies }) {
  let PopularMoviesArray = [];
  for (let i in popularMovies) {
    PopularMoviesArray.push(popularMovies[i]);
  }
  return (
    <PopularMovieStyled>
      {PopularMoviesArray.map((movie) => {
        return (
          <CardContainer
            src={poster + movie.poster_path}
            title={movie.title ? movie.title : movie.name}
            voteAverage={`Vote moyen: ${movie.vote_average}`}
            details={`${movie.overview}`}
            id={movie.id}
          />
        );
      })}
    </PopularMovieStyled>
  );
}
