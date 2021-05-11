import { useState, useEffect } from "react";
// import Pagination from "react-bootstrap/Pagination";
// import PageItem from "react-bootstrap/PageItem";
import Pagination from "react-bootstrap-4-pagination";

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

const Movies = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState();
  const [movieByPopularity, setMovieByPopularity] = useState();
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
    // disabledColor: "#656565",
    shadow: true,
    center: true,

    onClick: (page) => {
      setPageNumber(page);
    },
  };

  const imgUrl = "https://image.tmdb.org/t/p/w1280";
  const arrayMoviesByPopularity = [];
  for (let index in movieByPopularity) {
    arrayMoviesByPopularity.push(movieByPopularity[index]);
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

    // function App() {
    //   return (
    //     <div className="App">
    //     </div>
    //   );
    // }
    return (
      <MovieSection>
        <h1>Trouve ton film</h1>
        <p className="moviesPresentationText">
          Nos films sont présentés par popularité, en fonction des avis des
          autres utilisateurs, afin de vous présenter le meilleur.
        </p>
        <div className="moviesContainer">{renderMoviesByPopularity()}</div>
        <div className="pagination">
          <Pagination {...paginationConfig} />
        </div>
        {/* <Pagination {...mdSize} shadow /> */}
        {/* <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination> */}
      </MovieSection>
    );
  }
};

export default Movies;
