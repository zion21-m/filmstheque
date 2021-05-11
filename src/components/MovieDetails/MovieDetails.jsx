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
  padding: 1.5rem 1rem;
`;
const MovieImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
const TitleStyled = styled.h1`
  font-size: 2.5rem;
  font-size: bold;
  .releaseDate {
    font-weight: 400;
  }
`;
const MovieRightSide = styled.div`
  width: 70vw;
  font-size: 1.2rem;
  padding: 1.5rem 1rem;
  text-align: justify;
  .synosis {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
const RecommandationSection = styled.section`
  background-color: #e5e5e5;
  padding: 4rem 1rem;
  h1 {
    font-size: 2rem;
    margin-left: 3.5rem;
    margin-bottom: 2rem;
  }
`;
const RecommandationStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState();
  console.log("props match", props.match);
  const urlSegment = props.match.url;
  const url = `https://api.themoviedb.org/3${urlSegment}?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=fr`;

  useEffect(
    function () {
      fetch(url)
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          setMovieDetails(data);
        });
      window.scrollTo(0, 0);
    },
    [url]
  );
  const poster = "https://image.tmdb.org/t/p/w1280";
  console.log("movieDetails", movieDetails);

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
            <TitleStyled>
              {movieDetails.title ? movieDetails.title : movieDetails.name}
              <span className="releaseDate">
                &nbsp;(
                {movieDetails.release_date
                  ? movieDetails.release_date
                  : movieDetails.first_air_date}
                )
              </span>
            </TitleStyled>
            <p className="synosis">Synopsis</p>
            <p>{movieDetails.overview}</p>
            {movieGenre()}

            <p>Recommandé à {movieDetails.vote_average * 10} %</p>
            <p>Nombre de votes : {movieDetails.vote_count}</p>
            <div>
              Site internet : &nbsp;
              {movieDetails.homepage ? (
                <a href={movieDetails.homepage}>{movieDetails.homepage}</a>
              ) : (
                "information non disponible"
              )}
            </div>
          </MovieRightSide>
        </MovieDetailStyled>
        <RecommandationSection>
          <h1>Recommandations</h1>
          <RecommandationStyled>
            <Recommandation urlSegment={urlSegment} />
          </RecommandationStyled>
        </RecommandationSection>
      </>
    );
  } else {
    return <Loader />;
  }
};

export default MovieDetails;
