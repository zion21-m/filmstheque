import styled from "styled-components";
import { NavLink, Switch, Route } from "react-router-dom";
import ResultMovieSearch from "./ResultMovieSearch";
import ResultSerieSearch from "./ResultSerieSearch";

const SeachSection = styled.section`
  padding: 0rem 0rem;
  padding-top: 5rem;
  ul li {
    text-decoration: none;
    display: inline-block;
    font-size: 1.5rem;
    padding: 0.8rem;
  }
  .active {
    background-color: blue;
    color: #ffffff;
    padding: 0.8rem;
    border-radius: 8px;
  }
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

const Search = ({ searchedWord }) => {
  return (
    <SeachSection>
      <p>Clickez sur une des catégories pour voir les résultats</p>
      <ul>
        <NavLink to="/search/movies">
          <li>Films</li>
        </NavLink>
        <NavLink to="/search/series">
          <li>Series</li>
        </NavLink>
      </ul>
      <Switch>
        <Route
          path="/search/movies"
          render={() => <ResultMovieSearch searchedWord={searchedWord} />}
        />
        <Route
          path="/search/series"
          render={() => <ResultSerieSearch searchedWord={searchedWord} />}
        />
      </Switch>
    </SeachSection>
  );
};

export default Search;
