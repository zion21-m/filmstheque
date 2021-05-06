import { useState, useEffect } from "react";
import styled from "styled-components";

const MovieDetailStyled = styled.div`
  display: flex;
  padding: 0.5rem;
`;
const MovieDetailsLeftSide = styled.div`
  width: 30vw;
  padding: 0rem 1rem;
`;
const MovieImage = styled.img`
  width: 100%;
`;
const TitleStyled = styled.h1`
  margin-left: 1rem;
`;
const MovieRightSide = styled.div`
  font-size: 1rem;
`;

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState();
  const urlSegment = props.match.url;
  const url = `https://api.themoviedb.org/3/${urlSegment}?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=en-US`;

  useEffect(
    function () {
      fetch(url)
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          setMovieDetails(data);
        });
    },
    [url]
  );
  const poster = "https://image.tmdb.org/t/p/w1280";

  if (movieDetails) {
    const movieGenre = () => {
      return movieDetails.genres.map((genre) => {
        return <di>{genre.name} &nbsp;</di>;
      });
    };
    return (
      <>
        <TitleStyled>{movieDetails.title}</TitleStyled>
        <MovieDetailStyled>
          <MovieDetailsLeftSide className="movieLeftSide">
            <MovieImage
              src={`${poster}${
                movieDetails.poster_path
                  ? movieDetails.poster_path
                  : movieDetails.backdrop_path
              }`}
              alt={movieDetails.title}
            />
          </MovieDetailsLeftSide>
          <MovieRightSide>
            <div>{movieDetails.overview}</div>
            <div>Vote average : {movieDetails.vote_average}</div>
            <div>Vote count : {movieDetails.vote_count}</div>
            {movieGenre()}
            <div>
              Site internet : &nbsp;
              <a href={movieDetails.homepage}>{movieDetails.homepage}</a>
            </div>
          </MovieRightSide>
        </MovieDetailStyled>
      </>
    );
  } else {
    return <h2>Wait a moment</h2>;
  }
};

export default MovieDetails;
