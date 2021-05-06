import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";

const SearchStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Search = ({ resultDataSearch }) => {
  const arrayResearch = [];
  const poster = "https://image.tmdb.org/t/p/w1280";
  for (let index in resultDataSearch) {
    arrayResearch.push(resultDataSearch[index]);
  }
  const renderSearch = () => {
    return arrayResearch.map((movie) => {
      return (
        <CardContainer
          src={poster + movie.poster_path}
          title={movie.title ? movie.title : movie.name}
          popularity={`Popularité: ${movie.popularity}`}
          details={`${movie.overview}`}
        />
      );
    });
  };
  return (
    <>
      <h1>Je suis la section search</h1>
      <SearchStyled>{renderSearch()}</SearchStyled>
    </>
  );
};

export default Search;