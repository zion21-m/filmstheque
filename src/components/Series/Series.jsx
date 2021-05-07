import { useState, useEffect } from "react";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";

const PopularTvStyled = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
`;
const Series = () => {
  const [tvPopular, setTvPopular] = useState();
  useEffect(function () {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=en-US&page=1"
    )
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {
        const tvSeries = data;
        setTvPopular(tvSeries.results);
      });
  }, []);
  console.log("tvpopular", tvPopular);
  const poster = "https://image.tmdb.org/t/p/w1280";

  const renderTvPopular = () => {
    const arrayPopularTv = [];
    for (let index in tvPopular) {
      arrayPopularTv.push(tvPopular[index]);
    }
    return arrayPopularTv.map((tvpopular) => {
      return (
        <CardContainer
          src={poster + tvpopular.poster_path}
          title={tvpopular.title ? tvpopular.title : tvpopular.name}
          popularity={`Popularité: ${tvpopular.popularity}`}
          details={`${tvpopular.overview}`}
          id={tvpopular.id}
          type="tv"
        />
      );
    });
  };
  return (
    <>
      <h1>Les series populaires</h1>
      <PopularTvStyled>{renderTvPopular()}</PopularTvStyled>
    </>
  );
};

export default Series;
