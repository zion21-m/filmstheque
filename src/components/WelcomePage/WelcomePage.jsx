import { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

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
    return (
      <Carousel>
        {arrayUpcomingMovies.map((upComingMovie) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={poster + upComingMovie.backdrop_path}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>
                  {upComingMovie.title
                    ? upComingMovie.title
                    : upComingMovie.original_title}
                </h3>
                <p>{upComingMovie.release_date}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  };

  return <WelcomePageStyled>{renderUpComingMovies()}</WelcomePageStyled>;
};

export default WelcomePage;
