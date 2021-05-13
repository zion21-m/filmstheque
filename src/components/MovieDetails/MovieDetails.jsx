import { useState, useEffect } from "react";
import CardActor from "../Card-film/Card-actor";
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
  ActorSection,
} from "./MovieDetailStyled";

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState();
  const [movieCredits, setMovieCredits] = useState([]);
  const urlSegment = props.match.url;
  const url = `https://api.themoviedb.org/3${urlSegment}?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=fr`;
  const creditUrl = `https://api.themoviedb.org/3${urlSegment}/credits?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=fr`;

  const imgUrl = "https://image.tmdb.org/t/p/w1280";

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
  useEffect(
    function () {
      fetch(creditUrl)
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          setMovieCredits(data);
        });
      window.scrollTo(0, 0);
    },
    [creditUrl]
  );
  console.log(movieDetails);
  console.log("movie credits", movieCredits);
  let movieTeam = [];
  if (movieCredits.crew) {
    for (let member of movieCredits.crew) {
      if (
        member.job === "Director" ||
        member.job === "Screenplay" ||
        member.job === "Story"
      ) {
        movieTeam.push(member);
      }
    }
  }

  const crewMembers = () => {
    return movieTeam.map((teamMember) => {
      return (
        <div className="crewMember">
          <span className="crewMemberName">{teamMember.name}</span>
          <br />
          <span>{teamMember.job}</span>
        </div>
      );
    });
  };

  const actors = () => {
    if (movieCredits.cast) {
      return movieCredits.cast.map((actor) => {
        return (
          <CardActor
            src={imgUrl + actor.profile_path}
            alt={actor.name}
            name={actor.name}
            character={actor.character}
            key={actor.id}
          />
        );
      });
    }
  };

  if (movieDetails) {
    const movieGenre = () => {
      return movieDetails.genres.map((genre) => {
        return (
          <span className="movieGenre" key={genre.id}>
            {genre.name} &nbsp;
          </span>
        );
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
            <p>
              <i className="tagline">{movieDetails.tagline}</i>
            </p>
            <p className="synosis">Synopsis</p>
            <p>{movieDetails.overview}</p>
            <div>
              <i>Durée : </i>
              {movieDetails.runtime} minutes
            </div>
            <div>{movieGenre()}</div>

            <p className="voteAverage">
              Recommandé à {movieDetails.vote_average * 10} %
            </p>
            <p>Nombre de votes : {movieDetails.vote_count}</p>
            <div className="movieCrew">{crewMembers()}</div>
            <div className="website">
              Site internet : &nbsp;
              {movieDetails.homepage ? (
                <a href={movieDetails.homepage}>{movieDetails.homepage}</a>
              ) : (
                "information non disponible"
              )}
            </div>
          </MovieRightSide>
        </MovieDetailStyled>

        <ActorSection>
          <h2>Les personnages de {movieDetails.title}</h2>
          <div className="actorDiv">{actors()}</div>
        </ActorSection>
        <RecommandationSection>
          <h1>Recommandations</h1>
          <RecommandationStyled>
            <Recommandation urlSegment={urlSegment} key={movieDetails.id} />
          </RecommandationStyled>
        </RecommandationSection>
        {console.log(actors())}
      </>
    );
  } else {
    return <Loader />;
  }
};

export default MovieDetails;
