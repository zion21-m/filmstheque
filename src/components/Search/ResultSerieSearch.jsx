import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import NotAvailable from "../../Images/notavailableImg.png";

const TvSearchStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #a5a5a5;
`;
const ResultSerieSearch = ({ searchedWord }) => {
  const [tvDataSearched, setTvDataSearched] = useState();
  const imgUrl = "https://image.tmdb.org/t/p/w1280";

  const searchTvApiLink =
    "https://api.themoviedb.org/3/search/tv?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&query=";
  let tvLinkFetch = searchTvApiLink + searchedWord;

  useEffect(
    function () {
      fetch(tvLinkFetch)
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          let searchedTvData = data;
          setTvDataSearched(searchedTvData.results);
        });
    },
    [tvLinkFetch]
  );
  const renderSearchTv = () => {
    if (!tvDataSearched) {
      return <Loader />;
    } else {
      return tvDataSearched.map((tv) => {
        return (
          <CardContainer
            src={tv.poster_path ? imgUrl + tv.poster_path : NotAvailable}
            title={tv.title ? tv.title : tv.name}
            popularity={`Popularité: ${tv.popularity}`}
            details={`${tv.overview}`}
            id={tv.id}
            type="tv"
          />
        );
      });
    }
  };
  return (
    <div className="tvResult">
      <h2>Voici les resultats des series correspondant à "{searchedWord}"</h2>
      <TvSearchStyled>{renderSearchTv()}</TvSearchStyled>
    </div>
  );
};

export default ResultSerieSearch;
