import { Button } from "react-bootstrap";
import { StyledStartingPage } from "./StartingPage.style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";

const poster = "https://image.tmdb.org/t/p/w500";

const StartingPage = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c"
      )
      .then((response) => {
        // setLoading(false);
        setData(response.data.results);
      });

    // const movie = data[0];

    // async function getData() {
    //   try {
    //     let res = await axios.get(
    //       "https://api.themoviedb.org/3/trending/all/day?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c"
    //     );
    //     return res.data;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    // getData().then((res) => setData(res.results));
  }, []);
  console.log("data", data);

  if (data.length === 0) {
    return <Loader />;
  } else {
    return (
      <StyledStartingPage urlImage={poster + data[0].backdrop_path}>
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
  }

  // return (
  //   <>
  //     {data ? (
  //       <div>Patientez</div>
  //     ) : (
  //       <StyledStartingPage urlImage={urlImage}>
  //         <div className="welcomeText">Bienvenue sur notre site</div>
  //         <div className="text">
  //           Trouvez tous les films et series que vous cherchez, et si vous
  //           n'avez pas de préférence, nous vous proposons, les films tendances,
  //           et les mieux cotés en fonction de l'appréciation du public
  //         </div>
  //         <div>
  //           <Link to="/home">
  //             <Button className="btn">Allez à l'accueil</Button>
  //           </Link>
  //         </div>
  //       </StyledStartingPage>
  //     )}
  //   </>
  // );
};

export default StartingPage;
