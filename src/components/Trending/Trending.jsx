import React from "react";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const poster = "https://image.tmdb.org/t/p/w500";
const TrendingMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
`;

export default function Trending({ moviesTrending }) {
  let moviesTrendingArray = [];
  for (let index in moviesTrending) {
    moviesTrendingArray.push(moviesTrending[index]);
  }
  return (
    <TrendingMovies>
      <Carousel itemsToShow={3}>
        {moviesTrendingArray.map((movie) => {
          return (
            <CardContainer
              src={poster + movie.poster_path}
              title={movie.title ? movie.title : movie.name}
              details={`${movie.overview}`}
              id={movie.id}
              type={movie.media_type}
              voteAverage={`Vote moyen : ${movie.vote_average}`}
            />
          );
        })}
      </Carousel>
    </TrendingMovies>
  );
}
