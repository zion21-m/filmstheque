import CardContainer from "../Card-film/Card-container";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import NotAvailable from "../../Images/notavailableImg.png";

const SeachSection = styled.section`
  padding: 0rem 0rem;
  h2 {
    margin-bottom: 2rem;
  }
  .moviesResult {
    background-color: #e5e5e5;
    padding: 3rem 2rem;
  }
  .tvResult {
    background-color: #a5a5a5;
    padding: 3rem 2rem;
  }
`;
const SearchStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 2rem;
`;
const TvSearchStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #a5a5a5;
`;

const Search = ({ dataSearchResult, searchedWord, tvDataSearched }) => {
  console.log("tvdataseartc", tvDataSearched);
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
            src={movie.poster_path ? poster + movie.poster_path : NotAvailable}
            title={movie.title ? movie.title : movie.name}
            popularity={`Popularité: ${movie.popularity}`}
            details={`${movie.overview}`}
            id={movie.id}
            type="movie"
          />
        );
      });
    };

    const renderSearchTv = () => {
      if (!tvDataSearched) {
        return <Loader />;
      } else {
        return tvDataSearched.map((tv) => {
          return (
            <CardContainer
              src={tv.poster_path ? poster + tv.poster_path : NotAvailable}
              title={tv.title ? tv.title : tv.name}
              popularity={`Popularité: ${tv.popularity}`}
              details={`${tv.overview}`}
              id={tv.id}
              type="tv"
            />
          );
        });
      }
    };

    return (
      <SeachSection>
        <div className="moviesResult">
          <h2>
            Voici les resultats des films correspondant à "{searchedWord}"
          </h2>
          <SearchStyled>{renderSearch()}</SearchStyled>
        </div>
        <div className="tvResult">
          <h2>
            Voici les resultats des series correspondant à "{searchedWord}"
          </h2>
          <TvSearchStyled>{renderSearchTv()}</TvSearchStyled>
        </div>
      </SeachSection>
    );
  }
};

export default Search;
