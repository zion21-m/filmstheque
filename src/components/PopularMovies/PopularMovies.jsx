import React from "react";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const poster = "https://image.tmdb.org/t/p/w500";

const PopularMovieStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
`;
let item = 4;
if (window.screen.width < 600) {
  item = 1;
}
console.log(window.screen.width);
export default function PopularMovies({ popularMovies }) {
  let PopularMoviesArray = [];
  for (let index in popularMovies) {
    PopularMoviesArray.push(popularMovies[index]);
  }
  return (
    <PopularMovieStyled>
      <Carousel itemsToShow={item}>
        {PopularMoviesArray.map((movie) => {
          return (
            <CardContainer
              src={poster + movie.poster_path}
              title={movie.title ? movie.title : movie.name}
              voteAverage={`Popularité: ${movie.popularity}`}
              details={`${movie.overview}`}
              id={movie.id}
              type="movie"
            />
          );
        })}
      </Carousel>
    </PopularMovieStyled>
  );
}
