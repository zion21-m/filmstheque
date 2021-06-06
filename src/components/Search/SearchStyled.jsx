import styled from "styled-components";

export const SearchSection = styled.section`
  padding: 0rem 0rem;
  padding-top: 5rem;
  .search-text {
    text-align: center;
    font-size: 1.4rem;
  }
  ul {
    display: flex;
    justify-content: center;
  }
  ul li {
    text-decoration: none;
    display: inline-block;
    font-size: 1.5rem;
    padding: 0.8rem;
  }
  .active {
    background-color: blue;
    color: #ffffff;
    border-radius: 8px;
  }
  h2 {
    margin-bottom: 2rem;
  }
  .moviesResult {
    background-color: #e5e5e5;
    padding: 3rem 2rem;
    h2 {
      text-align: center;
    }
  }
  .tvResult {
    background-color: #a5a5a5;
    padding: 3rem 2rem;
    h2 {
      text-align: center;
    }
  }
`;
