import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Recommandation from "../Recommandations/Recommandation";
import {
  MovieDetailStyled,
  MovieDetailsLeftSide,
  MovieImage,
  TitleStyled,
  MovieRightSide,
  RecommandationSection,
  RecommandationStyled,
} from "./MovieDetailStyled";

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState();
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
  const imgUrl = "https://image.tmdb.org/t/p/w1280";
  console.log("moviesdetails", movieDetails);

  if (movieDetails) {
    const movieGenre = () => {
      return movieDetails.genres.map((genre) => {
        return <span>{genre.name} &nbsp;</span>;
      });
    };
    return (
      <>
        <MovieDetailStyled urlImage={imgUrl + movieDetails.backdrop_path}>
          <MovieDetailsLeftSide className="movieLeftSide">
            <MovieImage
              src={`${imgUrl}${
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
            <Recommandation urlSegment={urlSegment} key={movieDetails.id} />
          </RecommandationStyled>
        </RecommandationSection>
      </>
    );
  } else {
    return <Loader />;
  }
};

export default MovieDetails;
