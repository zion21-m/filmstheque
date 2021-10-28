import { useState, useEffect } from "react";
import CardContainer from "../Card-film/Card-container";
import Loader from "../Loader/Loader";

const Recommandation = ({ urlSegment }) => {
  const [recommandations, setRecommandations] = useState();

  useEffect(
    function () {
      fetch(
        `https://api.themoviedb.org/3${urlSegment}/recommendations?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=en-US&page=1`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          const recommendationsData = data;
          setRecommandations(recommendationsData.results);
        });
    },
    [urlSegment]
  );
  const poster = "https://image.tmdb.org/t/p/w1280";

  if (!recommandations) {
    return <Loader />;
  } else {
    return recommandations.map((movie, index) => {
      return (
        <div key={index}>
          <CardContainer
            src={poster + movie.poster_path}
            title={movie.title ? movie.title : movie.name}
            details={`${movie.overview}`}
            id={movie.id}
            type={movie.media_type}
            
          />
        </div>
      );
    });
  }
};

export default Recommandation;
