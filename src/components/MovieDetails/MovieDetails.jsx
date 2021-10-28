import { useState, useEffect } from "react";
import {Modal, Button} from 'react-bootstrap';

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
  ButtonContainer,
} from "./MovieDetailStyled";

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState();
  const [movieCredits, setMovieCredits] = useState([]);
  const [showActor, setShowActor] = useState(4);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  // const [movieId, setMovieId] = useState();
  const [movieVideoELements, setMovieVideoElements]= useState();


  const urlSegment = props.match.url;
  console.log("urlsegment", props.match);

  const url = `https://api.themoviedb.org/3${urlSegment}?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=fr`;
  const creditUrl = `https://api.themoviedb.org/3${urlSegment}/credits?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=fr`;
  const videoUrl = movieDetails? `https://api.themoviedb.org/3/${urlSegment}/videos?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=fr`: "";

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
      setLoading(true);
      fetch(creditUrl)
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          setMovieCredits(data);
          setLoading(false);
        });
      window.scrollTo(0, 0);
    },
    [creditUrl]
  );

  useEffect(
    function () {
      fetch(videoUrl)
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          setMovieVideoElements(data);
        });
      // window.scrollTo(0, 0);
    },
    [videoUrl]
  );

//  if(movieDetails) setMovieId(movieDetails.id)

  console.log("movies details", movieDetails);
  console.log("movie credits", movieCredits);
  console.log("movie video", movieVideoELements)

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
    return movieTeam.map((teamMember,index) => {
      return (
        <div className="crewMember" key={index}>
          <span className="crewMemberName">{teamMember.name}</span>
          <br />
          <span>{teamMember.job}</span>
        </div>
      );
    });
  };
  const showMore = (e) => {
    e.preventDefault();
    setShowActor(showActor + 4);
  };

  const showLess = (e) => {
    e.preventDefault();
    setShowActor(showActor - 4);
    
  };

  const actorsArray = [];
  for (let index in movieCredits.cast) {
    if (index < showActor) {
      actorsArray.push(movieCredits.cast[index]);
    }
  }

  

  const actors = () => {
    if (actorsArray) {
      return actorsArray.map((actor) => {
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

    function ShowPreview(props) {
      
        const showTrailer = ()=> {
          if(!movieVideoELements){
            return <div style={{fontSize:"20px", textAlign:"center"}} >Video non disponible</div>

          }  else if(movieVideoELements.results.length > 0) {
           return <iframe title="themovie" width="100%" height="400px" src={`http://www.youtube.com/embed/${movieVideoELements.results[0].key}`}frameborder="0"> </iframe>            

          } else {
            return <div style={{fontSize:"20px", textAlign:"center"}}>Video non disponible</div>
          }
        }
      
      
      return (
        
        <Modal
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          contentClassName="modal-style"
          fullscreen="true"
        >
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
              Trailer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body centered>
            { showTrailer()}
          
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Fermer</Button>
          </Modal.Footer>
        </Modal>
      
      );
    }

    return (
      <>
        <MovieDetailStyled urlImage={imgUrl + movieDetails.backdrop_path}>
          
  
  {/* <MovieModal/> */}
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
              {movieDetails.runtime ? (
                <>
                  <i>Durée : </i>
                  {movieDetails.runtime} minutes
                </>
              ) : (
                <>
                  <div>
                    <i>
                      Durée par épisode: {movieDetails.episode_run_time[0]}{" "}
                      minutes
                    </i>
                  </div>
                  <div>
                    <i>
                      Nombre d'épisodes : {movieDetails.number_of_episodes}
                      &nbsp; épisodes
                    </i>
                  </div>
                  <div>
                    <i>
                      Nombre de saisons : {movieDetails.number_of_seasons}&nbsp;
                      saison(s)
                    </i>
                  </div>
                </>
              )}
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
            <div>

        <Button variant="primary" onClick={() => setModalShow(true)}>
          Voir le trailer
        </Button>
  
        <ShowPreview
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
          
          </div>
          </MovieRightSide>
        </MovieDetailStyled>

        <ActorSection>
          {loading ? (
            <h2>Patientez</h2>
          ) : (
            <>
              <h2>Les personnages de {movieDetails.title?movieDetails.title: movieDetails.name}</h2>
              <div className="actorDiv">{actors()}</div>
              <ButtonContainer>
                {showActor < movieCredits.cast.length ? (
                  <Button variant="primary" onClick={showMore}>
                    Voir plus
                  </Button>
                ) : (
                  <div></div>
                )}
                {showActor > 4 ? (
                  <Button variant="warning" onClick={showLess}>
                    Voir moins
                  </Button>
                ) : (
                  <div></div>
                )}
              </ButtonContainer>
            </>
          )}
        </ActorSection>
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
