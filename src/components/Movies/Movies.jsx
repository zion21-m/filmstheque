import { useState, useEffect } from "react";
import Pagination from "react-bootstrap-4-pagination";
import Button from "react-bootstrap/Button";
import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const MovieSection = styled.section`
  padding: 1rem;
  background-color: #e5e5e5;
  .moviesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  h1 {
    font-size: 1.3rem;
  }
  .moviesPresentationText {
    font-size: 1rem;
  }
  .pagination {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    margin-top: 0.5rem;
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

const Movies = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState();
  const [movieByPopularity, setMovieByPopularity] = useState();
  const [tvToShow, setTvToShow] = useState(8);

  useEffect(
    function () {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`
      )
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          const movies = data;
          setMovieByPopularity(movies.results);
          setTotalPages(data.total_pages);
          console.log(data);
        });
    },
    [pageNumber]
  );

  let paginationConfig = {
    totalPages: totalPages,
    currentPage: pageNumber,
    showMax: 10,
    size: "lg",
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
    shadow: true,
    center: true,

    onClick: (page) => {
      setPageNumber(page);
    },
  };
  const showMore = (e) => {
    e.preventDefault();
    setTvToShow(tvToShow + 4);
  };

  const showLess = (e) => {
    e.preventDefault();
    setTvToShow(tvToShow - 4);
  };

  const imgUrl = "https://image.tmdb.org/t/p/w1280";
  const arrayMoviesByPopularity = [];
  for (let index in movieByPopularity) {
    if (index < tvToShow) {
      arrayMoviesByPopularity.push(movieByPopularity[index]);
    }
  }

  if (!movieByPopularity) {
    return <Loader />;
  } else {
    const renderMoviesByPopularity = () => {
      return arrayMoviesByPopularity.map((movie) => {
        return (
          <CardContainer
            src={imgUrl + movie.poster_path}
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
      <MovieSection>
        <h1>Trouve ton film</h1>
        <p className="moviesPresentationText">
          Nos films sont présentés par popularité, en fonction des avis des
          autres utilisateurs, afin de vous présenter le meilleur.
        </p>
        <div className="moviesContainer">{renderMoviesByPopularity()}</div>
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
        <div className="pagination">
          <StyledPagination>
            <Pagination {...paginationConfig} />
          </StyledPagination>
        </div>
      </MovieSection>
    );
  }
};

export default Movies;
