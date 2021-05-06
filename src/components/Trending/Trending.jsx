import React from "react";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";

const poster = "https://image.tmdb.org/t/p/w500";
const TrendingMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
`;

export default function Trending({ moviesTrending }) {
  let arra = [];
  for (let i in moviesTrending) {
    arra.push(moviesTrending[i]);
  }
  return (
    <TrendingMovies>
      {arra.map((movie) => {
        return (
          <CardContainer
            src={poster + movie.poster_path}
            title={movie.title ? movie.title : movie.name}
            details={`${movie.overview}`}
            id={movie.id}
            type="movie"
          />
        );
      })}
    </TrendingMovies>
  );
}
