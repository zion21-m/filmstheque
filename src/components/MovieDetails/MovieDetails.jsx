import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import Recommandation from "../Recommandations/Recommandation";

const MovieDetailStyled = styled.div`
  display: flex;
  padding: 2rem 0.5rem;
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;

  &::after {
    content: "";
    background: url("${(props) => (props.urlImage ? props.urlImage : "")}");
    background-size: cover;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
const MovieDetailsLeftSide = styled.div`
  width: 30vw;
  padding: 0rem 1rem;
`;
const MovieImage = styled.img`
  width: 100%;
`;
const TitleStyled = styled.h1`
  font-size: 2.5rem;
  font-size: bold;
`;
const MovieRightSide = styled.div`
  font-size: 1rem;
  padding: 1.5rem 0.2rem;
`;
const RecommandationStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState();
  const urlSegment = props.match.url;
  const url = `https://api.themoviedb.org/3${urlSegment}?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=en-US`;

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
        return <span>{genre.name} &nbsp;</span>;
      });
    };
    return (
      <>
        <MovieDetailStyled urlImage={poster + movieDetails.backdrop_path}>
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
            <TitleStyled>{movieDetails.title}</TitleStyled>
            <p>Synopsis</p>
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
        <h1>Recommendations</h1>
        <RecommandationStyled>
          <Recommandation urlSegment={urlSegment} />
        </RecommandationStyled>
      </>
    );
  } else {
    return <Loader />;
  }
};

export default MovieDetails;
