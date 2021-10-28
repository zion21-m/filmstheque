import { Button } from "react-bootstrap";
import { StyledStartingPage } from "./StartingPage.style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";

const poster = "https://image.tmdb.org/t/p/w500";

const StartingPage = () => {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c"
      )
      .then((response) => {
        
        setData(response.data.results);
      });

   
  }, []);
  

  if (data.length === 0) {
    return <Loader />;
  } else {
    return (
      <StyledStartingPage urlImage={poster + data[0].backdrop_path}>
        <div className="welcomeText">Bienvenue sur Nuru-films</div>
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
  }

};

export default StartingPage;
