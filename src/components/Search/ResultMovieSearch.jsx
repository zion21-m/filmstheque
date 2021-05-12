import { useState, useEffect } from "react";
import CardContainer from "../Card-film/Card-container";
import Loader from "../Loader/Loader";
import styled from "styled-components";
import NotAvailable from "../../Images/notavailableImg.png";

const SearchStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 2rem;
`;

const ResultMovieSearch = ({ searchedWord }) => {
  const [movieSearchResult, setMovieSearchResult] = useState();
  const [loading, setLoading] = useState(false);
  const searchApiLink =
    "https://api.themoviedb.org/3/search/movie?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&query=";
  let linkToFetch = searchApiLink + searchedWord;

  useEffect(
    function () {
      setLoading(true);
      fetch(linkToFetch)
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          const searchData = data;
          setMovieSearchResult(searchData.results);
          setLoading(false);
        });
    },
    [linkToFetch]
  );
  const arrayResearch = [];
  const imgUrl = "https://image.tmdb.org/t/p/w1280";
  for (let index in movieSearchResult) {
    arrayResearch.push(movieSearchResult[index]);
  }

  const renderSearch = () => {
    return arrayResearch.map((movie) => {
      return (
        <CardContainer
          src={movie.poster_path ? imgUrl + movie.poster_path : NotAvailable}
          title={movie.title ? movie.title : movie.name}
          popularity={`Popularité: ${movie.popularity}`}
          details={`${movie.overview}`}
          id={movie.id}
          type="movie"
        />
      );
    });
  };

  return (
    <div className="moviesResult">
      {loading ? (
        <Loader />
      ) : (
        <>
          {
            <h2>
              Voici les resultats des films correspondant à "{searchedWord}"
            </h2>
          }
          {<SearchStyled>{renderSearch()}</SearchStyled>}
        </>
      )}
    </div>
  );
};

export default ResultMovieSearch;
