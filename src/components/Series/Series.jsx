import { useState, useEffect } from "react";
import Pagination from "react-bootstrap-4-pagination";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
  margin-bottom: 1rem;
  Button {
    margin: 0.5rem;
  }
`;

const Series = () => {
  const [tvPopular, setTvPopular] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState();
  const [tvToShow, setTvToShow] = useState(8);

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

  const showMore = (e) => {
    e.preventDefault();
    setTvToShow(tvToShow + 4);
  };

  const showLess = (e) => {
    e.preventDefault();
    setTvToShow(tvToShow - 4);
  };

  const renderTvPopular = () => {
    const arrayPopularTv = [];
    for (let index in tvPopular) {
      if (index < tvToShow) {
        console.log("tvshow", tvToShow);
        arrayPopularTv.push(tvPopular[index]);
      }
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
      <ButtonContainer>
        {tvToShow < 16 ? (
          <Button variant="primary" onClick={showMore}>
            Voir plus
          </Button>
        ) : (
          <div></div>
        )}
        {tvToShow > 4 ? (
          <Button variant="warning" onClick={showLess}>
            Voir moins
          </Button>
        ) : (
          <div></div>
        )}
      </ButtonContainer>
      <StyledPagination>
        <Pagination {...paginationConfig} />
      </StyledPagination>
    </>
  );
};

export default Series;
