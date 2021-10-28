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
  let itemtoshow = 4;
  
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
  return (
    <TrendingMovies>
      <Carousel itemsToShow={itemtoshow} breakPoints={breakPoints}>
        {moviesTrendingArray.map((movie,index) => {
          return (
            <CardContainer key={index}
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
