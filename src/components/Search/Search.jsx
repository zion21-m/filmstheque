import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const SearchStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Search = ({ dataSearchResult }) => {
  const arrayResearch = [];
  const poster = "https://image.tmdb.org/t/p/w1280";
  for (let index in dataSearchResult) {
    arrayResearch.push(dataSearchResult[index]);
  }
  if (!dataSearchResult) {
    return <Loader />;
  } else {
    const renderSearch = () => {
      return arrayResearch.map((movie) => {
        return (
          <CardContainer
            src={poster + movie.poster_path}
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
      <>
        <h1>Voici les resultats de la recherche</h1>
        <SearchStyled>{renderSearch()}</SearchStyled>
      </>
    );
  }
};

export default Search;
