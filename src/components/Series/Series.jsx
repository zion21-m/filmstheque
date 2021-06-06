import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import CardContainer from "../Card-film/Card-container";
import Button from "react-bootstrap/Button";
// import Loader from "../Loader/Loader";
import {
  ButtonContainer,
  SerieStyled,
  PopularTvStyled,
  PaginationStyle,
  GenresContainerStyle,
  ActiveGenre,
  TvSectionStyle,
} from "./SerieStyle";
// import SpinnerLoader from "../Loader/Spinner";

const Series = () => {
  const [tvPopular, setTvPopular] = useState();
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [tvToShow, setTvToShow] = useState(8);
  const [tvGenre, setTvGenre] = useState([]);
  const [tvGenreId, setTvGenreId] = useState("");
  const [activeGenre, setActiveGenre] = useState("Toutes les séries");
  const [loading, setLoading] = useState(false);

  const handlePageChange = (page) => {
    setPageNumber(page.selected + 1);
  };
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=en-US&sort_by=popularity.desc&page=${pageNumber}&timezone=America%2FNew_York&with_genres=${tvGenreId}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
    )
      .then((result) => result.json())
      .then((data) => {
        setLoading(false);
        setTvPopular(data.results);
        setTotalPages(data.total_pages);
      });
    fetch(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=dc9e7a7e71a1b73d9218ca72a5d9900c&language=fr"
    )
      .then((result) => result.json())
      .then((data) => {
        setTvGenre(data.genres);
      });
  }, [pageNumber, tvGenreId]);

  const displayTvGenres = () => {
    if (tvGenre) {
      return tvGenre.map((genre) => {
        return (
          <div
            className="tvGenre"
            onClick={() => {
              setTvGenreId(genre.id);
              setActiveGenre(genre.name);
            }}
          >
            {genre.name}
          </div>
        );
      });
    }
  };

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
    setTvToShow(tvToShow + 4);
  };

  const showLess = (e) => {
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
        <div>
          <CardContainer
            src={imgUrl + tvpopular.poster_path}
            title={tvpopular.title ? tvpopular.title : tvpopular.name}
            popularity={`Popularité: ${tvpopular.popularity}`}
            details={`${tvpopular.overview}`}
            id={tvpopular.id}
            type="tv"
            key={tvpopular.id}
            loading={loading}
          />
        </div>
      );
    });
  };
  return (
    <SerieStyled>
      <TvSectionStyle>
        <GenresContainerStyle>
          <div
            className="tvGenre"
            onClick={() => {
              setTvGenreId("");
              setActiveGenre("Toutes les séries");
            }}
          >
            Toutes les séries
          </div>
          {displayTvGenres()}
        </GenresContainerStyle>

        <ActiveGenre>{activeGenre}</ActiveGenre>
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

        <PaginationStyle>
          <ReactPaginate {...paginationConfig} />
        </PaginationStyle>
      </TvSectionStyle>
    </SerieStyled>
  );
};

export default Series;
