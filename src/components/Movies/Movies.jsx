import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import CardContainer from "../Card-film/Card-container";
import {
  MovieSection,
  GenresContainerStyle,
  ActiveGenre,
  ButtonContainer,
  StyledPagination,
} from "./MovieStyle";
import Loader from "../Loader/Loader";
import ReactPaginate from "react-paginate";

const Movies = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState();
  const [movieByPopularity, setMovieByPopularity] = useState();
  const [tvToShow, setTvToShow] = useState(8);
  const [moviesGenre, setMoviesGenre] = useState([]);
  const [movieGenreId, setMovieGenreId] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${movieGenreId}&with_watch_monetization_types=flatrate`
    )
      .then((result) => result.json())
      .then((data) => {
        setLoading(false);
        setMovieByPopularity(data.results);
        setTotalPages(data.total_pages);
      });
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=FR"
    )
      .then((result) => result.json())
      .then((data) => {
        setMoviesGenre(data.genres);
      });
  }, [pageNumber, movieGenreId]);

  const displayMoviesGenres = () => {
    if (moviesGenre) {
      return moviesGenre.map((genre) => {
        return (
          <div
            className="movieGenre"
            onClick={() => {
              setMovieGenreId(genre.id);
              setActiveGenre(genre.name);
            }}
          >
            {genre.name}
            {console.log("url genre segment", movieGenreId)}
          </div>
        );
      });
    }
  };
  const handleClick = (page) => {
    const pageNumber = page.selected + 1;
    setPageNumber(pageNumber);
  };
  let paginationConfig = {
    pageCount: totalPages,
    pageRangeDisplayed: 4,
    marginPagesDisplayed: 2,
    breakLabel: "...",
    breakClassName: "break",
    activeClassName: "activePage",
    activeLinkClassName: "activePageLink",
    onPageChange: handleClick,
    pageLinkClassName: "pageNumberLink",
    pageClassName: "pageNumber",
    containerClassName: "paginationBar",
    nextClassName: "next",
    previousClassName: "previous",
  };

  const showMore = (e) => {
    setTvToShow(tvToShow + 4);
  };

  const showLess = (e) => {
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
            loading={loading}
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
        <GenresContainerStyle>
          <div
            className="movieGenre"
            onClick={() => {
              setMovieGenreId("");
              setActiveGenre("All");
            }}
          >
            All
          </div>
          {displayMoviesGenres()}
        </GenresContainerStyle>
        <ActiveGenre>{activeGenre}</ActiveGenre>
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
            <div className="reactPaginate">
              <ReactPaginate {...paginationConfig} />
            </div>
          </StyledPagination>
        </div>
      </MovieSection>
    );
  }
};

export default Movies;
