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

const breakPoints = [
  { width: 200, itemsToShow: 1, itemsToScroll:2},

  { width: 450, itemsToShow: 2, itemsToScroll:2},
  { width: 550, itemsToShow: 3,  pagination: true },
  { width: 750, itemsToShow: 4 },
  { width: 850, itemsToShow: 4 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
]

export default function PopularMovies({ popularMovies }) {
  let PopularMoviesArray = [];
  for (let index in popularMovies) {
    PopularMoviesArray.push(popularMovies[index]);
  }
  return (
    <PopularMovieStyled>
      <Carousel itemsToShow={item} breakPoints={breakPoints}>
        {PopularMoviesArray.map((movie, index) => {
          console.log("movie popular", movie)
          return (
            <CardContainer
              src={poster + movie.poster_path}
              title={movie.title ? movie.title : movie.name}
              voteAverage={`Popularité: ${movie.popularity}`}
              details={`${movie.overview}`}
              id={movie.id}
              type="movie"
              key={index}
            />
          );
        })}
      </Carousel>
    </PopularMovieStyled>
  );
}
