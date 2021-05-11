import { useState, useEffect } from "react";
import Pagination from "react-bootstrap-4-pagination";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";

const PopularTvStyled = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
`;
const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  align-content: center;
  margin-top: 0.5rem;
  width: 80%;
`;

const Series = () => {
  const [tvPopular, setTvPopular] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState();

  let size = "lg";
  if (window.screen.width < 700) {
    size = "md";
  }
  let width = Math.ceil(window.screen.width / 200);
  if (width < 3) {
    width = 2;
  }

  useEffect(
    function () {
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=FR&page=${pageNumber}`
      )
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          const tvSeries = data;
          setTvPopular(tvSeries.results);
          setTotalPages(tvSeries.total_pages);
        });
    },
    [pageNumber]
  );

  let paginationConfig = {
    totalPages: totalPages,
    currentPage: pageNumber,
    showMax: width,
    size: size,
    threeDots: true,
    prevNext: true,
    href: "/movies?page=*", // * will be replaced by the page number
    pageOneHref: "/movies",
    borderColor: "#0362FF",
    activeBorderColor: "#0362FF",
    activeBgColor: "#0362FF",
    disabledBgColor: "#dddddd",
    disabledBorderColor: "#dddddd",
    activeColor: "#ffffff",
    color: "#0362FF",
    // disabledColor: "#656565",
    shadow: true,
    center: true,

    onClick: (page) => {
      setPageNumber(page);
    },
  };

  const imgUrl = "https://image.tmdb.org/t/p/w1280";

  const renderTvPopular = () => {
    const arrayPopularTv = [];
    for (let index in tvPopular) {
      arrayPopularTv.push(tvPopular[index]);
    }
    return arrayPopularTv.map((tvpopular) => {
      return (
        <CardContainer
          src={imgUrl + tvpopular.poster_path}
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
      <StyledPagination>
        <Pagination {...paginationConfig} />
      </StyledPagination>
    </>
  );
};

export default Series;
