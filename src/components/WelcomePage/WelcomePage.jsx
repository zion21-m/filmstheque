import { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import Loader from "../Loader/Loader";

const WelcomePageStyled = styled.section`
  width: 100%;
  height: auto;
  background-color: #353535;

  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-color: #0765ff;
  }

  .movie-container {
    position: relative;
  }
  .welcome-image {
    opacity: 0.6;
    filter: grayscale(40%);
  }
  .movie-information {
    position: absolute;
    bottom: 200px;
    left: -300px;
    font-size: 18px;
    color: #e5e5e5;
    font-size: 2rem;
  }
  .movie-title {
    font-size: 4rem;
    color: #ffa106;
    font-weight: bold;
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
  const imgUrl = "https://image.tmdb.org/t/p/w1280";

  const renderUpComingMovies = () => {
    return (
      <Carousel
        className="movie-container"
        pause={false}
        nextLabel=""
        prevLabel=""
        fade
      >
        {arrayUpcomingMovies.map((upComingMovie) => {
          return (
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100 welcome-image"
                src={imgUrl + upComingMovie.backdrop_path}
                alt={upComingMovie.title}
              />
              <Carousel.Caption className="movie-information">
                <h3 className="movie-title">
                  {upComingMovie.title
                    ? upComingMovie.title
                    : upComingMovie.original_title}
                </h3>
                <p>Date de sortie: {upComingMovie.release_date}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  };
  if (!upComingMovies) {
    return (
      <WelcomePageStyled>
        <Loader />
      </WelcomePageStyled>
    );
  } else {
    return <WelcomePageStyled>{renderUpComingMovies()}</WelcomePageStyled>;
  }
};

export default WelcomePage;
