import { useState, useEffect } from "react";
import CardContainer from "../Card-film/Card-container";

const Recommandation = ({ urlSegment }) => {
  const [recommandations, setRecommandations] = useState();

  useEffect(function () {
    fetch(
      `https://api.themoviedb.org/3/${urlSegment}/recommendations?api_key=<<api_key>>&language=en-US&page=1`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const recommendationsData = data;
        setRecommandations(recommendationsData.results);
      });
  });
  if (recommandations) {
    return recommandations.map((movie) => {
      return (
        <CardContainer
          src={poster + movie.poster_path}
          title={movie.title ? movie.title : movie.name}
          details={`${movie.overview}`}
          id={movie.id}
          type="movie"
        />
      );
    });
  }
  return <div></div>;
};

export default Recommandation;
