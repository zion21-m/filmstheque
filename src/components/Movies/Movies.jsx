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
`;

const Movies = () => {
  const [pages, setPages] = useState(1);
  const [pageFetch, setPageFetch] = useState();
  const [movieByPopularity, setMovieByPopularity] = useState();
  useEffect(
    function () {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageFetch}&with_watch_monetization_types=flatrate`
      )
        .then(function (result) {
          return result.json();
        })
        .then(function (data) {
          const movies = data;
          setMovieByPopularity(movies.results);
          setPages(data.total_pages);
          console.log(data);
        });
    },
    [pageFetch]
  );

  let paginationConfig = {
    totalPages: pages,
    currentPage: pageFetch,
    showMax: 10,
    size: "lg",
    threeDots: true,
    prevNext: true,
    href: "/movies?page=*", // * will be replaced by the page number
    pageOneHref: "/movies",
    borderColor: "blue",
    activeBorderColor: "#0362FF",
    activeBgColor: "#0362FF",
    disabledBgColor: "#dddddd",
    activeColor: "#ffffff",
    color: "#0362FF",
    disabledColor: "#fff",
    shadow: true,

    onClick: (page) => {
      setPageFetch(page);
      console.log("page", page);
    },
  };
  // console.log("pageFetch", pageFetch);

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
        <Pagination {...paginationConfig} />
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
