import { Button } from "react-bootstrap";
import { StyledStartingPage } from "./StartingPage.style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const poster = "https://image.tmdb.org/t/p/w500";

const StartingPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const movie = data.results[0];

  const urlImage = movie.backdrop_path
    ? poster + movie.backdrop_path
    : poster + movie.poster_path;
  return (
    <StyledStartingPage urlImage={urlImage}>
      <div className="welcomeText">Bienvenue sur notre site</div>
      <div className="text">
        Trouvez tous les films et series que vous cherchez, et si vous n'avez
        pas de préférence, nous vous proposons, les films tendances, et les
        mieux cotés en fonction de l'appréciation du public
      </div>
      <div>
        <Link to="/home">
          <Button className="btn">Allez à l'accueil</Button>
        </Link>
      </div>
    </StyledStartingPage>
  );
};

export default StartingPage;
