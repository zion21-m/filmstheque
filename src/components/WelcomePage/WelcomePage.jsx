import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Loader from "../Loader/Loader";
import { WelcomePageStyled } from "./WelcomePage.style";

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
            <Carousel.Item interval={3000} key={upComingMovie.id} className="caroussel-container">
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
