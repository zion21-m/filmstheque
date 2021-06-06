import { NavLink, Switch, Route } from "react-router-dom";
import ResultMovieSearch from "./ResultMovieSearch";
import ResultSerieSearch from "./ResultSerieSearch";
import { SearchSection } from "./SearchStyled";

const Search = ({ searchedWord }) => {
  return (
    <SearchSection>
      <p className="search-text">
        Clickez sur une des catégories pour voir les résultats correspondant à
        cette catégorie
      </p>
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
    </SearchSection>
  );
};

export default Search;
