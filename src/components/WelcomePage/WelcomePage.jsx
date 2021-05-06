import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const WelcomePageStyled = styled.section`
  width: 100%;
  height: auto;
  padding-top: 0rem;
  padding-bottom: 5rem;
  background-color: #353535;
  .movie-container {
    width: 100vw;
    position: relative;
  }
  .welcome-image {
    width: 100%;
    height: 82vh;
    opacity: 0.6;
    filter: grayscale(40%);
  }
  .movie-information {
    position: absolute;
    bottom: 50px;
    left: 16px;
    font-size: 18px;
    color: #e5e5e5;
    font-size: 2rem;
  }
  .movie-title {
    font-size: 4rem;
  }
  .movie-name {
    color: #ffa106;
    font-weight: bold;
  }
  .rec.rec-arrow {
    background-color: rgba(0, 0, 0, 1);
  }
  .rec.rec-dot {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const WelcomePage = () => {
  const [upComingMovies, setUpComingMovies] = useState();
  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=en-US&page=1"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const movie = data;
        setUpComingMovies(movie.results);
      });
  }, []);
  const arrayUpcomingMovies = [];
  for (let index in upComingMovies) {
    if (index < 4) {
      arrayUpcomingMovies.push(upComingMovies[index]);
    }
  }
  const poster = "https://image.tmdb.org/t/p/w1280";

  const renderUpComingMovies = () => {
    return arrayUpcomingMovies.map((upComingMovie) => {
      return (
        <div className="movie-container">
          <img
            src={poster + upComingMovie.backdrop_path}
            alt={upComingMovie.title}
            className="welcome-image"
          />
          <div className="movie-information">
            <div className="movie-title">
              Titre :{" "}
              <span className="movie-name">
                {upComingMovie.title
                  ? upComingMovie.title
                  : upComingMovie.original_title}
              </span>
            </div>
            <div className="movie-out">
              Date de sortie: {upComingMovie.release_date}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <WelcomePageStyled>
      <Carousel itemsToShow={1}>{renderUpComingMovies()}</Carousel>
    </WelcomePageStyled>
  );
};

export default WelcomePage;
