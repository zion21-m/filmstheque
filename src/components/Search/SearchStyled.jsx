import styled from "styled-components";

export const SearchSection = styled.section`
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
