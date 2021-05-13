import { useState, useEffect } from "react";
// import Pagination from "react-bootstrap-4-pagination";
import ReactPaginate from "react-paginate";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Loader from "../Loader/Loader";

const SerieStyled = styled.div`
  padding-top: 5rem;
  h1 {
    margin-left: 5rem;
  }
`;
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
  .active {
    background-color: #2b6dfb;
  }
  .activeLink {
    color: #ffffff;
  }

  .pageLink {
    text-decoration: none;
  }
  .pageNumber {
    border: 1px solid #2b6dfb;
    padding: 0.2rem 0.5rem;
  }
  .pagination {
    display: flex;
    padding: 1rem;
    font-size: 1.3rem;
  }
  .next {
    margin: auto;
    margin-left: 0.5rem;
    color: #2b6dfb;
  }
  .previous {
    margin: auto;
    margin-right: 0.5rem;
    color: #2b6dfb;
  }
  .break {
    border: 1px solid #2b6dfb;
    color: #2b6dfb;
    padding: 0.2rem 0.5rem;
  }
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
  const [pageNumber, setPageNumber] = useState(1);
  const [tvToShow, setTvToShow] = useState(8);
  const [loading, setLoading] = useState(false);

  const handlePageChange = (page) => {
    const pageSelected = page.selected + 1;
    console.log("e.selected", pageSelected);
    setPageNumber(pageSelected);
  };
  useEffect(
    function () {
      setLoading(true);
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=FR&page=${pageNumber}`
      )
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          setLoading(false);
          const tvSeries = data;
          setTvPopular(tvSeries.results);
          setTotalPages(tvSeries.total_pages);
        });
    },
    [pageNumber]
  );
  let paginationConfig = {
    pageCount: totalPages,
    pageRangeDisplayed: 2,
    marginPagesDisplayed: 2,
    breakLabel: "...",
    breakClassName: "break",
    activeClassName: "active",
    activeLinkClassName: "activeLink",
    onPageChange: handlePageChange,
    pageLinkClassName: "pageLink",
    pageClassName: "pageNumber",
    containerClassName: "pagination",
    forcePage: pageNumber - 1,
    nextClassName: "next",
    previousClassName: "previous",
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
    <SerieStyled>
      {loading ? (
        <Loader />
      ) : (
        <>
          {<h1>Les series populaires</h1>}
          {<PopularTvStyled>{renderTvPopular()}</PopularTvStyled>}
          {
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
          }
          {
            <StyledPagination>
              {/* <Pagination {...paginationConfig} /> */}
              <ReactPaginate {...paginationConfig} />
            </StyledPagination>
          }
        </>
      )}
    </SerieStyled>
  );
};

export default Series;
