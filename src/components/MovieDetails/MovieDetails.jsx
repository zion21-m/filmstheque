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
          <div>
            <div>{movieDetails.overview}</div>
          </div>
        </MovieDetailStyled>
      </>
    );
  } else {
    return <h2>Wait a moment</h2>;
  }
};

export default MovieDetails;
