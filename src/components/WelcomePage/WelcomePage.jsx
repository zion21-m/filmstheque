import { useState, useEffect } from "react";

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
  console.log("movie welcome", upComingMovies);
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
        <div>
          <img
            src={poster + upComingMovie.poster_path}
            alt={upComingMovie.title}
          />
        </div>
      );
    });
  };

  return <section>{renderUpComingMovies()}</section>;
};

export default WelcomePage;
